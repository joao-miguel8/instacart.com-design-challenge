import { ReactNode } from "react";

export type AccordionItemType = {
	children: ReactNode;
	accordionTitleContainer: ReactNode;
	accordionItemWrapper?: string | undefined;
	accordionTitleContainerStyling?: string | undefined;
	accordionContentContainerStyling?: string | undefined;
};
