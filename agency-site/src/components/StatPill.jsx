import { useEffect, useRef } from "react";
import counterUp from "../lib/animations/counterUp.js";
export default function StatPill({ value, suffix = "", label }) {
	const ref = useRef(null);
	useEffect(() => counterUp(ref.current, value), [value]);
	return (
		<div
			className="glass px-6 py-3 inline-flex items-center gap-3 rounded-2xl"
			data-reveal
		>
			<div className="text-3xl font-bold">
				<span ref={ref} aria-live="polite">
					0
				</span>
				{suffix}
			</div>
			<span className="opacity-75">{label}</span>
		</div>
	);
}
