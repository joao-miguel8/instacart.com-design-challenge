import { useState } from "react";
import Header from "../../components/header/Header";
import { AccountSignUpWindow } from "../../components/account-signup-window/AccountSignUpWindow";
import type { LoginSignUpStatusType } from "../../components/account-signup-window/types/LoginSignUpStatusType";

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
		</>
	);
}

export default Homepage;
