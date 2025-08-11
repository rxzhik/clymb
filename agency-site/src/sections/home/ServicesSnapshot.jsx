import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import ServiceCard from "../../components/ServiceCard.jsx";
export default function ServicesSnapshot() {
	const ref = useRef(null);
	useReveal(ref);
	const items = [
		{
			title: "SEO",
			desc: "Technical + content systems to win search.",
			icon: "🔎",
		},
		{
			title: "Paid Ads",
			desc: "Full-funnel Google/Meta/LinkedIn.",
			icon: "💸",
		},
		{ title: "Social", desc: "Always-on content & community.", icon: "📣" },
		{
			title: "Content",
			desc: "Copy that converts, assets that scale.",
			icon: "✍️",
		},
		{ title: "Web & CRO", desc: "Ship faster sites that sell.", icon: "⚡" },
		{
			title: "Analytics",
			desc: "Clean tracking, clear decisions.",
			icon: "📈",
		},
	];
	return (
		<section ref={ref} className="max-w-7xl mx-auto px-4 py-12">
			<h2 className="text-3xl font-bold mb-6" data-reveal>
				What we do
			</h2>
			<div className="grid md:grid-cols-3 gap-4">
				{items.map((it, i) => (
					<ServiceCard key={i} {...it} />
				))}
			</div>
		</section>
	);
}
