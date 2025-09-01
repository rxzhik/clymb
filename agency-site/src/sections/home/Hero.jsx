import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button.jsx";
import Orbit from "../../components/Orbit.jsx";
import heroTimeline from "../../lib/animations/heroTimeline.js";
import magneticButton from "../../lib/animations/magneticButton.js";
import SplitText from "../../components/SplitText.jsx";
import GradientBlinds from "../../components/GradientBlinds.jsx";

export default function Hero() {
	const scope = useRef(null);
	const primaryRef = useRef(null);
	useEffect(() => {
		const kill = heroTimeline(scope.current);
		const cleanup = primaryRef.current
			? magneticButton(primaryRef.current)
			: null;
		return () => {
			kill?.();
			cleanup?.();
		};
	}, []);

	const handleAnimationComplete = () => {
		console.log("All letters have animated!");
	};

	return (
		<section className="relative min-h-screen min-w-screen flex items-center pt-20 md:pt-28">
			{/* Background gradient layer */}
			<div className="absolute inset-0 hidden md:block p-0">
				<GradientBlinds
					className="w-full h-full"
					gradientColors={["#FF9FFC", "#5227FF"]}
					angle={0}
					noise={0.3}
					blindCount={20}
					blindMinWidth={50}
					spotlightRadius={0.5}
					spotlightSoftness={1}
					spotlightOpacity={1}
					mouseDampening={0.15}
					distortAmount={0}
					shineDirection="left"
					mixBlendMode="lighten"
				/>
			</div>
			<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center w-full">
				<div ref={scope} className="relative z-10">
					<h1 className="text-5xl md:text-6xl font-black leading-tight">
						<span
							data-hero-word
							className="relative block  text-[7rem] md:text-9xl font-extrabold mb-6 -ml-2"
						>
							{/* Bottom layer: continuous gradient across the whole word */}
							<span
								aria-hidden="true"
								className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
							>
								Clymb
							</span>
							{/* Top layer: render only 'y' in green; let gradient show through for 'cl' and 'mb' */}
							<span className="relative">
								<span className="text-transparent select-none">Cl</span>
								<span className="text-cyan-400">y</span>
								<span className="text-transparent select-none">mb</span>
							</span>
						</span>
						{["Turning Ambition", "Into Altitude"].map((w, i) => (
							<span
								key={i}
								data-hero-word
								className="block font-extrabold text-white drop-shadow-[0_5px_10px_rgba(138,43,226,0.8)]"
							>
								{w}
							</span>
						))}
					</h1>
					<p className="mt-4 text-lg opacity-80 max-w-xl" data-hero-word>
						We plug elite marketers into your roadmap—Fast. Strategy, Execution,
						Growth.{" "}
						<SplitText
							text="Unlock Top Marketing Talent One Click Away."
							className="text-cyan-400 text-xl font-bold"
							delay={100}
							duration={0.6}
							ease="power3.out"
							splitType="chars"
							from={{ opacity: 0, y: 40 }}
							to={{ opacity: 1, y: 5 }}
							threshold={0.1}
							rootMargin="-100px"
							textAlign="start"
							onLetterAnimationComplete={handleAnimationComplete}
						/>
					</p>

					<div className="mt-6 flex gap-3">
						<Button
							as={NavLink}
							to="/contact"
							ref={primaryRef}
							data-hero-cta
							className="group"
						>
							Start Project<span className="ml-1">→</span>
						</Button>
						<Button
							variant="ghost"
							data-hero-cta
							as={NavLink}
							to="/services/brand-strategy"
						>
							Explore Services
						</Button>
					</div>
				</div>
				<div className="relative z-10">
					<Orbit />
				</div>
			</div>
		</section>
	);
}
