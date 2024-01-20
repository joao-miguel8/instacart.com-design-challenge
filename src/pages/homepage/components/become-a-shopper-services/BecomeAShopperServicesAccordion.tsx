import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import { becomeAShopperServicesData } from "./becomeAShopperServicesData";
import "../become-a-shopper-services/style/becomeAShopperServices.css";

function BecomeAShopperServicesAccordion() {
	return (
		<>
			<Accordion accordionWrapperStyling="become-a-shopper-services-accordion-wrapper-accordion-wrapper">
				{becomeAShopperServicesData.map(item => {
					return (
						<AccordionItem
							key={item.title}
							iconClosed={<IoChevronDown size={"1rem"} />}
							iconOpened={<IoChevronUp size={"1rem"} />}
							accordionItemWrapper={"become-a-shopper-services-accordion-item-wrapper"}
							accordionTitleContainerStyling="become-a-shopper-services-accordion-title-container"
							accordionContentContainerStyling="become-a-shopper-services-accordion-content-container"
							accordionTitleContainer={<h3>{item.title}</h3>}>
							<ul className="become-a-shopper-services-accordion-list-items">
								{item.links.map(linkItem => {
									return (
										<li key={linkItem.title}>
											<a href={linkItem.url}>{linkItem.title}</a>
										</li>
									);
								})}
							</ul>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
}

export default BecomeAShopperServicesAccordion;
