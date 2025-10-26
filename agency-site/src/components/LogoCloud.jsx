import LogoLoop from "./LogoLoop";

export default function LogoCloud() {
	const imageLogos = [
		{
			src: "/images/techzenith.png",
			alt: "Tech Zenith",
			href: "https://techzenith.com.au",
		},
		{
			src: "/images/Trident.png",
			alt: "Trident Public School",
			href: "https://tridentpublicschool.com/",
		},
		{
			src: "/images/cyberobligation.png",
			alt: "CyberObligation",
			href: "https://cyberobligation.com/",
		},
		{
			src: "/images/moment.png",
			alt: "Moment Designer",
			href: "https://momentdesigner.com.au/",
		},
		{
			src: "/images/yeu.png",
			alt: "YEU",
			href: "https://yeucosmetics.com/",
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
