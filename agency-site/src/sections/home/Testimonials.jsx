import { useRef, useState } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import TextPressure from "../../components/TextPressure.jsx";

// Testimonial avatars (client representatives)
const AVATARS = [
	{
		name: "Leah Martinez",
		role: "Founder, TechZenith",
		img: "https://i.pravatar.cc/120?img=12",
	},
	{
		name: "Victor Huang",
		role: "COO, CyberObligation",
		img: "https://i.pravatar.cc/120?img=32",
	},
	{
		name: "Ashley Brooke",
		role: "Owner, Lash Beauty Studio",
		img: "https://i.pravatar.cc/120?img=56",
	},
	{
		name: "Priya Nair",
		role: "Director, Trident Schools",
		img: "https://i.pravatar.cc/120?img=47",
	},
	{
		name: "James Holloway",
		role: "Creative Lead, Moment Designer",
		img: "https://i.pravatar.cc/120?img=58",
	},
];

// Primary rotating quotes (aligned by index with AVATARS)
const PRIMARY_QUOTES = [
	"Clymb rebuilt our acquisition engine. Organic traffic is up 182% and our inbound demo requests tripled without increasing ad spend.",
	"Their technical SEO + paid retargeting framework closed a leak we’d been chasing for a year. CAC down 34% while qualified pipeline went up.",
	"We needed local intent visibility and fast booking flow improvements. Clymb delivered – 6x more booked lash sets in 90 days.",
	"They repositioned our digital presence and implemented a nurture + content calendar that lifted open day registrations by 71%.",
	"Clymb translated our brand mood into campaigns that convert. Our portfolio inquiries now come with budget clarity and 2x higher close rates.",
];

export default function Testimonials() {
	const ref = useRef(null);
	useReveal(ref);
	const [index, setIndex] = useState(0);
	const next = () => setIndex((i) => (i + 1) % PRIMARY_QUOTES.length);
	const prev = () =>
		setIndex((i) => (i - 1 + PRIMARY_QUOTES.length) % PRIMARY_QUOTES.length);

	return (
		<section ref={ref} className="max-w-7xl mx-auto px-4 py-12 md:py-20">
			<div className="max-w-3xl mx-auto mb-8 md:mb-12">
				<TextPressure
					text="What People Say"
					flex
					alpha={false}
					stroke={false}
					width
					weight
					italic
					textColor="#ffffff"
					minFontSize={34}
					maxFontSize={70}
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
				{/* Compact Quote Card */}
				<div
					className="relative bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-6 text-xs md:text-sm leading-relaxed border border-white/10 shadow-[0_4px_24px_-4px_rgba(137,93,255,0.35),0_8px_40px_-6px_rgba(56,189,248,0.25)]"
					data-reveal
				>
					<p className="mb-6">
						Clymb guided our funnel rebuild and identified quick-win SEO fixes
						we kept overlooking.
						<br />
						<br />
						Within 6 weeks we saw qualified demos accelerate – exactly what we
						needed pre‑launch.
					</p>
					<div className="flex items-center gap-3">
						<img
							src={AVATARS[0].img}
							alt={AVATARS[0].name}
							className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-white/20"
						/>
						<div>
							<div className="font-semibold text-sm">{AVATARS[0].name}</div>
							<div className="text-xs opacity-70">{AVATARS[0].role}</div>
						</div>
					</div>
				</div>
				{/* Outline Quote Card */}
				<div
					className="relative rounded-2xl md:rounded-3xl p-5 md:p-6 text-xs md:text-sm leading-relaxed border border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02]"
					data-reveal
				>
					<p className="mb-6">{PRIMARY_QUOTES[1]}</p>
					<div className="flex items-center gap-3">
						<img
							src={AVATARS[1].img}
							alt={AVATARS[1].name}
							className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
						/>
						<div>
							<div className="font-semibold text-sm">{AVATARS[1].name}</div>
							<div className="text-xs opacity-70">{AVATARS[0].role}</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
				{/* Image card placeholder */}
				<div
					className="hidden md:block rounded-3xl overflow-hidden relative group h-[500px] max-h-[500px]"
					data-reveal
				>
					<img
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60"
						alt="Story"
						className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
				</div>
				{/* Main rotating testimonial */}
				<div
					className="relative flex flex-col rounded-2xl md:rounded-3xl p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_-6px_rgba(137,93,255,0.35),0_8px_50px_-8px_rgba(56,189,248,0.28)] h-[500px] max-h-[500px]"
					data-reveal
				>
					<div
						className="flex items-center gap-1 text-amber-400 mb-4 md:mb-6 text-base md:text-lg"
						aria-label="5 star rating"
					>
						{Array.from({ length: 5 }).map((_, i) => (
							<span key={i}>★</span>
						))}
					</div>
					<h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
						{AVATARS[index].name}
					</h3>
					<p className="text-xs md:text-sm leading-relaxed opacity-85 flex-1">
						{PRIMARY_QUOTES[index]}
					</p>
					<div className="mt-6 md:mt-8 flex items-center justify-between">
						<div className="flex items-center gap-3">
							<img
								src={AVATARS[index].img}
								alt={AVATARS[index].name}
								className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white/20"
							/>
							<div>
								<div className="font-medium text-sm">{AVATARS[index].role}</div>
							</div>
						</div>
					</div>
					{/* Navigation + avatars selector */}
					<div className="mt-6 md:mt-10 border-t border-white/10 pt-4 md:pt-6">
						<div className="flex items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
							<button
								onClick={prev}
								aria-label="Previous"
								className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-xs md:text-base"
							>
								‹
							</button>
							<div className="flex gap-3 md:gap-4">
								{AVATARS.map((a, i) => (
									<button
										key={i}
										onClick={() => setIndex(i)}
										className={`relative w-8 h-8 md:w-12 md:h-12 rounded-full ring-2 transition ${
											index === i
												? "ring-fuchsia-400"
												: "ring-white/20 opacity-70 hover:opacity-100"
										}`}
									>
										<img
											src={a.img}
											alt={a.name}
											className="w-full h-full rounded-full object-cover"
										/>
									</button>
								))}
							</div>
							<button
								onClick={next}
								aria-label="Next"
								className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-xs md:text-base"
							>
								›
							</button>
						</div>
						<div className="text-center text-xs md:text-sm font-medium opacity-80">
							{AVATARS[index].name}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
