import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import TextType from "../../components/TextType.jsx";
export default function MissionHero() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 pt-20">
			<div className="grid md:grid-cols-2 gap-12 items-start">
				<div data-reveal className="space-y-8 order-2 md:order-1">
					<TextType
						text={["How It All Started"]}
						typingSpeed={75}
						pauseDuration={300}
						showCursor={true}
						cursorCharacter="|"
						className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
					/>
					<div className="space-y-6 text-base sm:text-lg md:text-lg leading-relaxed opacity-90">
						<p>
							Ripsy and Rashik were university students. Always chasing the
							adventerous life
						</p>
					</div>
				</div>
				<div
					data-reveal
					className="relative order-1 md:order-2 w-full h-64 sm:h-80 md:h-full max-h-[520px] rounded-2xl overflow-hidden"
				>
					<img
						src="/images/clymb_team.jpg"
						alt="Early days of the team collaborating at a whiteboard"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent mix-blend-overlay" />
				</div>
			</div>
		</section>
	);
}
