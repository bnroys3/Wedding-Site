import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Component is used to create a scroll to top of page effect after loading a new page
export default function ScrollToTop() {

	const { pathname } = useLocation();

	// When the path is updated, this function will make the page scroll to the top after a short timeout allowing the page to load.
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 300);
	}, [pathname]);

	return null;
}
