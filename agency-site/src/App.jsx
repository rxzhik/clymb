import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import RouteTransition from "./components/RouteTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
	return (
		<div className="min-h-screen gradient-radial">
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
