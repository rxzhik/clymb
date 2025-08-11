import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function MissionHero() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 pt-16">
			<h1 className="text-5xl font-black mb-2" data-reveal>
				Clarity. Craft. Results.
			</h1>
			<p className="opacity-85 max-w-2xl" data-reveal>
				We build compounding growth machines for category leaders.
			</p>
			<div
				className="h-56 mt-6 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent"
				data-reveal
			></div>
		</section>
	);
}
