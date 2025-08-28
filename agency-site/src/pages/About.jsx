import MissionHero from "../sections/about/MissionHero.jsx";
import ImageStory from "../sections/about/ImageStory.jsx";
import Values from "../sections/about/Values.jsx";
import Team from "../sections/about/Team.jsx";
import Culture from "../sections/about/Culture.jsx";
import CareersCta from "../sections/about/CareersCta.jsx";
import { Helmet } from "react-helmet-async";

export default function About() {
	return (
		<>
			<Helmet>
				<title>About – Clymb</title>
				<meta
					name="description"
					content="Meet the team, mission and values powering Clymb's growth marketing outcomes."
				/>
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + "/about"
							: "https://example.com/about"
					}
				/>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: [
							{
								"@type": "ListItem",
								position: 1,
								name: "Home",
								item:
									typeof window !== "undefined"
										? window.location.origin
										: "https://example.com",
							},
							{
								"@type": "ListItem",
								position: 2,
								name: "About",
								item:
									typeof window !== "undefined"
										? window.location.origin + "/about"
										: "https://example.com/about",
							},
						],
					})}
				</script>
			</Helmet>
			<MissionHero />
			<ImageStory />
			<Team />
			<CareersCta />
		</>
	);
}
