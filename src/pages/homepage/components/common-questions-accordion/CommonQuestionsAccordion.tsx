import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import "./style/commonQuestionAccordion.css";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";

function CommonQuestionsAccordion() {
	return (
		<div>
			<Accordion accordionWrapperStyling="common-question-accordion-wrapper">
				{/* Item01 */}
				<AccordionItem
					iconOpened={<FaMinus size={"1.5rem"} />}
					iconClosed={<FaPlus size={"1.5rem"} />}
					accordionItemWrapper="common-question-card"
					accordionTitleContainerStyling="common-question-accordion-title-container-style "
					accordionTitleContainer={
						<div>
							<h3>How does instacart delivery and curbside pickup work?</h3>
						</div>
					}
					accordionContentContainerStyling="common-question-card-content-container">
					<div className="accordion-content-container-styling">
						<p>
							Instacart makes it easy to order from your favorite stores. Shop for items from stores near you, with a selection of more than 500 retailers and trusted local grocers across North America. Then, Instacart will connect you with a personal shopper in your area to shop and
							deliver your order. Contactless delivery is available with our “Leave at my door” option."
							<p>You can track your order’s progress and communicate with your shopper every step of the way using the Instacart app or website."</p>
							<p>Instacart also offers curbside pickup at select retail locations. Simply place your order and choose a pickup time, and a shopper will prepare your order at the store.</p>
							<p>When you get to the store, use the Instacart app to notify us. Depending on the store, a shopper or store employee will bring the groceries to your car, or you can pick them up at the designated area.</p>
						</p>
					</div>
				</AccordionItem>
				{/* Item02 */}
				<AccordionItem
					iconOpened={<FaMinus size={"1.5rem"} />}
					iconClosed={<FaPlus size={"1.5rem"} />}
					accordionItemWrapper="common-question-card"
					accordionTitleContainerStyling="common-question-accordion-title-container-style "
					accordionTitleContainer={<h3>How much does instacart cost?</h3>}
					accordionContentContainerStyling="common-question-card-content-container">
					<div className="accordion-content-container-styling">
						<p>You don’t need a membership to order with Instacart. In fact, you can even order from warehouse clubs, like Costco, Sam’s Club, and BJ’s Wholesale Club, without a retailer club membership.</p>
						<p>To get started, create an account, select the store you want to shop, and place your order. New customers may be eligible for free delivery promotions.</p>
						<p>Delivery: Fees start at $3.99 for same-day orders over $35. Fees vary for one-hour deliveries, club store deliveries, and deliveries under $35. Pickup: There may be a “pickup fee” (equivalent to a delivery fee for pickup orders) on your pick up order.</p>
						<p>Service fees: Service fees vary and are subject to change based on factors like location and the number and types of items in your cart. Orders containing alcohol have a separate service fee.</p>
						<p>With an optional Instacart+ membership, you can get $0 delivery fee on every order over $35 and lower service fees too.</p>
					</div>
				</AccordionItem>
				{/* Item03 */}
				<AccordionItem
					iconOpened={<FaMinus size={"1.5rem"} />}
					iconClosed={<FaPlus size={"1.5rem"} />}
					accordionItemWrapper="common-question-card"
					accordionTitleContainerStyling="common-question-accordion-title-container-style "
					accordionTitleContainer={<h3>Will I pay the same price on instacart as I would in store?</h3>}
					accordionContentContainerStyling="common-question-card-content-container">
					<div className="accordion-content-container-styling">
						<p>
							Instacart makes it easy to communicate with your shopper. When an item you want is out-of-stock at the store, your shopper will follow your replacement preferences. You can set item and delivery instructions in advance, as well as chat directly with your shopper while
							they shop and deliver your items. You can tell the shopper to:
						</p>
						<ul>
							<li>Find Best Match: By default, your shopper will use their best judgement to pick a replacement for your item. </li>
							<li>Pick Specific Replacement: You can pick a specific alternative for the shopper to purchase if your first choice is out-of-stock. </li>
							<li>Don’t Replace: For items you’d rather not replace, choose “Don’t replace” to get a refund if the item is out of stock.</li>
						</ul>
						<p>You can update or cancel your order as long as your shopper hasn’t started shopping. If you need to make changes after shopping has started, you can use the app or website to approve replacements or chat with your shopper.</p>
					</div>
				</AccordionItem>
				{/* Item04 */}
				<AccordionItem
					iconClosed={<FaPlus size={"1.4rem"} />}
					iconOpened={<FaMinus size={"1.4rem"} />}
					accordionItemWrapper="common-question-card"
					accordionTitleContainerStyling="common-question-accordion-title-container-style "
					accordionTitleContainer={<h3>What happens if there's an issue with my order?</h3>}
					accordionContentContainerStyling="common-question-card-content-container">
					<div className="accordion-content-container-styling">
						<p>If something isn’t right, you’ve got options. In the Instacart app or website, you can report:</p>
						<ul>
							<li>Missing items</li>
							<li>Incorrect items</li>
							<li>Damaged items</li>
							<li>Poor replacements</li>
							<li>Early/late orders</li>
						</ul>
						<p>If an order never came, or you get someone else’s order, you can reach out to Instacart Customer Experience.</p>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default CommonQuestionsAccordion;
