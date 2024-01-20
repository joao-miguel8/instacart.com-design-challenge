import { useState } from "react";
import type { AccordionItemType } from "./types/AccordionItemType";

// Read and see the example in Accordion.tsx to see how this component works with the Accordion functionality

function AccordionItem({ iconOpened, iconClosed, children, accordionTitleContainer, accordionTitleContainerStyling, accordionItemWrapper, accordionContentContainerStyling }: AccordionItemType) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={accordionItemWrapper}>
			<div className={`${accordionTitleContainerStyling}`} onClick={() => setIsOpen(prevVal => !prevVal)}>
				{accordionTitleContainer}
				<span>{isOpen ? iconOpened : iconClosed}</span>
			</div>
			{<div className={`${isOpen ? "accordion-item-opened" : "accordion-item-hidden"} ${accordionContentContainerStyling}`}>{children}</div>}
		</div>
	);
}
export default AccordionItem;
