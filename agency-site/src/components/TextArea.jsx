export default function TextArea(props) {
	return (
		<textarea
			{...props}
			className={`textarea textarea-bordered rounded-2xl ${
				props.className || ""
			}`}
		></textarea>
	);
}
