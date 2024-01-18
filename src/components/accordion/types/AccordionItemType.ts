import { ReactElement, ReactNode } from "react";

export type AccordionItemType = {
	iconOpened?: ReactElement | string;
	iconClosed?: ReactElement | string;
	children: ReactNode;
	accordionTitleContainer: ReactNode;
	accordionItemWrapper?: string;
	accordionTitleContainerStyling?: string | undefined;
	accordionContentContainerStyling?: string | undefined;
};
