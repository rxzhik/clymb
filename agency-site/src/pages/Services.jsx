import ServicesHero from "../sections/services/ServicesHero.jsx";
import ServiceBlock from "../sections/services/ServiceBlock.jsx";
import Models from "../sections/services/Models.jsx";
import Faq from "../sections/services/Faq.jsx";
import ServicesCta from "../sections/services/ServicesCta.jsx";

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
