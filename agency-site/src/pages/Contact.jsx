import ContactHero from "../sections/contact/ContactHero.jsx";
import ContactForm from "../sections/contact/ContactForm.jsx";
import CalendlyEmbed from "../sections/contact/CalendlyEmbed.jsx";
import MapBlock from "../sections/contact/MapBlock.jsx";
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
			<ContactHero />
			<ContactForm />
			<CalendlyEmbed url="https://calendly.com/" />
			<MapBlock />
		</>
	);
}
