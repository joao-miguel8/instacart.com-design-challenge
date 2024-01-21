import Accordion from "../../../../components/accordion/Accordion";
import AccordionItem from "../../../../components/accordion/AccordionItem";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import "./style/StatisticFactsAccordionStyle.css";

function StatisticFactsAccordion() {
	const statisticFactsAccordionData = [
		{ title: "1 billion products", data: "available to shop across the catalog" },
		{ title: "80,000 stores", data: "from local grocers to chain stores" },
		{ title: "14,000 cities", data: "served across the U.S. & Canada" },
		{ title: "Millions of orders", data: "delivered or picked up yearly" },
	];
	const isDesktopView = useMediaQuery("(min-width: 1100px");

	return (
		<>
			<Accordion accordionWrapperStyling="statistic-facts-accordion-wrapper-style">
				{statisticFactsAccordionData.map(item => {
					return (
						<AccordionItem
							initiallyOpened={isDesktopView && true}
							accordionItemWrapper="statistic-facts-accordion-accordion-card-wrapper"
							accordionTitleContainerStyling="statistic-facts-accordion-title-container"
							accordionTitleContainer={<h2 key={item.title}>{item.title}</h2>}
							accordionContentContainerStyling="statistic-facts-content-container">
							<p>{item.data}</p>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
}

export default StatisticFactsAccordion;
