import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import TextType from "../../components/TextType.jsx";

export default function ImageStory() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 pt-20">
			<div className="grid md:grid-cols-2 gap-12 items-top">
				{/* Image left */}
				<div
					data-reveal
					className="relative w-full h-64 sm:h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-[0_8px_40px_-10px_rgba(137,93,255,0.35),0_12px_60px_-12px_rgba(56,189,248,0.25)]"
				>
					<img
						src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60"
						alt="Team strategy workshop around a table"
						className="w-full h-full object-cover"
						loading="lazy"
					/>
					<div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent mix-blend-overlay" />
				</div>
				{/* Text right */}
				<div
					data-reveal
					className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-90"
				>
					<TextType
						text={["Why We Do This"]}
						typingSpeed={75}
						pauseDuration={300}
						showCursor={true}
						cursorCharacter="|"
						className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
					/>
					<div className="space-y-6 text-base sm:text-lg md:text-lg leading-relaxed opacity-90">
						<p>
							Growth shouldn&apos;t feel like gambling burn trying to
							brute‑force CAC down. We founded Clymb to replace fragmented
							channel spend with compounding systems that align positioning,
							creative, analytics and lifecycle into one tight feedback loop.
							When each loop closes, signal quality goes up and the next
							experiment gets smarter.
						</p>
						<p>
							The left‑brain / right‑brain split inside most orgs slows
							momentum. Our model removes that friction: strategists sit next to
							analysts, designers next to marketing engineers—everyone shipping
							against the same constraint map. It’s lean, transparent and
							obsessively iterative.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
