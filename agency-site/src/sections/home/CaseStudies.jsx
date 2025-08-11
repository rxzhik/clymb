import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
export default function CaseStudies() {
	const ref = useRef(null);
	useReveal(ref);
	const cases = [
		{
			title: "B2B SaaS",
			bullets: ["+142% trials", "-28% CAC", "New ICP motion"],
		},
		{
			title: "eCom Beauty",
			bullets: ["3.4x MER", "UGC engine", "5 new SKUs launch"],
		},
		{
			title: "Fintech",
			bullets: ["SEO migration", "PR lift", "Demo pipeline +62%"],
		},
	];
	return (
		<section ref={ref} className="max-w-7xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-6" data-reveal>
				Featured results
			</h2>
			<div className="grid md:grid-cols-3 gap-4">
				{cases.map((c, i) => (
					<Card key={i} data-reveal>
						<div className="h-40 rounded-xl bg-gradient-to-br from-primary/30 to-transparent mb-4"></div>
						<h3 className="font-semibold text-xl mb-2">{c.title}</h3>
						<ul className="list-disc list-inside opacity-85">
							{c.bullets.map((b, j) => (
								<li key={j}>{b}</li>
							))}
						</ul>
						<a className="link link-info mt-3 inline-block">View case →</a>
					</Card>
				))}
			</div>
		</section>
	);
}
