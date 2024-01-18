import "./style.css";
import type { AccordionType } from "./types/AccordionType";

// REACT COMPONENT DETAILS:
/*
- How the component should look
- You can pass JSX into the AccordionItem and Accordion props
- You can override styling by using the styling props
- You cannot override the on and off styling functionality which are these two classNames "accordion-item-opened" "accordion-item-hidden"

EXAMPLE:
/*
				<Accordion>
					<AccordionItem
						accordionTitleContainer={
							<div>
								<h2>title 01</h2>
								<span>Benefit 01</span>
							</div>
						}>
						<div>
							<p>Benefit 1 listed here..</p>
						</div>
					</AccordionItem>
					<AccordionItem
						accordionTitleContainer={
							<div>
								<h2>title 02</h2>
								<span>Benefit 02</span>
							</div>
						}>
						<div>
							<p>Benefit 2 listed here..</p>
						</div>
					</AccordionItem>
				</Accordion>;
*/

function Accordion({ children, accordionWrapperStyling }: AccordionType) {
	return <div className={`${!accordionWrapperStyling?.length && "accordion-wrapper"}`}>{children}</div>;
}

export default Accordion;
