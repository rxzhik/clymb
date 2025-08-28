import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextType from "../../components/TextType.jsx";

export default function Team() {
	const ref = useRef(null);
	useReveal(ref);
	const team = [
		["Rashik", "Head of Technology"],
		["Ripsy", "Head of Marketing"],
		["Sanjolika", "Head of Design"],
		["Uday", "Head of Finance"],
	];
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12">
			<div className="flex justify-center items-center">
				<TextType
					text={["Team"]}
					typingSpeed={75}
					pauseDuration={300}
					showCursor={true}
					cursorCharacter="|"
					className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
				/>
			</div>
			<div className="flex flex-wrap gap-6 justify-center mt-10" data-reveal>
				{team.map(([n, r], i) => (
					<div
						key={i}
						className="basis-full  sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center max-w-full"
					>
						<ProfileCard
							className="w-full"
							name={n}
							title={r}
							handle="javicodes"
							status="Online"
							contactText="Contact Me"
							avatarUrl="/images/profilecardpic.png"
							iconUrl="/images/profilecardpic.png"
							grainUrl="/images/profilecardpic.png"
							showUserInfo={true}
							enableTilt={true}
							enableMobileTilt={false}
							onContactClick={() => console.log("Contact clicked")}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
