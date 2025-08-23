import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import RouteTransition from "./components/RouteTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
	return (
		<div className="min-h-screen gradient-radial">
			<Helmet>
				<title>Clymb – Growth Marketing Agency</title>
				<meta
					name="description"
					content="Full‑stack growth marketing agency: SEO, Paid, Social, Content, CRO & Analytics."
				/>
				<link
					rel="canonical"
					href={
						typeof window !== "undefined"
							? window.location.origin + window.location.pathname
							: "https://example.com/"
					}
				/>
				<meta property="og:site_name" content="Clymb" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Clymb – Growth Marketing Agency" />
				<meta
					property="og:description"
					content="Full‑stack growth marketing agency: SEO, Paid, Social, Content, CRO & Analytics."
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>
			<a href="#main" className="sr-only focus:not-sr-only">
				Skip to content
			</a>
			<NavBar />
			<main id="main">
				<ScrollToTop behavior="instant" />
				<RouteTransition>
					<Outlet />
				</RouteTransition>
			</main>
			<Footer />
		</div>
	);
}
