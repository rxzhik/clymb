import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function ContactHero() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 pt-16 pb-8">
			<h1 className="text-5xl font-black mb-3" data-reveal>
				Let's talk growth.
			</h1>
			<p className="opacity-80" data-reveal>
				Support: hello@agency.dev · Mon–Fri 9–6 AEST · Melbourne
			</p>
		</section>
	);
}
