import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import LogoCloud from "../../components/LogoCloud.jsx";
export default function Logos() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="mt-6 mb-2">
			<LogoCloud />
		</section>
	);
}
