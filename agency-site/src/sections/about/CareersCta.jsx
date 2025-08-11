import Button from "../../components/Button.jsx";
import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function CareersCta() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-16">
			<div
				className="glass p-6 flex items-center justify-between gap-4 flex-col md:flex-row"
				data-reveal
			>
				<div className="text-2xl font-bold">Work with us</div>
				<Button>View roles</Button>
			</div>
		</section>
	);
}
