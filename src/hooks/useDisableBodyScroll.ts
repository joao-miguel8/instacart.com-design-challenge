import { useEffect } from "react";

function useDisableBodyScroll() {
	const bodyEle = document.body;

	useEffect(() => {
		bodyEle.style.overflow = "hidden";

		return () => {
			bodyEle.style.overflow = "auto";
		};
	}, []);
}

export default useDisableBodyScroll;
