import "./style/becomeAShopperServicesList.css";

import { becomeAShopperServicesData } from "./becomeAShopperServicesData";

function BecomeAShopperServicesList() {
	return (
		<div className="become-a-shopper-wrapper">
			{becomeAShopperServicesData.map(list => {
				return (
					<div className="become-a-shopper-container">
						<h3>{list.title}</h3>
						<ul className="become-a-shopper-list">
							{list.links.map(item => {
								return (
									<li key={item.title}>
										<a href={item.url}>{item.title}</a>
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
}

export default BecomeAShopperServicesList;
