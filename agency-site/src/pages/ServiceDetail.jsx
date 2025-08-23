import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getService } from "../data/services.js";
import ServiceTemplate from "./services/ServiceTemplate.jsx";
import { Helmet } from "react-helmet-async";

export default function ServiceDetail() {
	const { id } = useParams();
	const service = getService(id);
	const navigate = useNavigate();
	const loc = useLocation();

	useEffect(() => {
		if (!service) navigate("/services", { replace: true });
	}, [service, navigate]);
	useEffect(() => {
		if (!loc.hash) return;
		const el = document.getElementById(loc.hash.substring(1));
		if (el)
			setTimeout(
				() => el.scrollIntoView({ behavior: "smooth", block: "start" }),
				50
			);
	}, [loc]);

	if (!service) return null;
	return (
		<>
			<Helmet>
				<title>{service.title} – Clymb</title>
				<meta name="description" content={service.summary} />
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + "/services/" + service.id
							: "https://example.com/services/" + service.id
					}
				/>
				<meta property="og:title" content={service.title + " – Clymb"} />
				<meta property="og:description" content={service.summary} />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Service",
						name: service.title,
						description: service.summary,
						provider: { "@type": "Organization", name: "Clymb" },
						areaServed: "Global",
						serviceType: service.title,
					})}
				</script>
			</Helmet>
			<ServiceTemplate service={service} />
		</>
	);
}
