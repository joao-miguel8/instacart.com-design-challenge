import "./GetDeliveriesServicesAccordion.css";
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import type { AccordionItemLinksType } from "./types/AccordionItemLinksType";

function GetDeliveriesServicesAccordion() {
	const accordionItemLinks = {
		topDepartments: [
			{ title: "Alcohol", link: "https://www.instacart.com/categories/2-alcohol" },
			{ title: "Alcohol by location", link: "https://www.instacart.com/alcohol-delivery" },
			{ title: "Frozen Food", link: "https://www.instacart.com/categories/316-food/627-frozen-food" },
			{ title: "Beverages", link: "https://www.instacart.com/categories/243-beverages" },
			{ title: "Organic Grocery", link: "https://www.instacart.com/store/hub/grocery" },
			{ title: "Household Essentials", link: "https://www.instacart.com/categories/1361-household-essentials" },
			{ title: "Office Supplies", link: "https://www.instacart.com/categories/1764-office-supplies" },
			{ title: "Beauty Products", link: "https://www.instacart.com/categories/1484-beauty" },
			{ title: "Late Night Delivery", link: "https://www.instacart.com/late-night-delivery" },
			{ title: "Grocery Pickup Near me", link: "https://www.instacart.com/gift-delivery" },
			{ title: "Latin Groceries", link: "https://www.instacart.com/asian-grocery-delivery" },
			{ title: "Business Office snacks", link: "https://www.instacart.com/business/office-snacks" },
		],
		totalDepartments: [
			{ title: "Fresh Produce", link: "https://www.instacart.com/categories/316-food/317-fresh-produce" },
			{ title: "Dairy Products", link: "https://www.instacart.com/categories/316-food/1326-dairy" },
			{ title: "Meat", link: "https://www.instacart.com/categories/316-food/1807-meat" },
			{ title: "Meat Alternatives", link: "https://www.instacart.com/categories/316-food/831-meat-alternatives" },
			{ title: "Seafood", link: "https://www.instacart.com/categories/316-food/1974-seafood" },
			{ title: "Pantry Food", link: "https://www.instacart.com/categories/316-food/844-pantry" },
			{ title: "Baked Goods", link: "https://www.instacart.com/categories/316-food/1300-baked-goods" },
			{ title: "View all departments", link: "https://www.instacart.com/categories" },
			{ title: "Gift Delivery Near Me", link: "https://www.instacart.com/gift-delivery" },
			{ title: "Flower Delivery Near Me", link: "https://www.instacart.com/gift-delivery" },
			{ title: "Asian Groceries", link: "https://www.instacart.com/asian-grocery-delivery" },
			{ title: "Business Office Food", link: "https://www.instacart.com/business/office-food" },
			{ title: "Coffee Shop Supplies", link: "https://www.instacart.com/business/coffee-shop-supplies" },
		],
		InstacartPrograms: [
			{ title: "Instacart+", link: "https://www.instacart.com/instacart-plus" },
			{ title: "Instacart Business", link: "https://www.instacart.com/business/" },
			{ title: "EBT SNAP", link: "https://www.instacart.com/ebt-snap" },
			{ title: "Fresh Funds", link: "https://www.instacart.com/freshfunds" },
			{ title: "Promos & Coupons", link: "https://www.instacart.com/promos-and-coupons" },
			{ title: "Gift Cards", link: "https://www.instacart.com/p/gift-cards" },
			{ title: "Grocery Budget Calculator", link: "https://www.instacart.com/resources/grocery-budget-calculator" },
			{ title: "Instacart Ads", link: "https://www.instacart.com/categories/316-food/317-fresh-produce" },
			{ title: "Instacart Connect", link: "https://docs.instacart.com/connect/?_gl=1*15sbulg*_ga*NjQyOTY1NjE4LjE3MDQ5MDE4ODA.*_ga_VL5WVTXMWP*MTcwNTYzMTA3Ni4yNy4xLjE3MDU2MzMxMjkuOS4wLjA." },
			{ title: "Cookie Delivery Near me", link: "https://www.instacart.com/cookie-delivery" },
			{ title: "Business Office Supplies", link: "https://www.instacart.com/business/office-supplies" },
			{ title: "Home Depot Delivery", link: "https://www.instacart.com/store/the-home-depot/storefront" },
		],
		getToKnowUs: [
			{ title: "Press", link: "https://www.instacart.com/company/newsroom/?_gl=1*du1tjf*_ga*NjQyOTY1NjE4LjE3MDQ5MDE4ODA.*_ga_VL5WVTXMWP*MTcwNTYzMTA3Ni4yNy4xLjE3MDU2MzM0NzYuNjAuMC4w" },
			{ title: "Careers", link: "https://instacart.careers/?_gl=1%2Ag0n9nt%2A_ga%2ANjQyOTY1NjE4LjE3MDQ5MDE4ODA.%2A_ga_VL5WVTXMWP%2AMTcwNTYzNjY4Ni4yOC4wLjE3MDU2MzY2ODYuNjAuMC4w" },
			{ title: "Blog", link: "https://www.instacart.com/company/blog?_gl=1*g0n9nt*_ga*NjQyOTY1NjE4LjE3MDQ5MDE4ODA.*_ga_VL5WVTXMWP*MTcwNTYzNjY4Ni4yOC4wLjE3MDU2MzY2ODYuNjAuMC4w" },
			{ title: "Ideas & Guides", link: "https://www.instacart.com/company/ideas/?_gl=1*126722h*_ga*NjQyOTY1NjE4LjE3MDQ5MDE4ODA.*_ga_VL5WVTXMWP*MTcwNTYzNjY4Ni4yOC4xLjE3MDU2MzY3MTIuMzQuMC4w" },
			{ title: "Help", link: "https://www.instacart.com/help" },
			{ title: "Shop By Location", link: "https://www.instacart.com/grocery-delivery" },
			{ title: "Beauty Supplies Near Me", link: "https://www.instacart.com/beauty-supply-delivery" },
			{ title: "Pet Supplies Near Me", link: "https://www.instacart.com/pet-supplies-delivery" },
			{ title: "Convenience Store Near Me", link: "https://www.instacart.com/convenience-store-delivery" },
			{ title: "Cake Delivery Near Me", link: "https://www.instacart.com/cake-delivery" },
			{ title: "Caper Cart", link: "https://www.instacart.com/connected-stores/caper-cart" },
		],
	};

	return (
		<Accordion accordionWrapperStyling="accordion-wrapper">
			{/* Top departments */}
			<AccordionItem
				iconClosed={<IoChevronDown size={"1rem"} />}
				iconOpened={<IoChevronUp size={"1rem"} />}
				accordionTitleContainerStyling="accordion-title-container"
				accordionItemWrapper="accordion-card-wrapper"
				accordionContentContainerStyling="accordion-content-wrapper"
				accordionTitleContainer={<h3>Top departments</h3>}>
				{accordionItemLinks.totalDepartments.map((item: AccordionItemLinksType) => {
					return (
						<ul className="accordion-list-items">
							<li key={item.title}>
								<a href={item.link}>{item.title}</a>
							</li>
						</ul>
					);
				})}
			</AccordionItem>
			{/* More departments */}
			<AccordionItem
				iconClosed={<IoChevronDown size={"1rem"} />}
				iconOpened={<IoChevronUp size={"1rem"} />}
				accordionTitleContainerStyling="accordion-title-container"
				accordionItemWrapper="accordion-card-wrapper"
				accordionContentContainerStyling="accordion-content-wrapper"
				accordionTitleContainer={<h3>More departments</h3>}>
				{accordionItemLinks.topDepartments.map((item: AccordionItemLinksType) => {
					return (
						<ul className="accordion-list-items">
							<li>
								<a href={item.link}>{item.title}</a>
							</li>
						</ul>
					);
				})}
			</AccordionItem>
			{/* Instacart programs */}
			<AccordionItem
				iconClosed={<IoChevronDown size={"1rem"} />}
				iconOpened={<IoChevronUp size={"1rem"} />}
				accordionTitleContainerStyling="accordion-title-container"
				accordionItemWrapper="accordion-card-wrapper"
				accordionContentContainerStyling="accordion-content-wrapper"
				accordionTitleContainer={<h3>Instacart programs</h3>}>
				{accordionItemLinks.InstacartPrograms.map((item: AccordionItemLinksType) => {
					return (
						<ul className="accordion-list-items">
							<li key={item.title}>
								<a href={item.link}>{item.title}</a>
							</li>
						</ul>
					);
				})}
			</AccordionItem>
			{/* Get to know us */}
			<AccordionItem
				iconClosed={<IoChevronDown size={"1rem"} />}
				iconOpened={<IoChevronUp size={"1rem"} />}
				accordionTitleContainerStyling="accordion-title-container"
				accordionItemWrapper="accordion-card-wrapper"
				accordionContentContainerStyling="accordion-content-wrapper"
				accordionTitleContainer={<h3>Get to know us</h3>}>
				{accordionItemLinks.InstacartPrograms.map((item: AccordionItemLinksType) => {
					return (
						<ul className="accordion-list-items">
							<li key={item.title}>
								<a href={item.link}>{item.title}</a>
							</li>
						</ul>
					);
				})}
			</AccordionItem>
		</Accordion>
	);
}

export default GetDeliveriesServicesAccordion;
