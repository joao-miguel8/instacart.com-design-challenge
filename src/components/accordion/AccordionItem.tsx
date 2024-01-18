import { useState } from "react";
import type { AccordionItemType } from "./types/AccordionItemType";

// Read and see the example in Accordion.tsx to see how this component works with the Accordion functionality

function AccordionItem({ children, accordionTitleContainer, accordionTitleContainerStyling, accordionContentContainerStyling }: AccordionItemType) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button className={`${!accordionTitleContainerStyling ? "accordion-title-container" : accordionTitleContainerStyling}`} onClick={() => setIsOpen(prevVal => !prevVal)}>
				{accordionTitleContainer}
			</button>
			{<div className={`${isOpen ? "accordion-item-opened" : "accordion-item-hidden"} ${!accordionContentContainerStyling ? "accordion-content-container" : accordionContentContainerStyling}`}>{children}</div>}
		</div>
	);
}
export default AccordionItem;
