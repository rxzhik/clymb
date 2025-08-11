import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function Faq() {
	const ref = useRef(null);
	useReveal(ref);
	const items = [
		["How fast can we start?", "Usually within 2 weeks."],
		["Do you work globally?", "Yes—AEST core hours."],
		["What tools do you use?", "Whatever gets the job done."],
	];
	return (
		<section ref={ref} className="max-w-3xl mx-auto px-4 py-12">
			<div className="join join-vertical w-full" data-reveal>
				{items.map(([q, a], i) => (
					<div
						key={i}
						className="collapse collapse-arrow join-item border border-base-300 rounded-2xl"
					>
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">{q}</div>
						<div className="collapse-content">
							<p>{a}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
