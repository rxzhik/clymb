import { useRef, useState } from "react";
import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";
import Button from "../../components/Button.jsx";
import Toast from "../../components/Toast.jsx";
import useReveal from "../../lib/animations/useReveal.js";

export default function ContactForm() {
	const ref = useRef(null);
	useReveal(ref);
	const [show, setShow] = useState(false);
	const submit = (e) => {
		e.preventDefault();
		setShow(true);
	};
	return (
		<div ref={ref} className="w-full" data-reveal>
			<form
				onSubmit={submit}
				className="grid md:grid-cols-2 gap-4 glass-magenta rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-[0_8px_30px_-4px_rgba(255,0,170,0.25)]"
			>
				<Input name="name" placeholder="Name" required />
				<Input name="email" placeholder="Email" type="email" required />
				<Input name="company" placeholder="Company" />
				<select
					className="select select-bordered rounded-2xl"
					name="budget"
					defaultValue=""
				>
					<option value="" disabled>
						Budget
					</option>
					<option>Under $5k</option>
					<option>$5k–$20k</option>
					<option>$20k+</option>
				</select>
				<div className="md:col-span-2">
					<TextArea name="goals" rows="5" placeholder="Tell us your goals" />
				</div>
				<div className="md:col-span-2 pt-2">
					<Button type="submit" className="w-full md:w-auto">
						Send message →
					</Button>
				</div>
			</form>
			<Toast
				message="Thanks! We'll be in touch shortly."
				show={show}
				onClose={() => setShow(false)}
			/>
		</div>
	);
}
