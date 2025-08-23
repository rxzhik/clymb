import { useRef } from "react";
// Removed GSAP imports & revealSection for static rendering
import { serviceContent } from "../../data/serviceContent.js";

export default function ServiceTemplate({ service }) {
	const containerRef = useRef(null);

	if (!service) return null;
	const extended = serviceContent[service.id];

	return (
		<div ref={containerRef} className="max-w-6xl mx-auto px-4 py-16">
			<div className="relative mb-16 h-80 rounded-3xl overflow-hidden">
				<img
					loading="lazy"
					src={service.image}
					alt=""
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
				<div className="absolute bottom-6 left-6 right-6">
					<div className="text-5xl font-extrabold flex items-start gap-3 flex-wrap text-white">
						<span className="text-4xl" aria-hidden>
							{service.icon}
						</span>
						{service.title}
					</div>
					<p className="mt-4 max-w-2xl text-white text-lg">{service.summary}</p>
				</div>
			</div>

			{extended?.overview && (
				<section className="mb-24 space-y-6">
					{extended.overview.map((p, i) => (
						<p key={i} className="text-white leading-relaxed text-lg">
							{p}
						</p>
					))}
				</section>
			)}

			<div className="grid gap-12 mb-20">
				{service.bullets.map((b) => (
					<div
						key={b.id}
						id={b.id}
						className="service-bullet-card glass p-6 rounded-2xl relative overflow-hidden group text-white"
					>
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-secondary/10 to-transparent pointer-events-none" />
						<img
							loading="lazy"
							src={`https://source.unsplash.com/400x300/?${
								service.id.split("-")[0]
							},${b.id.split("-")[0]}`}
							alt=""
							className="w-full h-32 object-cover rounded-xl mb-3"
						/>
						<h3 className="text-2xl font-bold mb-2 flex items-center gap-3 text-info">
							<span className="text-primary text-3xl" aria-hidden>
								•
							</span>
							{b.label}
						</h3>
						<p className="text-white leading-relaxed">{b.blurb}</p>
						{extended?.sections?.[b.id]?.map((p, i) => (
							<p key={i} className="mt-3 text-white/90 text-sm leading-relaxed">
								{p}
							</p>
						))}
					</div>
				))}
			</div>

			<section className="mb-24">
				<h2 className="text-3xl font-extrabold mb-6 text-accent">Process</h2>
				<ol className="grid md:grid-cols-5 gap-4 text-sm">
					{["Discover", "Diagnose", "Design", "Deploy", "Double-Down"].map(
						(step, i) => (
							<li
								key={step}
								className="service-process-item glass rounded-xl p-4 flex flex-col gap-2 text-white"
							>
								<span className="text-xs font-semibold tracking-wide text-white/60">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="font-semibold text-info">{step}</span>
								<span className="text-xs text-white/80 leading-relaxed">
									{
										[
											"Stakeholder / data intake & alignment",
											"Insight synthesis & prioritization",
											"Strategy & asset / experiment design",
											"Ship, implement, launch & QA",
											"Analyze lifts → scale or iterate",
										][i]
									}
								</span>
							</li>
						)
					)}
				</ol>
			</section>

			<section className="mb-24">
				<h2 className="text-3xl font-extrabold mb-6 text-accent">
					Recent Wins
				</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{[1, 2, 3].map((i) => (
						<div
							key={i}
							className="service-win-card glass p-5 rounded-2xl flex flex-col gap-3 text-white"
						>
							<div className="text-sm font-semibold text-info">Client {i}</div>
							<p className="text-sm text-white/80 leading-relaxed">
								Metric lift & narrative placeholder illustrating quantitative
								outcome tied to this service pillar.
							</p>
							<div className="text-2xl font-extrabold text-success">
								+{20 + i * 5}%
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="service-cta mb-8 relative overflow-hidden rounded-3xl p-10 bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent">
				<div className="max-w-2xl text-white">
					<h2 className="text-3xl font-extrabold mb-3 text-accent">
						Ready to accelerate {service.title.split("&")[0].trim()}?
					</h2>
					<p className="text-white mb-6">
						Plug our senior operators into your roadmap in days—not months.
						We&apos;ll audit, prioritize and execute.
					</p>
					<a
						href="/contact"
						className="btn btn-primary rounded-2xl shadow-[0_0_25px_rgba(var(--glow-magenta)/0.35)]"
					>
						Start Project →
					</a>
				</div>
			</section>
		</div>
	);
}
