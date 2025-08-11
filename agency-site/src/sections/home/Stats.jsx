import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import StatPill from "../../components/StatPill.jsx";
export default function Stats() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-12 flex flex-wrap gap-4 items-center"
		>
			<StatPill value={3.2 * 100} suffix="x" label="ROAS" />
			<StatPill value={120} suffix="%" label="Organic traffic" />
			<StatPill value={98} label="NPS" />
		</section>
	);
}
