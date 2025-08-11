import { useRef } from "react";
import useReveal from "../../lib/animations/useReveal.js";
export default function Models() {
	const ref = useRef(null);
	useReveal(ref);
	return (
		<section ref={ref} className="max-w-6xl mx-auto px-4 py-12 overflow-x-auto">
			<table className="table table-zebra rounded-2xl" data-reveal>
				<thead>
					<tr>
						<th>Model</th>
						<th>Best for</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Retainer</td>
						<td>Ongoing growth</td>
						<td>Dedicated squad</td>
					</tr>
					<tr>
						<td>Project</td>
						<td>Site or campaign</td>
						<td>Fixed scope</td>
					</tr>
					<tr>
						<td>Audit Sprint</td>
						<td>Fast diagnosis</td>
						<td>2–3 weeks</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
