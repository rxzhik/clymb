import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function Team() {
	const ref = useRef(null);
	useReveal(ref);
	const team = [
		["Rhea", "Head of Strategy"],
		["Ken", "Performance Lead"],
		["Jas", "Design"],
		["Luis", "Data"],
	];
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-6" data-reveal>
				Team
			</h2>
			<div className="grid md:grid-cols-4 gap-4">
				{team.map(([n, r], i) => (
					<Card key={i} data-reveal>
						<div className="avatar placeholder mb-3">
							<div className="bg-info text-neutral-content rounded-full w-16">
								<span>{n[0]}</span>
							</div>
						</div>
						<div className="font-semibold">{n}</div>
						<div className="opacity-70 text-sm">{r}</div>
					</Card>
				))}
			</div>
		</section>
	);
}
