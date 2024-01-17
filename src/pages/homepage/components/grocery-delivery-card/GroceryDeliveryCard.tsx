import { GroceryCardType } from "./types/GroceryCardType";

function GroceryDeliveryCard({ title, description, img }: GroceryCardType) {
	return (
		<div className="grocery-delivery-benefit-card">
			<div className="grocery-delivery-benefit-card-img-wrapper">
				<img src={img} alt={`${title} benefit`} loading="lazy" />
			</div>
			<div className="grocery-delivery-benefit-card-text-content">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default GroceryDeliveryCard;
