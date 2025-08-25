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
			image: `https://picsum.photos/seed/1/800/600?grayscale`,
			text: "Bridge",
		},
		{
			image: `https://picsum.photos/seed/2/800/600?grayscale`,
			text: "Desk Setup",
		},
		{
			image: `https://picsum.photos/seed/3/800/600?grayscale`,
			text: "Waterfall",
		},
		{
			image: `https://picsum.photos/seed/4/800/600?grayscale`,
			text: "Strawberries",
		},
		{
			image: `https://picsum.photos/seed/5/800/600?grayscale`,
			text: "Deep Diving",
		},
		{
			image: `https://picsum.photos/seed/16/800/600?grayscale`,
			text: "Train Track",
		},
		{
			image: `https://picsum.photos/seed/17/800/600?grayscale`,
			text: "Santorini",
		},
		{
			image: `https://picsum.photos/seed/8/800/600?grayscale`,
			text: "Blurry Lights",
		},
		{
			image: `https://picsum.photos/seed/9/800/600?grayscale`,
			text: "New York",
		},
		{
			image: `https://picsum.photos/seed/10/800/600?grayscale`,
			text: "Good Boy",
		},
		{
			image: `https://picsum.photos/seed/21/800/600?grayscale`,
			text: "Coastline",
		},
		{
			image: `https://picsum.photos/seed/12/800/600?grayscale`,
			text: "Palm Trees",
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
