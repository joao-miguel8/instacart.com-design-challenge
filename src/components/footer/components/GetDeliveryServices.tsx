import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import DeliveryServicesList from "../../../pages/homepage/components/get-deliveries-services-accordion/components/DeliveryServicesList";
import GetDeliveriesServicesAccordion from "../../../pages/homepage/components/get-deliveries-services-accordion/GetDeliveriesServicesAccordion";
import instacartLogo from "../../../assets/nav-carrot-logo.webp";

function GetDeliveryServices({ isDesktop }: { isDesktop: boolean }) {
	return (
		<section className="get-delivery-services-wrapper">
			<div className="get-delivery-services-container">
				<div className="get-delivery-services-header-logos-wrapper">
					<div className="get-delivery-services-header-and-logo-container">
						{/* Header Container */}
						<div className="get-delivery-services-header-container">
							<img src={instacartLogo} alt="instacart logo" />
							<h4>Get deliveries with instacart</h4>
						</div>
						{/* Mobile App Logos */}
						<div className="get-delivery-services-app-providers-logo-container">
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
				</div>
				{isDesktop ? <DeliveryServicesList /> : <GetDeliveriesServicesAccordion />}
			</div>
		</section>
	);
}

export default GetDeliveryServices;
