import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/tailwind.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "services/:id", element: <ServiceDetail /> },
			{ path: "contact", element: <Contact /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</React.StrictMode>
);
