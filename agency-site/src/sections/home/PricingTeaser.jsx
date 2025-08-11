import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function PricingTeaser() {
	const ref = useRef(null);
	useReveal(ref);
	const tiers = [
		{ name: "Starter", price: "$2k/mo" },
		{ name: "Growth", price: "$6k/mo" },
		{ name: "Scale", price: "$12k/mo" },
	];
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-6" data-reveal>
				Simple plans
			</h2>
			<div className="grid md:grid-cols-3 gap-4">
				{tiers.map((t, i) => (
					<Card key={i} data-reveal className="text-center">
						<div className="text-xl font-semibold">{t.name}</div>
						<div className="text-4xl font-black my-2">{t.price}</div>
						<ul className="opacity-80">
							<li>Monthly sprints</li>
							<li>Reports</li>
							<li>Slack support</li>
						</ul>
						<button className="btn btn-primary rounded-2xl mt-4">Choose</button>
					</Card>
				))}
			</div>
		</section>
	);
}
