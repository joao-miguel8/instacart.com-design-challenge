import { useEffect, useState } from "react";

// This hook implements media queries without CSS allowing Javascript to create media queries
// - This hook takes a media query string as its parameter and utilizes the window.matchMedia function to check if the current viewport matches the specified media query.
// - It returns a boolean value indicating whether the viewport matches the provided media query.

// Example used in a component:
// const isDesktop = useMediaQuery("(min-width: 978px)");

function useMediaQuery(mediaQuery: string) {
	const [matches, setMatches] = useState(false);
	const matchQueryList = window.matchMedia(mediaQuery);

	useEffect(() => {
		const handleMediaQueryList = () => setMatches(matchQueryList.matches);
		matchQueryList.addEventListener("change", handleMediaQueryList);

		return () => {
			matchQueryList.removeEventListener("change", handleMediaQueryList);
		};
	}, [mediaQuery]);

	return matches;
}

export default useMediaQuery;
