import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function CalendlyEmbed({ url }) {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section
			ref={ref}
			className="max-w-6xl mx-auto px-4 py-12"
			aria-label="Book a call"
		>
			<div className="glass p-4" data-reveal>
				<iframe
					title="Calendly"
					src={url}
					className="w-full h-[720px] rounded-2xl"
					loading="lazy"
				></iframe>
			</div>
		</section>
	);
}
