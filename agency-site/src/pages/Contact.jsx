import ContactHero from "../sections/contact/ContactHero.jsx";
import ContactForm from "../sections/contact/ContactForm.jsx";
import CalendlyEmbed from "../sections/contact/CalendlyEmbed.jsx";
import MapBlock from "../sections/contact/MapBlock.jsx";

export default function Contact() {
	return (
		<>
			<ContactHero />
			<ContactForm />
			<CalendlyEmbed url="https://calendly.com/" />
			<MapBlock />
		</>
	);
}
