import "./styles/getDeliveriesServicesAccordion.css";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import { deliveryServicesList } from "./deliveryServicesData";
import type { DeliveryServiceListGroupType } from "./types/DeliveryServiceListGroupType";

function GetDeliveriesServicesAccordion() {
	return (
		<>
			<Accordion accordionWrapperStyling="accordion-wrapper">
				{deliveryServicesList.map((item: DeliveryServiceListGroupType) => {
					return (
						<AccordionItem
							key={item.title}
							iconClosed={<IoChevronDown size={"1rem"} />}
							iconOpened={<IoChevronUp size={"1rem"} />}
							accordionTitleContainerStyling="accordion-title-container"
							accordionItemWrapper="accordion-card-wrapper"
							accordionContentContainerStyling="accordion-content-wrapper"
							accordionTitleContainer={<h3>{item.title}</h3>}>
							<ul className="accordion-list-items">
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

export default GetDeliveriesServicesAccordion;
