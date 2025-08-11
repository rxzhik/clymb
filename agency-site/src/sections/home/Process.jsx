import { useRef, useEffect } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Process() {
	const ref = useRef(null);
	useReveal(ref);
	useEffect(() => {
		const prefersReduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReduced) return;
		const lines = ref.current.querySelectorAll("path[data-line]");
		lines.forEach((p) => {
			const length = p.getTotalLength();
			gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
			gsap.to(p, {
				strokeDashoffset: 0,
				duration: 1.2,
				scrollTrigger: { trigger: p, start: "top 85%", once: true },
			});
		});
	}, []);
	const steps = ["Discover", "Strategy", "Execute", "Optimize"];
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-6" data-reveal>
				How we work
			</h2>
			<div className="grid md:grid-cols-4 gap-4">
				{steps.map((s, i) => (
					<div key={i} className="glass p-5" data-reveal>
						<div className="text-sm opacity-70">Step {i + 1}</div>
						<div className="font-semibold text-xl">{s}</div>
						<p className="opacity-80 mt-2">
							Short copy about {s.toLowerCase()}.
						</p>
					</div>
				))}
			</div>
			<svg
				className="w-full h-10 mt-4"
				viewBox="0 0 100 10"
				preserveAspectRatio="none"
			>
				<path
					data-line
					d="M0,5 L100,5"
					stroke="rgba(255,255,255,.2)"
					strokeWidth="1"
					fill="none"
				/>
			</svg>
		</section>
	);
}
