import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import becomeAShopperIcon from "../../../assets/becomeAShopper-header-icon.svg";
import BecomeAShopperServicesList from "../../../pages/homepage/components/become-a-shopper-services/BecomeAShopperServicesList";
import BecomeAShopperServicesAccordion from "../../../pages/homepage/components/become-a-shopper-services/BecomeAShopperServicesAccordion";

function BecomeAShopperServices({ isDesktop }: { isDesktop: boolean }) {
	return (
		<section className="become-a-shopper-services-wrapper">
			<div className="become-a-shopper-services-container">
				<div className="become-a-shopper-services-header-logos-wrapper">
					<div className="become-as-shopper-services-header-logos-container">
						{/* Header Container */}
						<div className="become-a-shopper-services-header-container">
							<img src={becomeAShopperIcon} alt="instacart logo" />
							<h4>Become a Shopper</h4>
						</div>
						{/* Mobile App Logos */}
						<div className="become-a-shopper-app-providers-logo-container">
							<div>
								<FaApple size={"1.2rem"} />
								<a href="https://apps.apple.com/us/app/instacart-shopper-earn-money/id1454056744">IOS</a>
							</div>
							<div>
								<BiLogoPlayStore size={"1.2rem"} />
								<a href="https://play.google.com/store/apps/details?id=com.instacart.shopper&pli=1">Android</a>
							</div>
						</div>
					</div>
				</div>
				{isDesktop ? <BecomeAShopperServicesList /> : <BecomeAShopperServicesAccordion />}
			</div>
		</section>
	);
}

export default BecomeAShopperServices;
