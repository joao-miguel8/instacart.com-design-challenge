import { useState } from "react";
import Header from "../../components/header/Header";
import { AccountSignUpWindow } from "../../components/account-signup-window/AccountSignUpWindow";
import type { LoginSignUpStatusType } from "../../components/account-signup-window/types/LoginSignUpStatusType";
import "./homepage.css";

function Homepage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [loginSignUpStatus, setLoginSignUpStatus] = useState<LoginSignUpStatusType>({
		isSignUpEnabled: false,
		isLoginEnabled: false,
	});

	const handleCloseNavMenu = () => setIsMenuOpen(prevVal => !prevVal);

	return (
		<>
			<Header handleCloseMainMenu={() => handleCloseNavMenu()} isMenuOpen={isMenuOpen} loginSignUpStatus={loginSignUpStatus} setLoginSignUpStatus={setLoginSignUpStatus} />
			{loginSignUpStatus.isSignUpEnabled && <AccountSignUpWindow loginSignUpStatus={loginSignUpStatus} setLoginSignUpStatus={setLoginSignUpStatus} />}
			<div className={`bg-hero-img`}>
				<h1>Order groceries for delivery or pickup today</h1>
			</div>
		</>
	);
}

export default Homepage;
