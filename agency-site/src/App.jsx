import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import RouteTransition from "./components/RouteTransition.jsx";

export default function App() {
	return (
		<div className="min-h-screen gradient-radial">
			<a href="#main" className="sr-only focus:not-sr-only">
				Skip to content
			</a>
			<NavBar />
			<main id="main">
				<RouteTransition>
					<Outlet />
				</RouteTransition>
			</main>
			<Footer />
		</div>
	);
}
