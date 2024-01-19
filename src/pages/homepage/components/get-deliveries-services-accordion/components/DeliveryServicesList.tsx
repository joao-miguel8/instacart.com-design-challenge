import { deliveryServicesList } from "../deliveryServicesData";
import "../styles/deliveryServicesList.css";
import type { DeliveryServiceListGroupType } from "../types/DeliveryServiceListGroupType";

function DeliveryServicesList() {
	return (
		<div className="delivery-services-wrapper">
			{deliveryServicesList.map((list: DeliveryServiceListGroupType) => {
				return (
					<div className="delivery-services-container">
						<h3>{list.title}</h3>
						{list.links.map(item => {
							return (
								<ul className="delivery-services-list-items">
									<li key={item.title}>
										<a href={item.url}>{item.title}</a>
									</li>
								</ul>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default DeliveryServicesList;
