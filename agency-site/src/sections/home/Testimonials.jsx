import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import TestimonialCard from "../../components/TestimonialCard.jsx";
export default function Testimonials() {
	const ref = useRef(null);
	useReveal(ref);
	const items = [
		{
			quote: "They operate like an extension of our team.",
			name: "Maya",
			role: "VP Growth",
		},
		{
			quote: "The cleanest analytics stack we've had.",
			name: "Arjun",
			role: "CMO",
		},
	];
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-4"
		>
			{items.map((t, i) => (
				<TestimonialCard key={i} {...t} />
			))}
		</section>
	);
}
