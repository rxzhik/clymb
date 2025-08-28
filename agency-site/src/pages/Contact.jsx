import ContactForm from "../sections/contact/ContactForm.jsx";
import CalendlyEmbed from "../sections/contact/CalendlyEmbed.jsx";
import { NavLink } from "react-router-dom";
import Prism from "../components/Prism.jsx";
import { Helmet } from "react-helmet-async";

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact – Clymb</title>
				<meta
					name="description"
					content="Start a project or ask a question. Connect with the Clymb growth marketing team."
				/>
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + "/contact"
							: "https://example.com/contact"
					}
				/>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{
								"@type": "ListItem",
								position: 1,
								name: "Home",
								item:
									typeof window !== "undefined"
										? window.location.origin
										: "https://example.com",
							},
							{
								"@type": "ListItem",
								position: 2,
								name: "Contact",
								item:
									typeof window !== "undefined"
										? window.location.origin + "/contact"
										: "https://example.com/contact",
							},
						],
					})}
				</script>
			</Helmet>
			<section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16">
				<div className="absolute inset-0 hidden md:block">
					{/* <GradientBlinds
						className="w-full h-full"
						gradientColors={["#FF9FFC", "#5227FF"]}
						angle={0}
						noise={0.3}
						blindCount={16}
						blindMinWidth={60}
						spotlightRadius={0.5}
						spotlightSoftness={1}
						spotlightOpacity={1}
						mouseDampening={0.15}
						distortAmount={0}
						shineDirection="left"
						mixBlendMode="lighten"
					/> */}
					<Prism
						animationType="rotate"
						timeScale={0.5}
						height={3.5}
						baseWidth={5.5}
						scale={3.6}
						hueShift={0}
						colorFrequency={1}
						noise={0.5}
						glow={1}
					/>
				</div>
				<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start w-full relative z-10">
					<div>
						<h1 className="text-5xl md:text-6xl font-black leading-tight">
							<span className="relative block text-8xl md:text-9xl font-extrabold mb-6 -ml-2">
								<span
									aria-hidden="true"
									className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
								>
									Clymb
								</span>
								<span className="relative">
									<span className="text-transparent select-none">Cl</span>
									<span className="text-cyan-400">y</span>
									<span className="text-transparent select-none">mb</span>
								</span>
							</span>
							<span className="block font-extrabold text-white drop-shadow-[0_5px_10px_rgba(138,43,226,0.8)]">
								Turning Ambition
							</span>
							<span className="block font-extrabold text-white drop-shadow-[0_5px_10px_rgba(138,43,226,0.8)]">
								Into Altitude
							</span>
						</h1>
					</div>
					<div>
						<ContactForm />
					</div>
				</div>
			</section>
		</>
	);
}
