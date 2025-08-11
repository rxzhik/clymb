import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function ServiceBlock({ icon, title, text, bullets }) {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-center"
		>
			<div data-reveal>
				<h2 className="text-3xl font-bold">
					{icon} {title}
				</h2>
				<p className="opacity-80 mt-2">{text}</p>
				<ul className="list-disc list-inside mt-3 space-y-1">
					{bullets.map((b, i) => (
						<li key={i}>{b}</li>
					))}
				</ul>
			</div>
			<Card data-reveal>
				<div className="h-52 rounded-xl bg-gradient-to-br from-primary/25 to-transparent"></div>
				<a className="link link-info mt-3 inline-block">View mini case →</a>
			</Card>
		</section>
	);
}
