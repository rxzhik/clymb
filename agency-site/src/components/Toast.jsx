import { useEffect, useState } from "react";
export default function Toast({ message, show, onClose }) {
	const [open, setOpen] = useState(show);
	useEffect(() => setOpen(show), [show]);
	useEffect(() => {
		if (open) {
			const t = setTimeout(() => {
				setOpen(false);
				onClose?.();
			}, 2500);
			return () => clearTimeout(t);
		}
	}, [open]);
	return open ? (
		<div className="toast toast-end z-50">
			<div role="status" className="alert alert-success shadow-lg">
				<span>{message}</span>
			</div>
		</div>
	) : null;
}
