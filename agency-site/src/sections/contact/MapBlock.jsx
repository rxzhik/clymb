import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function MapBlock() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12">
			<div className="glass p-2" data-reveal>
				<img
					alt="Map"
					src="https://dummyimage.com/1200x500/111827/ffffff&text=Map+Placeholder"
					className="rounded-2xl w-full"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</section>
	);
}
