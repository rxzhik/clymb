import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function RouteTransition({ children }) {
	const ref = useRef(null);
	useEffect(() => {
		const prefersReduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;
		if (prefersReduced) return;
		gsap.fromTo(
			ref.current,
			{ autoAlpha: 0, scale: 0.98 },
			{ autoAlpha: 1, scale: 1, duration: 0.35, ease: "power2.out" }
		);
		return () => gsap.to(ref.current, { autoAlpha: 0, duration: 0.2 });
	}, []);
	return <div ref={ref}>{children}</div>;
}
