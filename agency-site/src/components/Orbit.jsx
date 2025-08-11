import { useEffect, useRef } from "react";
import orbitLoop from "../lib/animations/orbitLoop.js";

export default function Orbit() {
	const ref = useRef(null);
	useEffect(() => orbitLoop(ref.current), []);

	// Nine icons from public/icons, shown with varied sizes and radii.
	const icons = [
		"camera.png",
		"google-ads.png",
		"instagram.png",
		"linkedin.png",
		"meta.png",
		"seo.png",
		"snapchat.png",
		"twitter.png",
		"youtube.png",
	];
	const sizes = [48, 64, 50, 36, 26, 32, 58, 38, 90]; // px
	const jitter = [-10, 6, -4, 8, -7, 5, -3, 7, -6]; // degrees offset to avoid perfect uniformity
	const radii = [44, 46, 42, 47, 43, 45, 41, 48, 44]; // percent from center

	const step = 360 / icons.length;
	const polarToPercent = (angleDeg, radiusPercent) => {
		const rad = (angleDeg * Math.PI) / 180;
		return {
			left: `${50 + radiusPercent * Math.cos(rad)}%`,
			top: `${50 - radiusPercent * Math.sin(rad)}%`,
		};
	};

	return (
		<div ref={ref} className="relative w-full max-w-md aspect-square mx-auto">
			<div className="absolute inset-0 rounded-full opacity-60 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl"></div>
			<div className="orbit-parent absolute inset-6 rounded-full border border-white/10">
				{[...Array(3)].map((_, i) => (
					<div
						key={i}
						className="absolute inset-0 rounded-full border border-white/10"
						style={{ inset: `${i * 12 + 6}px` }}
					/>
				))}

				{/* Orbiting items: evenly distributed with a little jitter and varied sizes */}
				{icons.map((name, i) => {
					const angle = i * step + jitter[i % jitter.length];
					const radius = radii[i % radii.length];
					const pos = polarToPercent(angle, radius);
					const size = sizes[i % sizes.length];
					return (
						<div
							key={name}
							className="orbit-item absolute -translate-x-1/2 -translate-y-1/2"
							style={pos}
						>
							<div
								className="rounded-2xl overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(var(--glow-blue)/0.25)] bg-black/30 backdrop-blur"
								style={{ width: `${size}px`, height: `${size}px` }}
							>
								<img
									src={`/icons/${name}`}
									alt={name.replace(/[-_.]/g, " ")}
									className="w-full h-full object-contain"
								/>
							</div>
						</div>
					);
				})}

				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-center">
						<div className="text-5xl font-bold">10+</div>
						<div className="opacity-70">Services</div>
					</div>
				</div>
			</div>
		</div>
	);
}
