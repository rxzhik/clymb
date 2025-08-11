import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function Values() {
	const ref = useRef(null);
	useReveal(ref);
	const vals = [
		"Clarity",
		"Ownership",
		"Craft",
		"Results",
		"Learning",
		"Kindness",
	];
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-4"
		>
			{vals.map((v, i) => (
				<Card key={i} data-reveal>
					<h3 className="font-semibold text-xl">{v}</h3>
					<p className="opacity-80">
						We value {v.toLowerCase()} in everything we do.
					</p>
				</Card>
			))}
		</section>
	);
}
