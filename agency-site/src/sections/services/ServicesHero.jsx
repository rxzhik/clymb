import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function ServicesHero() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 pt-16">
			<h1 className="text-5xl font-black mb-2" data-reveal>
				Services built for scale
			</h1>
			<p className="opacity-85 max-w-2xl" data-reveal>
				Pick what you need today—add a lane tomorrow.
			</p>
		</section>
	);
}
