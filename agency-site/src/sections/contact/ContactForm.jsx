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
		<section ref={ref} className="max-w-4xl mx-auto px-4 py-12">
			<form onSubmit={submit} className="grid md:grid-cols-2 gap-4 glass p-6">
				<Input name="name" placeholder="Name" required data-reveal />
				<Input
					name="email"
					placeholder="Email"
					type="email"
					required
					data-reveal
				/>
				<Input name="company" placeholder="Company" data-reveal />
				<select
					className="select select-bordered rounded-2xl"
					name="budget"
					data-reveal
					defaultValue=""
				>
					<option value="" disabled>
						Budget
					</option>
					<option>Under $5k</option>
					<option>$5k–$20k</option>
					<option>$20k+</option>
				</select>
				<div className="md:col-span-2" data-reveal>
					<TextArea name="goals" rows="5" placeholder="Tell us your goals" />
				</div>
				<label className="label cursor-pointer md:col-span-2" data-reveal>
					<span className="label-text">Join newsletter</span>
					<input type="checkbox" className="toggle toggle-info" />
				</label>
				<div className="md:col-span-2">
					<Button type="submit">Send message</Button>
				</div>
			</form>
			<Toast
				message="Thanks! We'll be in touch shortly."
				show={show}
				onClose={() => setShow(false)}
			/>
		</section>
	);
}
