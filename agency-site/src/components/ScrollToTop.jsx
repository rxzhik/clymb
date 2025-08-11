import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
	const { pathname, search } = useLocation();
	useEffect(() => {
		// Always reset window scroll to the top on route changes
		window.scrollTo({ top: 0, left: 0, behavior });
	}, [pathname, search, behavior]);
	return null;
}
