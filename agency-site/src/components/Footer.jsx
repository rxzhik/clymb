export default function Footer() {
	return (
		<footer className="mt-20 border-t border-white/10">
			<div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
				<div>
					<div className="font-black text-2xl mb-2">Agency</div>
					<p className="opacity-80">
						Premium marketing execution for ambitious teams.
					</p>
				</div>
				<nav className="grid gap-2">
					<a className="link link-hover">Services</a>
					<a className="link link-hover">Case studies</a>
					<a className="link link-hover">Pricing</a>
				</nav>
				<nav className="grid gap-2">
					<a className="link link-hover">About</a>
					<a className="link link-hover">Careers</a>
					<a className="link link-hover">Contact</a>
				</nav>
				<form className="grid gap-2">
					<label className="text-sm opacity-75">Subscribe for insights</label>
					<input
						type="email"
						placeholder="you@company.com"
						className="input input-bordered rounded-2xl"
					/>
					<button className="btn btn-primary rounded-2xl">
						Join newsletter
					</button>
				</form>
			</div>
			<div className="text-center opacity-70 pb-6">
				© 2025 Agency. All rights reserved.
			</div>
		</footer>
	);
}
