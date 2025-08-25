import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import LogoCloud from "../../components/LogoCloud.jsx";
export default function Logos() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="p-0">
			<LogoCloud />
		</section>
	);
}
