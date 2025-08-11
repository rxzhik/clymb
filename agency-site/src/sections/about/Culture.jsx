import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function Culture() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-4"
		>
			<Card data-reveal>
				<div className="h-56 rounded-xl bg-gradient-to-br from-info/20 to-transparent"></div>
			</Card>
			<Card data-reveal>
				<ul className="list-disc list-inside">
					<li>Remote-first, Melbourne HQ</li>
					<li>Async by default</li>
					<li>Weekly retros & learnings</li>
				</ul>
			</Card>
		</section>
	);
}
