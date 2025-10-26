import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
import ProfileCard from "../../components/ProfileCard.jsx";
import TextType from "../../components/TextType.jsx";

export default function Team() {
	const ref = useRef(null);
	useReveal(ref);
	const team = [
		{ name: "Rashik", role: "Head of Technology", image: "/images/Rashik.png" },
		{ name: "Ripsy", role: "Head of Marketing", image: "/images/Ripsy.png" },
		{
			name: "Sanjolika",
			role: "Head of Design",
			image: "/images/Sanjolika.png",
		},
		{ name: "Uday", role: "Head of Finance", image: "/images/Uday.png" },
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
				{team.map((member, i) => (
					<div
						key={i}
						className="basis-full  sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center max-w-full"
					>
						<ProfileCard
							className="w-full"
							name={member.name}
							title={member.role}
							handle="javicodes"
							status="Online"
							contactText="Contact Me"
							avatarUrl={member.image}
							iconUrl={member.image}
							grainUrl={member.image}
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
