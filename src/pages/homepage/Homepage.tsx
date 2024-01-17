import { useState } from "react";
import Header from "../../components/header/Header";
import "./homepage.css";
import QRCodeIMG from "../../assets/homepage-qrcode-img.png";
import QRCodePhoneIMG from "../../assets/qrcode-phone-img.webp";
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

			{/* ----- HERO SECTION ------ */}
			<div className={`bg-hero-img`}>
				<div>
					<h1>Order groceries for delivery or pickup today</h1>
					<p>Whatever you want from local stores, brought right to your door.</p>
				</div>
			</div>
			{/* ----- QRCode CTA SECTION ------ */}
			<div className="qr-code-cta-container">
				<img src={QRCodePhoneIMG} alt="Himg" />
				<div>
					<h2>Get the full Instacart experience</h2>
					<p>Scan the QR code with your camera. First delivery is free.</p>
				</div>
				<img src={QRCodeIMG} alt="QR code img" className="qr-code-cta-img" />
			</div>
		</>
	);
}

export default Homepage;
