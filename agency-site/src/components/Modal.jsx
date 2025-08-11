export default function Modal({ id, title, children }) {
	return (
		<dialog id={id} className="modal">
			<div className="modal-box glass">
				<h3 className="font-bold text-lg mb-4">{title}</h3>
				{children}
				<div className="modal-action">
					<form method="dialog">
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
