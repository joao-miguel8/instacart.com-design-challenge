import { useState } from "react";
import Header from "../../components/header/Header";

function Homepage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleCloseNavMenu = () => setIsMenuOpen(prevVal => !prevVal);

	return (
		<>
			<Header handleCloseMainMenu={() => handleCloseNavMenu()} isMenuOpen={isMenuOpen} />
		</>
	);
}

export default Homepage;
