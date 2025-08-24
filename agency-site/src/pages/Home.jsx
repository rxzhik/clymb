import { Helmet } from "react-helmet-async";
import Hero from "../sections/home/Hero.jsx";
import Logos from "../sections/home/Logos.jsx";
import ServicesSnapshot from "../sections/home/ServicesSnapshot.jsx";
import Stats from "../sections/home/Stats.jsx";
import CaseStudies from "../sections/home/CaseStudies.jsx";
import Process from "../sections/home/Process.jsx";
import Testimonials from "../sections/home/Testimonials.jsx";
import PricingTeaser from "../sections/home/PricingTeaser.jsx";
import CtaBand from "../sections/home/CtaBand.jsx";
import GradientBlinds from "../components/GradientBlinds.jsx";
export default function Home() {
	return (
		<>
			<Helmet>
				<title>Clymb – Modern Growth Marketing Agency</title>
				<meta
					name="description"
					content="We compound demand with SEO, Paid Media, Social, Content, CRO & Analytics operators."
				/>
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + "/"
							: "https://example.com/"
					}
				/>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "Clymb",
						url:
							typeof window !== "undefined"
								? window.location.origin
								: "https://example.com",
						logo:
							typeof window !== "undefined"
								? window.location.origin + "/favicon.png"
								: "https://example.com/favicon.png",
						sameAs: ["https://www.linkedin.com/", "https://twitter.com/"],
					})}
				</script>
			</Helmet>
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
