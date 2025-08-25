import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import ChromaGrid from "../../components/ChromaGrid.jsx";
import TextPressure from "../../components/TextPressure.jsx";
export default function ServicesSnapshot() {
	const ref = useRef(null);
	useReveal(ref);

	const items = [
		{
			image:
				"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=60",
			title: "SEO",
			subtitle: "Technical systems to win search.",
			handle: "🔎",
			borderColor: "#6366F1", // indigo
			gradient: "linear-gradient(145deg, #6366F1 0%, #0F172A 70%)",
			url: "",
		},
		{
			image:
				"https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=60",
			title: "Paid Ads",
			subtitle: "Full-funnel Google / Meta / LinkedIn.",
			handle: "💸",
			borderColor: "#10B981", // emerald
			gradient: "linear-gradient(160deg, #10B981 0%, #022C22 70%)",
			url: "",
		},
		{
			image:
				"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=60",
			title: "Social",
			subtitle: "Always-on content & community.",
			handle: "📣",
			borderColor: "#EC4899", // pink
			gradient: "linear-gradient(180deg, #EC4899 0%, #3B0D2F 75%)",
			url: "",
		},
		{
			image:
				"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=60",
			title: "Content",
			subtitle: "Copy that converts, assets that scale.",
			handle: "✍️",
			borderColor: "#F59E0B", // amber
			gradient: "linear-gradient(200deg, #F59E0B 0%, #3A2502 70%)",
			url: "",
		},
		{
			image:
				"https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=600&q=60",
			title: "Web & CRO",
			subtitle: "Ship faster sites that sell.",
			handle: "⚡",
			borderColor: "#8B5CF6", // violet
			gradient: "linear-gradient(165deg, #8B5CF6 0%, #2E1065 70%)",
			url: "#web",
		},
		{
			image:
				"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60",
			title: "Analytics",
			subtitle: "Clean tracking, clear decisions.",
			handle: "📈",
			borderColor: "#06B6D4", // cyan
			gradient: "linear-gradient(145deg, #06B6D4 0%, #083344 75%)",
			url: "#analytics",
		},
		{
			image:
				"https://images.unsplash.com/photo-1600859343572-66cdee7b09a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Email & CRM",
			subtitle: "Lifecycle automation & nurture.",
			handle: "📬",
			borderColor: "#F43F5E", // rose
			gradient: "linear-gradient(180deg, #F43F5E 0%, #4C0519 80%)",
			url: "",
		},
		{
			image:
				"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=60",
			title: "Brand & Strategy",
			subtitle: "Positioning & go-to-market clarity.",
			handle: "🎯",
			borderColor: "#84CC16", // lime
			gradient: "linear-gradient(210deg, #84CC16 0%, #1A2E05 75%)",
			url: "",
		},
	];

	return (
		<section ref={ref} className="max-w-7xl mx-auto px-4 py-12">
			<div className="max-w-3xl mx-auto mb-8">
				<TextPressure
					text="What We Do"
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
			<div className="mt-20" style={{ position: "relative" }}>
				<ChromaGrid
					items={items}
					radius={300}
					damping={0.45}
					fadeOut={0.6}
					ease="power3.out"
				/>
			</div>
		</section>
	);
}
