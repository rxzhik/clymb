import { useEffect, useRef } from "react";
import Button from "../../components/Button.jsx";
import Orbit from "../../components/Orbit.jsx";
import heroTimeline from "../../lib/animations/heroTimeline.js";
import magneticButton from "../../lib/animations/magneticButton.js";

export default function Hero() {
	const scope = useRef(null);
	const primaryRef = useRef(null);
	useEffect(() => {
		const kill = heroTimeline(scope.current);
		const cleanup = primaryRef.current
			? magneticButton(primaryRef.current)
			: null;
		return () => {
			kill?.();
			cleanup?.();
		};
	}, []);

	return (
		<section className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 grid md:grid-cols-2 gap-10 items-center">
			<div ref={scope}>
				<h1 className="text-5xl md:text-6xl font-black leading-tight">
					{["Unlock Top", "Marketing Talent", "Just One Click Away"].map(
						(w, i) => (
							<span key={i} data-hero-word className="block">
								{w}
							</span>
						)
					)}
				</h1>
				<p className="mt-4 text-lg opacity-85 max-w-xl" data-hero-word>
					We plug elite marketers into your roadmap—fast. Strategy, execution,
					growth.
				</p>
				<div className="mt-6 flex gap-3">
					<Button ref={primaryRef} data-hero-cta className="group">
						Start Project<span className="ml-1">→</span>
					</Button>
					<Button variant="ghost" data-hero-cta>
						Explore Services
					</Button>
				</div>
			</div>
			<div className="relative">
				<Orbit />
			</div>
		</section>
	);
}
