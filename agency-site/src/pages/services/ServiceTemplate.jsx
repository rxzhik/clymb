import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
// Removed GSAP imports & revealSection for static rendering
import { serviceContent } from "../../data/serviceContent.js";
import MagicBento from "../../components/MagicBento.jsx";
import StarBorder from "../../components/StarBorder.jsx";
import TiltedCard from "../../components/TiltedCard.jsx";
export default function ServiceTemplate({ service }) {
	const containerRef = useRef(null);

	// Fade-in on scroll for bullet cards
	useEffect(() => {
		const root = containerRef.current;
		if (!root) return;
		const cards = root.querySelectorAll(".service-bullet-card");
		if (!cards.length) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		cards.forEach((c) => observer.observe(c));
		return () => observer.disconnect();
	}, [service?.id]);

	if (!service) return null;
	const extended = serviceContent[service.id];

	// Stable Unsplash image mapping per bullet id to avoid random / broken sources
	const bulletImages = {
		"market-research":
			"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60",
		"brand-positioning":
			"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
		"customer-persona":
			"https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
		"strategy-roadmap":
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
		"content-strategy":
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=60",
		"design-dev":
			"https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=60",
		"landing-pages":
			"https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
		"mobile-app":
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=60",
		"ux-ui":
			"https://images.unsplash.com/photo-1587613864521-9ef8d300dd16?auto=format&fit=crop&w=800&q=60",
		cro: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=60",
		seo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
		"keyword-research":
			"https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=60",
		"on-page":
			"https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=800&q=60",
		"off-page":
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
		"technical-seo":
			"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
		"local-seo":
			"https://images.unsplash.com/photo-1441323263989-281bc2f5b68c?auto=format&fit=crop&w=800&q=60",
		"sem-ppc":
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
		"google-ads":
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
		"bing-ads":
			"https://images.unsplash.com/photo-1515523110800-9415d13b84a0?auto=format&fit=crop&w=800&q=60",
		"organic-management":
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
		"creative-production":
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
		"posting-scheduling":
			"https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=60",
		community:
			"https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=60",
		"paid-social":
			"https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=60",
		"facebook-ads":
			"https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
		"tiktok-ads":
			"https://images.unsplash.com/photo-1603791452906-bb9f4f0ecb4c?auto=format&fit=crop&w=800&q=60",
		"linkedin-ads":
			"https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&q=60",
		"snapchat-ads":
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=60",
		"twitter-ads":
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
		"blog-writing":
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
		"video-production":
			"https://images.unsplash.com/photo-1587613864521-9ef8d300dd16?auto=format&fit=crop&w=800&q=60",
		"creative-media":
			"https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
		infographics:
			"https://images.unsplash.com/photo-1587614382346-ac44d4c8e069?auto=format&fit=crop&w=800&q=60",
		"long-form-assets":
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=60",
		"campaign-automation":
			"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=60",
		"nurture-sequences":
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
		"list-segmentation":
			"https://images.unsplash.com/photo-1532619187608-e5375cab36aa?auto=format&fit=crop&w=800&q=60",
		"crm-setup":
			"https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=60",
		"influencer-campaigns":
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
		"affiliate-program":
			"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
		"brand-collabs":
			"https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=60",
		"tracking-setup":
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
		dashboards:
			"https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=800&q=60",
		"ab-testing":
			"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=60",
		attribution:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
		"automation-ai":
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
		"sms-whatsapp":
			"https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=60",
		podcast:
			"https://images.unsplash.com/photo-1587613864521-9ef8d300dd16?auto=format&fit=crop&w=800&q=60",
		webinars:
			"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
		"ar-vr":
			"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60",
		orm: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
		"review-generation":
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60",
		"feedback-loops":
			"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=60",
	};

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

			{/* {extended?.overview && (
				<section className="mb-24 space-y-6">
					{extended.overview.map((p, i) => (
						<p key={i} className="text-white leading-relaxed text-lg">
							{p}
						</p>
					))}
				</section>
			)} */}
			<div className="flex flex-col gap-20 mb-20">
				{service.bullets.map((b, idx) => {
					const isReversed = idx % 2 === 1;
					return (
						<StarBorder
							key={b.id}
							as="div"
							className="custom-class"
							color="Magenta"
							speed="3s"
							thickness={5}
						>
							<div
								id={b.id}
								className="service-bullet-card glass-magenta rounded-2xl relative overflow-hidden group text-white will-change-transform hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(255,0,170,0.45)] opacity-0 translate-y-8 transition-all ease-out duration-700 [&.in-view]:opacity-100 [&.in-view]:translate-y-0"
							>
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-secondary/10 to-transparent pointer-events-none" />
								<div
									className={`flex flex-col md:flex-row ${
										isReversed ? "md:flex-row-reverse" : ""
									} w-full h-full`}
								>
									<div className="relative md:w-1/2 w-full h-60 md:h-auto min-h-full">
										<img
											loading="lazy"
											src={bulletImages[b.id] || service.image}
											alt={b.label}
											className="absolute inset-0 w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
									</div>
									<div
										className={`md:w-1/2 w-full flex flex-col ${
											isReversed
												? "items-end text-right"
												: "items-start text-left"
										} p-8 md:p-12 gap-5 justify-center`}
									>
										<h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_6px_rgba(255,0,170,0.35)]">
											{b.label}
										</h3>
										{(() => {
											const paragraphs = [
												b.blurb,
												...(extended?.sections?.[b.id] || []),
											];
											const combined = paragraphs.join(" ");
											return (
												<p className="text-white/90 text-base sm:text-lg leading-relaxed whitespace-pre-line max-w-prose">
													{combined}
												</p>
											);
										})()}
									</div>
								</div>
							</div>
						</StarBorder>
					);
				})}
			</div>

			<section className="mb-24">
				<h2 className="text-center text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 tracking-tight drop-shadow-[0_4px_18px_rgba(132,0,255,0.35)]">
					Our Process
				</h2>
				<MagicBento
					textAutoHide={true}
					enableStars={true}
					enableSpotlight={true}
					enableBorderGlow={true}
					enableTilt={true}
					enableMagnetism={true}
					clickEffect={true}
					spotlightRadius={300}
					particleCount={100}
					glowColor="132, 0, 255"
					fullWidth={true}
				/>
			</section>

			<section className="mb-24">
				<h2 className="text-center text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 tracking-tight drop-shadow-[0_4px_18px_rgba(132,0,255,0.35)]">
					Recent Wins
				</h2>
					{(() => {
						const recentWins = [
							{ title: "Trident Schools", image: "/images/Trident_Schools_RecentWins.jpg" },
							{ title: "Cyber Obligation", image: "/images/Cyber_Obligation_Card.jpg" },
							{ title: "Moment Designer", image: "/images/moment_designer_card.jpg" },
						];
						return (
							<div className="grid md:grid-cols-3 gap-10">
								{recentWins.map((item) => (
									<TiltedCard
										key={item.title}
										imageSrc={item.image}
										altText={`${item.title} case study`}
										captionText={item.title}
										containerHeight="340px"
										containerWidth="100%"
										imageHeight="340px"
										imageWidth="100%"
										rotateAmplitude={10}
										scaleOnHover={1.08}
										showMobileWarning={false}
										showTooltip={false}
										displayOverlayContent={true}
										overlayContent={
											<div className="pointer-events-none flex items-start justify-center w-full h-full pt-10 md:pt-12">
												<div className="bg-white/15 backdrop-blur-md text-white font-bold text-lg sm:text-xl px-8 py-4 rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.35)] border border-white/20">
													{item.title}
												</div>
											</div>
										}
									/>
								))}
							</div>
						);
					})()}
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
					<NavLink
						to="/contact"
						className="btn btn-primary rounded-2xl shadow-[0_0_25px_rgba(var(--glow-magenta)/0.35)]"
					>
						Start Project →
					</NavLink>
				</div>
			</section>
		</div>
	);
}
