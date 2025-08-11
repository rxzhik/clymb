import Hero from "../sections/home/Hero.jsx";
import Logos from "../sections/home/Logos.jsx";
import ServicesSnapshot from "../sections/home/ServicesSnapshot.jsx";
import Stats from "../sections/home/Stats.jsx";
import CaseStudies from "../sections/home/CaseStudies.jsx";
import Process from "../sections/home/Process.jsx";
import Testimonials from "../sections/home/Testimonials.jsx";
import PricingTeaser from "../sections/home/PricingTeaser.jsx";
import CtaBand from "../sections/home/CtaBand.jsx";

export default function Home() {
	return (
		<>
			<Hero />
			<Logos />
			<ServicesSnapshot />
			<Stats />
			<CaseStudies />
			<Process />
			<Testimonials />
			<PricingTeaser />
			<CtaBand />
		</>
	);
}
