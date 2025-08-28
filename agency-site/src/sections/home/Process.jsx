import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import TextPressure from "../../components/TextPressure.jsx";
import { NavLink } from "react-router-dom";

export default function Process() {
	const ref = useRef(null);
	useReveal(ref);

	const steps = [
		{
			icon: "📞",
			title: "Reach Out",
			copy: "Ready to transform your digital presence? Drop us a line below and our team will connect with you within three business days. No pressure.",
			cta: "Chat Now",
		},
		{
			icon: "☎️",
			title: "Discuss Your Vision",
			copy: "Let’s chat over coffee or a quick video call to explore your business goals. Our team will craft a tailored digital strategy with a clear proposal to make your brand shine.",
			cta: "Learn More",
		},
		{
			icon: "📄",
			title: "Pick Your Perfect Fit",
			copy: "Review our custom-built proposal and choose the package that feels right for your business. Whether you're just starting out or ready to scale up, we've got your back.",
			cta: "Learn More",
		},
		{
			icon: "👍",
			title: "Chart Your Course",
			copy: "We'll kick off with a dynamic strategy session, mapping out every detail of your marketing journey. This is where ideas come to life and your brand's story begins to soar.",
			cta: "Report",
		},
	];

	return (
		<section ref={ref} className="max-w-7xl mx-auto px-4 py-16">
			<div className="max-w-3xl mx-auto mb-14">
				<TextPressure
					text="4 Simple Steps to Results"
					flex={true}
					alpha={false}
					stroke={false}
					width={true}
					weight={true}
					italic={true}
					textColor="#ffffff"
					strokeColor="#ff0000"
					minFontSize={36}
					maxFontSize={72}
				/>
			</div>
			<div className="relative">
				<div className="grid md:grid-cols-4 gap-10">
					{steps.map((s, i) => (
						<div
							key={i}
							className="group relative flex flex-col items-center text-center px-8 py-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_4px_25px_-4px_rgba(137,93,255,0.35),0_8px_40px_-6px_rgba(56,189,248,0.28)]"
							data-reveal
						>
							<div className="text-5xl mb-6 drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)]">
								{s.icon}
							</div>
							<h3 className="text-xl font-semibold tracking-tight mb-4">
								{s.title}
							</h3>
							<p className="text-sm leading-relaxed opacity-70 max-w-xs">
								{s.copy}
							</p>
							<NavLink
								to="/contact"
								className="mt-8 inline-flex items-center justify-center h-14 px-10 rounded-full font-semibold tracking-[0.15em] text-[13px] bg-gradient-to-r from-fuchsia-400 to-sky-400 text-black shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_25px_-2px_rgba(137,93,255,0.55)] hover:from-fuchsia-300 hover:to-sky-300 transition-colors"
							>
								{s.cta.toUpperCase()}
							</NavLink>
							{/* Arrow connector (desktop only) */}
							{i < steps.length - 1 && (
								<div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px]">
									<span className="absolute -right-2 -top-2 text-white/70 text-2xl rotate-0">
										→
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
