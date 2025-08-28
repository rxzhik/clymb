export default function Footer() {
	return (
		<footer className="mt-20 border-t border-white/10">
			<div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
				<div>
					<div className="font-black text-4xl sm:text-5xl mb-3 tracking-tight leading-none">
						clymb
					</div>
					<p className="opacity-80 max-w-xs text-sm">
						Turning Ambition into Altitute
					</p>
				</div>
				<nav className="flex  justify-center items-center gap-8 text-l">
					<a href="/about" className="link link-hover whitespace-nowrap">
						About us
					</a>
					<a href="/contact" className="link link-hover whitespace-nowrap">
						Contact us
					</a>
				</nav>
				<div className="flex  md:justify-end">
					<a
						href="/contact"
						className="btn btn-primary rounded-2xl self-start shadow-[0_0_20px_rgba(var(--glow-magenta)/0.35)]"
					>
						Start Project →
					</a>
				</div>
			</div>
			<div className="text-center opacity-70 pb-6 text-xs">
				© 2025 clymb. All rights reserved.
			</div>
		</footer>
	);
}
