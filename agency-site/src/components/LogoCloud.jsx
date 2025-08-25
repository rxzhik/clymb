import LogoLoop from "./LogoLoop";

export default function LogoCloud() {
	const imageLogos = [
		{
			src: "/logos/company1.png",
			alt: "TechZenith",
			href: "https://techzenith.com.au",
		},
		{
			src: "/logos/company2.png",
			alt: "CyberObligation",
			href: "https://cyberobligation.com",
		},
		{
			src: "/logos/company3.png",
			alt: "Moment Designers",
			href: "https://momentdesigner.com.au/",
		},
	];

	return (
		<div className="bg-black h-[130px] relative overflow-hidden">
			<LogoLoop
				logos={imageLogos}
				speed={120}
				direction="left"
				logoHeight={100}
				gap={40}
				pauseOnHover
				scaleOnHover
				fadeOut
				ariaLabel="Technology partners"
			/>
		</div>
	);
}
