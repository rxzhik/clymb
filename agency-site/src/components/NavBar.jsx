import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import { services } from "../data/services.js";
import { gsap } from "gsap";

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [focusMegaOnOpen, setFocusMegaOnOpen] = useState(false);
	const panelRef = useRef(null);
	const mobilePanelRef = useRef(null);
	const loc = useLocation();

	// Top-level menubar roving focus
	const topRefs = useRef([]); // indexes: 0 About, 1 Services, 2 Contact
	const [activeTop, setActiveTop] = useState(0);
	const servicesBtnRef = useRef(null);
	const prevFocusedRef = useRef(null);

	useEffect(() => {
		const onS = () => setScrolled(window.scrollY > 8);
		onS();
		window.addEventListener("scroll", onS);
		return () => window.removeEventListener("scroll", onS);
	}, []);

	// Animate mega menu items when opening
	useEffect(() => {
		if (!open || !panelRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				panelRef.current.querySelectorAll("[data-mega-item]"),
				{ y: 10, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: "power2.out" }
			);
		}, panelRef);
		return () => ctx.revert();
	}, [open]);

	// Close on route change
	useEffect(() => {
		setOpen(false);
		setMobileOpen(false);
	}, [loc.pathname, loc.hash, loc.search]);

	// Manage roving tabindex for top-level items
	useEffect(() => {
		(topRefs.current || []).forEach((el, i) => {
			if (el) el.tabIndex = i === activeTop ? 0 : -1;
		});
	}, [activeTop, open]);

	// Focus trap + Esc inside mega panel
	useEffect(() => {
		function onKey(e) {
			if (!open) return;
			if (e.key === "Escape") {
				setOpen(false);
				servicesBtnRef.current?.focus();
			}
			if (e.key === "Tab" && panelRef.current) {
				const focusables =
					panelRef.current.querySelectorAll("[data-mega-focus]");
				if (!focusables.length) return;
				const list = Array.from(focusables);
				const idx = list.indexOf(document.activeElement);
				if (e.shiftKey) {
					if (idx <= 0) {
						e.preventDefault();
						list[list.length - 1].focus();
					}
				} else {
					if (idx === list.length - 1) {
						e.preventDefault();
						list[0].focus();
					}
				}
			}
			// Arrow key navigation within mega menu (grid order)
			if (
				panelRef.current &&
				["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)
			) {
				const items = panelRef.current.querySelectorAll("[data-mega-focus]");
				if (!items.length) return;
				const list = Array.from(items);
				const colCount = 5; // approximate for service grids
				const idx = list.indexOf(document.activeElement);
				if (idx === -1) return;
				let next = idx;
				switch (e.key) {
					case "ArrowRight":
						next = (idx + 1) % list.length;
						break;
					case "ArrowLeft":
						next = (idx - 1 + list.length) % list.length;
						break;
					case "ArrowDown":
						next = idx + colCount < list.length ? idx + colCount : idx;
						break;
					case "ArrowUp":
						next = idx - colCount >= 0 ? idx - colCount : idx;
						break;
					default:
						break;
				}
				if (next !== idx) {
					e.preventDefault();
					list[next].focus();
				}
			}
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open]);

	// When menu opens due to keyboard intent, focus first mega item
	useEffect(() => {
		if (open && focusMegaOnOpen && panelRef.current) {
			const first = panelRef.current.querySelector("[data-mega-focus]");
			first?.focus();
			setFocusMegaOnOpen(false);
		}
	}, [open, focusMegaOnOpen]);

	const onTopKeyDown = useCallback(
		(e) => {
			const count = topRefs.current.length;
			if (!count) return;
			if (e.key === "ArrowRight") {
				e.preventDefault();
				setActiveTop((i) => (i + 1) % count);
			}
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				setActiveTop((i) => (i - 1 + count) % count);
			}
			if (e.key === "Home") {
				e.preventDefault();
				setActiveTop(0);
			}
			if (e.key === "End") {
				e.preventDefault();
				setActiveTop(count - 1);
			}
			// Open mega with Down or Enter/Space when Services focused
			const servicesIndex = 1;
			if (activeTop === servicesIndex && e.key === "ArrowDown") {
				e.preventDefault();
				prevFocusedRef.current = document.activeElement;
				setOpen(true);
				setFocusMegaOnOpen(true);
			}
			if (activeTop === servicesIndex && (e.key === "Enter" || e.key === " ")) {
				e.preventDefault();
				prevFocusedRef.current = document.activeElement;
				setOpen((o) => !o);
				if (!open) setFocusMegaOnOpen(true);
			}
			if (e.key === "Escape") {
				if (open) {
					setOpen(false);
					servicesBtnRef.current?.focus();
				}
			}
		},
		[activeTop, open]
	);

	const link = ({ isActive }) =>
		`px-3 py-2 rounded-lg ${
			isActive ? "text-info" : "opacity-80 hover:opacity-100"
		}`;
	const featured = services[0];

	// Lock body scroll when mobile sheet open
	useEffect(() => {
		const root = document.documentElement;
		if (mobileOpen) root.classList.add("overflow-hidden");
		else root.classList.remove("overflow-hidden");
		return () => root.classList.remove("overflow-hidden");
	}, [mobileOpen]);

	// Focus first focusable in mobile sheet when opened
	useEffect(() => {
		if (mobileOpen && mobilePanelRef.current) {
			requestAnimationFrame(() => {
				mobilePanelRef.current?.querySelector("[data-mobile-focus]")?.focus();
			});
		}
	}, [mobileOpen]);

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 ${
				scrolled ? "backdrop-blur bg-black/30" : ""
			}`}
			role="navigation"
			aria-label="Main"
		>
			{/* Overlays */}
			{open && (
				<div
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden md:block"
					aria-hidden="true"
					onClick={() => setOpen(false)}
				/>
			)}
			{mobileOpen && (
				<div
					className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
					aria-hidden="true"
					onClick={() => setMobileOpen(false)}
				/>
			)}
			{/* Bar */}
			<div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between z-50">
				<NavLink
					to="/"
					className="font-black text-3xl tracking-tight relative z-50"
				>
					Clymb
				</NavLink>
				{/* Mobile services button (replaces dropdown) */}
				<div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<button
						className="btn btn-sm btn-ghost rounded-2xl gap-2"
						aria-label="Open menu"
						aria-haspopup="menu"
						aria-expanded={mobileOpen}
						onClick={() => setMobileOpen((o) => !o)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="size-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				{/* Existing desktop nav ...existing code... */}
				<nav
					className="hidden md:flex gap-2 relative z-50"
					role="menubar"
					aria-label="Primary"
					onKeyDown={onTopKeyDown}
				>
					<NavLink
						to="/about"
						className={link}
						ref={(el) => (topRefs.current[0] = el)}
						role="menuitem"
						aria-label="About"
					>
						About
					</NavLink>
					<button
						className="px-3 py-2 rounded-lg opacity-80 hover:opacity-100"
						aria-haspopup="true"
						aria-expanded={open}
						aria-controls="services-mega"
						role="menuitem"
						ref={(el) => {
							topRefs.current[1] = el;
							servicesBtnRef.current = el;
						}}
						onClick={(e) => {
							prevFocusedRef.current = e.currentTarget;
							setOpen((o) => !o);
							if (!open) setFocusMegaOnOpen(false);
						}}
					>
						Services
					</button>
					<NavLink
						to="/contact"
						className={link}
						ref={(el) => (topRefs.current[2] = el)}
						role="menuitem"
						aria-label="Contact"
					>
						Contact
					</NavLink>
				</nav>
				<div className="flex gap-2 relative z-50">
					<NavLink
						to="/contact"
						className="btn btn-sm btn-primary rounded-2xl shadow-[0_0_30px_rgba(var(--glow-magenta)/0.35)]"
					>
						Start Project
					</NavLink>
				</div>
			</div>
			{/* Desktop mega panel ...existing code... */}
			<div
				id="services-mega"
				ref={panelRef}
				className={`transition-all duration-300 ease-out ${
					open
						? "opacity-100 translate-y-0"
						: "pointer-events-none opacity-0 -translate-y-2"
				} hidden md:block fixed left-0 right-0 top-[60px] z-50`}
				aria-hidden={!open}
				role="region"
				aria-label="Services mega menu"
			>
				<div className="mx-auto max-w-7xl px-6">
					<div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-violet-900/95 via-purple-900/95 to-indigo-950/95 backdrop-blur-xl">
						<div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
							<h2 className="text-sm font-semibold tracking-wider text-info mb-6">
								Services & Pillars
							</h2>
							<div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
								{services.map((s) => (
									<div
										key={s.id}
										className="flex flex-col gap-3 group"
										data-mega-item
									>
										<NavLink
											to={`/services/${s.id}`}
											className="flex items-center gap-2 rounded-xl px-3 py-2 bg-white/5 hover:bg-white/10 focus:bg-white/10 transition outline-none"
											data-mega-focus
										>
											<span className="text-2xl" aria-hidden>
												{s.icon}
											</span>
											<span className="text-xs font-bold tracking-wide text-white/85 group-hover:text-info leading-tight line-clamp-2">
												{s.title}
											</span>
										</NavLink>
										<ul className="flex flex-col gap-1 pl-1">
											{s.bullets?.slice(0, 6).map((b) => (
												<li key={b.id}>
													<NavLink
														to={`/services/${s.id}#${b.id}`}
														className="block text-[11px] leading-snug rounded-lg px-2 py-1 text-white/60 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white transition outline-none"
														data-mega-focus
													>
														{b.label}
													</NavLink>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
							<div className="mt-8 flex items-center justify-between gap-4">
								<p className="text-xs text-white/50">
									Jump straight into any capability area or deep‑dive pillar.
								</p>
								<NavLink
									to="/contact"
									className="btn btn-sm btn-primary rounded-2xl shadow-[0_0_18px_rgba(var(--glow-magenta)/0.35)]"
									data-mega-focus
								>
									Start Project
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile full-screen services sheet */}
			{mobileOpen && (
				<div
					ref={mobilePanelRef}
					className="fixed inset-0 z-[70] md:hidden flex flex-col bg-gradient-to-b from-violet-900/95 via-purple-950/95 to-indigo-950/95"
					role="dialog"
					aria-modal="true"
					aria-label="Mobile services menu"
				>
					<div className="flex items-center justify-between px-5 pt-6 pb-4">
						<div className="font-bold text-xl">Menu</div>
						<button
							className="btn btn-sm btn-ghost rounded-full"
							aria-label="Close menu"
							data-mobile-focus
							onClick={() => setMobileOpen(false)}
						>
							✕
						</button>
					</div>
					<div className="px-6 pb-4 space-y-6 overflow-y-auto flex-1">
						<div className="grid grid-cols-5 gap-4 text-xs font-medium text-white/90">
							{services.slice(0, 5).map((s) => (
								<NavLink
									key={s.id}
									to={`/services/${s.id}`}
									className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm"
									data-mobile-focus
									onClick={() => setMobileOpen(false)}
								>
									<span className="text-2xl" aria-hidden>
										{s.icon}
									</span>
									<span className="text-center leading-tight">
										{s.title.split("&")[0]}
									</span>
								</NavLink>
							))}
						</div>
						<div className="grid grid-cols-5 gap-4 text-xs font-medium text-white/90">
							{services.slice(5, 10).map((s) => (
								<NavLink
									key={s.id}
									to={`/services/${s.id}`}
									className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm"
									data-mobile-focus
									onClick={() => setMobileOpen(false)}
								>
									<span className="text-2xl" aria-hidden>
										{s.icon}
									</span>
									<span className="text-center leading-tight">
										{s.title.split("&")[0]}
									</span>
								</NavLink>
							))}
						</div>
						<div className="pt-4 border-t border-white/10 flex flex-col gap-3">
							<NavLink
								to="/about"
								className="text-white/80 hover:text-white text-sm"
								data-mobile-focus
								onClick={() => setMobileOpen(false)}
							>
								About
							</NavLink>
							<NavLink
								to="/contact"
								className="text-white/80 hover:text-white text-sm"
								data-mobile-focus
								onClick={() => setMobileOpen(false)}
							>
								Contact
							</NavLink>
							<NavLink
								to="/services"
								className="text-info text-sm font-medium"
								data-mobile-focus
								onClick={() => setMobileOpen(false)}
							>
								All Services →
							</NavLink>
						</div>
						<div className="py-6">
							<NavLink
								to="/contact"
								className="btn btn-primary w-full rounded-2xl"
								data-mobile-focus
								onClick={() => setMobileOpen(false)}
							>
								Start Project
							</NavLink>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
