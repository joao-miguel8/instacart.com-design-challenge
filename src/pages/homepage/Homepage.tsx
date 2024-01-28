import { useState } from "react";
import "./homepage.css";
import "../../components/accordion/style.css";
import benefit01 from "../../assets/grocery-delivery-benefit-img.webp";
import benefit02 from "../../assets/grocery-delivery-see-real-time-updates-benefit.webp";
import benefit03 from "../../assets/grocery-delivery-get-your-items-same-day-benefit-img.webp";
import handDeliveryImg from "../../assets/man-hands-delivery-img.webp";
import { AccountSignUpWindow } from "../../components/account-signup-window/AccountSignUpWindow";
import Header from "../../components/header/Header";
import GroceryDeliveryCard from "./components/grocery-delivery-card/GroceryDeliveryCard";
import StatisticFactsAccordion from "./components/statistic-facts-accordion/StatisticFactsAccordion";
import CommonQuestionsAccordion from "./components/common-questions-accordion/CommonQuestionsAccordion";
import type { LoginSignUpStatusType } from "../../components/account-signup-window/types/LoginSignUpStatusType";
import type { GroceryCardType } from "./components/grocery-delivery-card/types/GroceryCardType";
import useMediaQuery from "../../hooks/useMediaQuery";
import Footer from "../../components/footer/Footer";
import BecomeAShopperServices from "../../components/footer/components/BecomeAShopperServices";
import GetDeliveryServices from "../../components/footer/components/GetDeliveryServices";
import HeroSection from "./components/hero-section/HeroSection";
import AccessibilityFooterToggleSection from "../../components/footer/components/AccessibilityFooterToggleSection";

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
			<HeroSection />
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
					<img src={handDeliveryImg} alt="customer recieving delivery with instacart" />
				</div>
				<StatisticFactsAccordion />
			</section>
			{/* ----- COMMON QUESTIONS SECTION ------ */}
			<section className="common-questions-section">
				<h2>Common questions</h2>
				<CommonQuestionsAccordion />
			</section>
			<Footer>
				{/* ----- GET DELIVERIES SERVICES SECTION ------ */}
				<GetDeliveryServices isDesktop={isDesktop} />
				{/* ----- BECOME A SHOPPER SERVICES SECTION ------ */}
				<BecomeAShopperServices isDesktop={isDesktop} />
				<AccessibilityFooterToggleSection />
			</Footer>
		</>
	);
}

export default Homepage;
