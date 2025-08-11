import Card from "./Card";
export default function TestimonialCard({ quote, name, role }) {
	return (
		<Card className="max-w-md" data-reveal>
			<p className="mb-4 text-lg">“{quote}”</p>
			<div className="flex items-center gap-3">
				<div className="avatar placeholder">
					<div className="bg-info text-neutral-content rounded-full w-10">
						<span>{name[0]}</span>
					</div>
				</div>
				<div>
					<div className="font-semibold">{name}</div>
					<div className="opacity-70 text-sm">{role}</div>
				</div>
			</div>
		</Card>
	);
}
