import ServicesHero from "../sections/services/ServicesHero.jsx";
import ServiceBlock from "../sections/services/ServiceBlock.jsx";
import Models from "../sections/services/Models.jsx";
import Faq from "../sections/services/Faq.jsx";
import ServicesCta from "../sections/services/ServicesCta.jsx";
import { Helmet } from "react-helmet-async";

export default function Services() {
	const blocks = [
		{
			icon: "🔎",
			title: "SEO",
			text: "Own the SERP with technical excellence and content velocity.",
			bullets: [
				"Tech audit",
				"Topic map",
				"Internal links",
				"Publishing engine",
			],
		},
		{
			icon: "💸",
			title: "Paid Ads",
			text: "Profit-first paid acquisition across Google/Meta/LinkedIn.",
			bullets: [
				"Account rebuild",
				"Creative system",
				"Bid strategies",
				"Weekly testing",
			],
		},
		{
			icon: "📣",
			title: "Social",
			text: "Your brand’s voice—consistent, on-message, and fun.",
			bullets: ["Narrative", "Calendar", "Creators", "Community ops"],
		},
		{
			icon: "⚡",
			title: "Web & CRO",
			text: "Speed and clarity that convert.",
			bullets: ["UX fixes", "Split tests", "Speed wins", "Landing pages"],
		},
		{
			icon: "📈",
			title: "Analytics",
			text: "Trust your numbers again.",
			bullets: ["GA4/Server-Side", "Attribution", "Dashboards", "QA"],
		},
	];
	return (
		<>
			<Helmet>
				<title>Services – Clymb</title>
				<meta
					name="description"
					content="Explore our growth services: SEO, Paid Ads, Social, Web/CRO, Analytics and more."
				/>
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + "/services"
							: "https://example.com/services"
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
								name: "Services",
								item:
									typeof window !== "undefined"
										? window.location.origin + "/services"
										: "https://example.com/services",
							},
						],
					})}
				</script>
			</Helmet>
			<ServicesHero />
			{blocks.map((b, i) => (
				<ServiceBlock key={i} {...b} />
			))}
			<Models />
			<Faq />
			<ServicesCta />
		</>
	);
}
