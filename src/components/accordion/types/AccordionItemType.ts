import { ReactNode } from "react";

export type AccordionItemType = {
	children: ReactNode;
	accordionTitleContainer: ReactNode;
	accordionTitleContainerStyling?: string | undefined;
	accordionContentContainerStyling?: string | undefined;
};
