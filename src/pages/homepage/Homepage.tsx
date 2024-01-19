import { useState } from "react";
import "./homepage.css";
import "../../components/accordion/style.css";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import instacartLogo from "../../assets/nav-carrot-logo.webp";
import QRCodeIMG from "../../assets/homepage-qrcode-img.png";
import QRCodePhoneIMG from "../../assets/qrcode-phone-img.webp";
import benefit01 from "../../assets/grocery-delivery-benefit-img.webp";
import benefit02 from "../../assets/grocery-delivery-see-real-time-updates-benefit.webp";
import benefit03 from "../../assets/grocery-delivery-get-your-items-same-day-benefit-img.webp";
import handDeliveryImg from "../../assets/man-hands-delivery-img.webp";
import { AccountSignUpWindow } from "../../components/account-signup-window/AccountSignUpWindow";
import Header from "../../components/header/Header";
import GroceryDeliveryCard from "./components/grocery-delivery-card/GroceryDeliveryCard";
import StatisticFactsAccordion from "./components/statistic-facts-accordion/StatisticFactsAccordion";
import CommonQuestionsAccordion from "./components/common-questions-accordion/CommonQuestionsAccordion";
import GetDeliveriesServicesAccordion from "./components/get-deliveries-services-accordion/GetDeliveriesServicesAccordion";
import type { LoginSignUpStatusType } from "../../components/account-signup-window/types/LoginSignUpStatusType";
import type { GroceryCardType } from "./components/grocery-delivery-card/types/GroceryCardType";
import useMediaQuery from "../../hooks/useMediaQuery";
import DeliveryServicesList from "./components/get-deliveries-services-accordion/components/DeliveryServicesList";
import BecomeAShopperServicesAccordion from "./components/become-a-shopper-services-accordion/BecomeAShopperServicesAccordion";

function Homepage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 978px)");

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
			<section className="statistic-facts-section">
				<h2>The largest online grocery marketplace in North America</h2>
				<div className="statistic-facts-img-wrapper">
					<img src={handDeliveryImg} alt="" />
				</div>
				<StatisticFactsAccordion />
			</section>
			{/* ----- COMMON QUESTIONS SECTION ------ */}
			<section className="common-questions-section">
				<h2>Common questions</h2>
				<CommonQuestionsAccordion />
			</section>
			{/* ----- GET DELIVERIES SERVICES SECTION ------ */}
			<section className="get-delivery-services-wrapper">
				<div className="get-delivery-services-container">
					<div className="get-delivery-services-header-logos-wrapper">
						{/* Header Container */}
						<div className="get-delivery-services-header-container">
							<img src={instacartLogo} alt="instacart logo" />
							<h4>Get deliveries with instacart</h4>
						</div>
						{/* Mobile App Logos */}
						<div className="app-providers-logo-container">
							<div>
								<FaApple size={"1.2rem"} />
								<a href="https://apps.apple.com/us/app/instacart-get-grocery-delivery/id545599256">IOS</a>
							</div>
							<div>
								<BiLogoPlayStore size={"1.2rem"} />
								<a href="https://apps.apple.com/us/app/instacart-get-grocery-delivery/id545599256">Android</a>
							</div>
						</div>
					</div>
					{isDesktop ? <DeliveryServicesList /> : <GetDeliveriesServicesAccordion />}
				</div>
			</section>
			{/* ----- GET DELIVERIES SERVICES SECTION ------ */}
			<BecomeAShopperServicesAccordion />
		</>
	);
}

export default Homepage;
