import Card from "./Card";
export default function ServiceCard({ title, desc, icon }) {
	return (
		<Card
			className="group hover:shadow-[0_0_30px_rgba(var(--glow-blue)/0.25)] transition-all"
			data-reveal
		>
			<div className="flex items-start gap-4">
				<div className="text-2xl">{icon}</div>
				<div>
					<h3 className="font-semibold text-xl mb-1">{title}</h3>
					<p className="opacity-80">{desc}</p>
					<a className="link link-info mt-3 inline-block">Learn more →</a>
				</div>
			</div>
		</Card>
	);
}
