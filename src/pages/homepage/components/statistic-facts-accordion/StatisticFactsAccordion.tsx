import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import "../statistic-facts-accordion/style/StatisticFactsAccordionStyle.css";

function StatisticFactsAccordion() {
	const statisticFactsAccordionData = [
		{ title: "1 billion products", data: "available to shop across the catalog" },
		{ title: "80,000 stores", data: "from local grocers to chain stores" },
		{ title: "14,000 cities", data: "served across the U.S. & Canada" },
		{ title: "Millions of orders", data: "delivered or picked up yearly" },
	];

	return (
		<>
			{statisticFactsAccordionData.map(item => {
				return (
					<Accordion accordionWrapperStyling="accordion-wrapper-style">
						<AccordionItem accordionItemWrapper="flex-col accordion-card-wrapper" accordionTitleContainerStyling="statistic-facts-accordion-title-container" accordionTitleContainer={<h2>{item.title}</h2>} accordionContentContainerStyling="stat-content-container">
							<p>{item.data}</p>
						</AccordionItem>
					</Accordion>
				);
			})}
		</>
	);
}

export default StatisticFactsAccordion;
