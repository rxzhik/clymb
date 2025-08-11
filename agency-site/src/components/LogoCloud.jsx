export default function LogoCloud() {
	const logos = ["Dreamure", "Switch.win", "Sphere", "PinSpace", "Visionix"];
	return (
		<div className="max-w-6xl mx-auto py-8 opacity-80" aria-label="Trusted by">
			<div className="flex flex-wrap items-center justify-center gap-10">
				{logos.map((l, i) => (
					<img
						key={i}
						src={`https://dummyimage.com/120x32/ffffff/000&text=${encodeURIComponent(
							l
						)}`}
						alt={l}
						className="grayscale hover:grayscale-0 transition"
						loading="lazy"
						decoding="async"
					/>
				))}
			</div>
		</div>
	);
}
