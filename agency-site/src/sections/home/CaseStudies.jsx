import { useRef, useState, useEffect } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import Card from "../../components/Card.jsx";
import TextPressure from "../../components/TextPressure.jsx";
import CircularGallery from "../../components/CircularGallery.jsx";
export default function CaseStudies() {
	const ref = useRef(null);
	useReveal(ref);
	const [bend, setBend] = useState(1); // default mobile

	useEffect(() => {
		const update = () => {
			// Tailwind's md breakpoint is 768px
			setBend(window.innerWidth < 768 ? 1 : 3);
		};
		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);
	const defaultItems = [
		{
			image: "/images/moment_designer_card.jpg",
			text: "Moment Designer",
		},
		{
			image: "/images/YEU.jpg",
			text: "YEU",
		},
		{
			image: "/images/Tech_Zenith_Card.jpg",
			text: "Tech Zenith",
		},
		{
			image: "/images/Cyber_Obligation_Card.jpg",
			text: "Cyber Obligation",
		},
		{
			image: "/images/Trident_Schools_Card.jpg",
			text: "Trident Schools",
		},
	];
	return (
		<section ref={ref} className="w-screen px-4 py-12">
			<div className="max-w-3xl mx-auto mb-8">
				<TextPressure
					text="Featured Results"
					flex={true}
					alpha={false}
					stroke={false}
					width={true}
					weight={true}
					italic={true}
					textColor="#ffffff"
					strokeColor="#ff0000"
					minFontSize={36}
					maxFontSize={72}
				/>
			</div>
			<div style={{ height: "600px", position: "relative" }}>
				<CircularGallery
					items={defaultItems}
					bend={bend}
					textColor="#ffffff"
					borderRadius={0.05}
					scrollEase={0.02}
				/>
			</div>
		</section>
	);
}
