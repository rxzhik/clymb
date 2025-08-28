import LogoLoop from "./LogoLoop";

export default function LogoCloud() {
	const imageLogos = [
		{
			src: "/images/harsh.png",
			alt: "Heritage & Haute",
			href: "https://techzenith.com.au",
		},
		{
			src: "/images/Trident.png",
			alt: "1",
			href: "https://cyberobligation.com",
		},
		{
			src: "/logos/company3.png",
			alt: "2",
			href: "https://momentdesigner.com.au/",
		},
	];

	return (
		<div className="bg-black h-[230px] relative overflow-hidden">
			<LogoLoop
				logos={imageLogos}
				speed={120}
				direction="left"
				logoHeight={200}
				gap={40}
				pauseOnHover
				scaleOnHover
				fadeOut
				ariaLabel="Technology partners"
			/>
		</div>
	);
}
