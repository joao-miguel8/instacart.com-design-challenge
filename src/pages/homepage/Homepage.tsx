import { useState } from "react";
import "./homepage.css";
import QRCodeIMG from "../../assets/homepage-qrcode-img.png";
import QRCodePhoneIMG from "../../assets/qrcode-phone-img.webp";
import benefit01 from "../../assets/grocery-delivery-benefit-img.webp";
import benefit02 from "../../assets/grocery-delivery-see-real-time-updates-benefit.webp";
import benefit03 from "../../assets/grocery-delivery-get-your-items-same-day-benefit-img.webp";
import { AccountSignUpWindow } from "../../components/account-signup-window/AccountSignUpWindow";
import Header from "../../components/header/Header";
import GroceryDeliveryCard from "./components/grocery-delivery-card/GroceryDeliveryCard";
import type { LoginSignUpStatusType } from "../../components/account-signup-window/types/LoginSignUpStatusType";
import type { GroceryCardType } from "./components/grocery-delivery-card/types/GroceryCardType";
import { Accordion, AccordionItem } from "../../components/accordion/Accordion";
import "../../components/accordion/style.css";

function Homepage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [loginSignUpStatus, setLoginSignUpStatus] = useState<LoginSignUpStatusType>({
		isSignUpEnabled: false,
		isLoginEnabled: false,
	});

	const handleCloseNavMenu = () => setIsMenuOpen(prevVal => !prevVal);

	const groceryDeliveryCardsData: GroceryCardType[] = [
		{ title: "Choose what you want", description: "Select items from your favorite grocery stores at Instacart.com or in the app.", img: benefit01 },
		{ title: "See real-time updates", description: "Personal shoppers pick items with care. Chat as they shop and manage your order.", img: benefit02 },
		{ title: "Get your items same-day", description: "Pick a convenient time for you. Enjoy Instacart’s 100% quality guarantee on every order.", img: benefit03 },
	];

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

			{/* ----- GROCERY DELIVERY BENEFIT SECTION ------ */}
			<div className="grocery-delivery-benefits-container">
				<h2>Grocery delivery you can count on</h2>
				<div className="grocery-delivery-benefits-wrapper">
					<div className="grocery-delivery-scroll-container">
						{groceryDeliveryCardsData.map((card: GroceryCardType) => {
							return <GroceryDeliveryCard key={card.title} title={card.title} description={card.description} img={card.img} />;
						})}
					</div>
				</div>
			</div>
			{/* ----- STATISTIC FACTS SECTION ------ */}
		</>
	);
}

export default Homepage;
