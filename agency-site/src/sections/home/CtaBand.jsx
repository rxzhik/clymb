import Button from "../../components/Button.jsx";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useReveal from "../../lib/animations/useReveal.js";
export default function CtaBand() {
	const ref = useRef(null);
	const navigate = useNavigate();
	useReveal(ref);
	return (
		<section ref={ref} id="book" className="max-w-6xl mx-auto px-4 py-16">
			<div
				className="glass p-6 flex items-center justify-between gap-4 flex-col md:flex-row"
				data-reveal
			>
				<div className="text-2xl font-bold">Book a free strategy call</div>
				<Button className="btn-wide" onClick={() => navigate("/contact")}>
					Schedule
				</Button>
			</div>
		</section>
	);
}
