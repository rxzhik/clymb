import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onS = () => setScrolled(window.scrollY > 8);
		onS();
		window.addEventListener("scroll", onS);
		return () => window.removeEventListener("scroll", onS);
	}, []);
	const link = ({ isActive }) =>
		`px-3 py-2 rounded-lg ${
			isActive ? "text-info" : "opacity-80 hover:opacity-100"
		}`;
	return (
		<div
			className={`sticky top-0 z-40 ${
				scrolled ? "backdrop-blur bg-black/30" : ""
			}`}
			role="navigation"
			aria-label="Main"
		>
			<div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<NavLink to="/" className="font-black text-3xl tracking-tight">
					Clymb
				</NavLink>

				{/* Centered mobile "More" dropdown */}
				<div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<div className="dropdown dropdown-bottom">
						<button
							tabIndex={0}
							className="btn btn-sm btn-ghost rounded-2xl gap-2"
							aria-label="Open menu"
							aria-haspopup="menu"
						>
							{/* Burger icon */}
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
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-2 p-2 shadow rounded-box bg-base-100 text-base-content z-50"
						>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							<li>
								<NavLink to="/services">Services</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</div>

				<nav className="hidden md:flex gap-2">
					<NavLink to="/about" className={link}>
						About
					</NavLink>
					<NavLink to="/services" className={link}>
						Services
					</NavLink>
					<NavLink to="/contact" className={link}>
						Contact
					</NavLink>
				</nav>
				<div className="flex gap-2">
					<a
						href="#book"
						className="btn btn-sm btn-ghost rounded-2xl hidden md:flex"
					>
						Log in
					</a>
					<NavLink
						to="/contact"
						className="btn btn-sm btn-primary rounded-2xl shadow-[0_0_30px_rgba(var(--glow-magenta)/0.35)]"
					>
						Start Project
					</NavLink>
				</div>
			</div>
		</div>
	);
}
