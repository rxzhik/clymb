export default function Input(props) {
	return (
		<input
			{...props}
			className={`input input-bordered rounded-2xl ${props.className || ""}`}
		/>
	);
}
