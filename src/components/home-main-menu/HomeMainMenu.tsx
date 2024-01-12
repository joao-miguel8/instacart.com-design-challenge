import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import Flag from "react-world-flags";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";
import InstaCartLogoLg from "../../assets/instacart-logo-lg.webp";
import "./homeMainMenu.css";
import "../../App.css";
import { useState } from "react";

type CountrySelectionOptionsType = {
	flag: string;
	name: string;
};

type NavListType = {
	label: string;
	dropDownItems: string[];
};

function ChangeCountryPopup({
	isCloseCountryChoicePopupOpen,
	setIsCloseCountryChoicePopupOpen,
	countryOptions,
	countrySelected,
	setCountrySelected,
}: {
	isCloseCountryChoicePopupOpen: boolean;
	setIsCloseCountryChoicePopupOpen: (val: boolean) => void;
	countryOptions: CountrySelectionOptionsType[];
	countrySelected: CountrySelectionOptionsType;
	setCountrySelected: (chosenCountry: CountrySelectionOptionsType) => void;
}) {
	const handleCountryChoice = (chosenCountry: CountrySelectionOptionsType) => {
		setCountrySelected(chosenCountry);
		setIsCloseCountryChoicePopupOpen(false);
	};

	return (
		<>
			{isCloseCountryChoicePopupOpen && (
				<div>
					<div onClick={() => setIsCloseCountryChoicePopupOpen(false)} className="change-country-overlay"></div>
					<div className="change-country-popup">
						<div className="change-country-pop-btn-container">
							{countryOptions.map(country => {
								const unselectedCountry = countrySelected.name !== country.name;
								const selectedCountry = countrySelected.name === country.name;
								return (
									<button onClick={() => handleCountryChoice(country)} className="change-country-pop-btn">
										<div>
											<Flag code={country.flag} />
											<span className={`${unselectedCountry && "unselected-country-text-style"}`}>{country.name}</span>
										</div>
										{selectedCountry && <IoIosCheckmark size={"1.4rem"} color={"green"} />}
									</button>
								);
							})}
						</div>
						<div onClick={() => setIsCloseCountryChoicePopupOpen(false)} className="close-country-pop-up-btn-wrapper">
							<button>
								<span>Close</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

function SelectedMenuItemList({ menuItems, isMenuItemsListOpen, setIsMenuItemsListOpen }: { menuItems: string[]; isMenuItemsListOpen: Boolean; setIsMenuItemsListOpen: (val: boolean) => void }) {
	return (
		<>
			{isMenuItemsListOpen && (
				<div className="nav-menu-dropdown-container">
					<button onClick={() => setIsMenuItemsListOpen(false)}>
						<IoChevronBack size={".7rem"} color={"#C7C8CD"} />
						<h5>Back to main menu</h5>
					</button>
					<ul>
						{menuItems.map((navItem: NavListType) => {
							return (
								<li>
									<button className="dropdown-menu-item-btn">
										<span>{navItem}</span>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</>
	);
}

function HomeMainMenu({ handleCloseNavMenu, isMenuOpen }: { handleCloseNavMenu: () => void; isMenuOpen: boolean }) {
	const navList: NavListType[] = [
		{ label: "Departments", dropDownItems: ["Food", "Pantry", "Seafood", "Baked goods", "Dairy", "Fresh produce", "Deli"] },
		{ label: "More ways to shop", dropDownItems: ["Shop by location", "Shop online Deals", "Send Gifts", "Alcohol", "Convenience"] },
		{ label: "Help", dropDownItems: ["Contact", "Press", "Blog", "Help", "Careers", "Privacy", "Terms"] },
	];

	const countrySelection: CountrySelectionOptionsType[] = [
		{ flag: "US", name: "United States" },
		{ flag: "CA", name: "Canada" },
	];

	const [isMenuItemsListOpen, setIsMenuItemsListOpen] = useState(false);

	const [isCloseCountryChoicePopupOpen, setIsCloseCountryChoicePopupOpen] = useState(false);

	const [selectedMenuItemList, setSelectedMenuItemList] = useState<string[]>([]);

	const [countrySelected, setCountrySelected] = useState(countrySelection[0]);

	return (
		<>
			<div className="menu-container">
				<header className="menu-open-header">
					<nav className="menu-open-header-nav">
						<div className="nav-menu-open-left">
							<button onClick={handleCloseNavMenu} className="nav-close-menu-button">
								<IoClose size="1.6rem" />
							</button>
							<a href="#" className="nav-menu-open-left-instacart-logo">
								<img src={InstaCartLogo} alt="instacart logo" />
							</a>
							<a href="#" className="nav-menu-open-instacart-lg-logo">
								<img src={InstaCartLogoLg} alt="instacart logo" />
							</a>
						</div>
						<div className="nav-right-menu-open">
							<button>Log in</button>
							<button>Sign up</button>
						</div>
					</nav>
				</header>
				<div className="menu-list">
					{navList.map((item: NavListType) => {
						return (
							<div>
								<button
									onClick={() => {
										setSelectedMenuItemList(item.dropDownItems);
										setIsMenuItemsListOpen(true);
									}}
									key={item.label}>
									<span>{item.label}</span>
									<IoChevronForward size={".7rem"} color={"#C7C8CD"} />
								</button>
							</div>
						);
					})}
				</div>
				<SelectedMenuItemList menuItems={selectedMenuItemList} isMenuItemsListOpen={isMenuItemsListOpen} setIsMenuItemsListOpen={setIsMenuItemsListOpen} />
				{/* country select */}
				<button key={countrySelected.name} onClick={() => setIsCloseCountryChoicePopupOpen(true)} className="menu-open-change-country-btn">
					<div className="nav-country">
						<Flag code={countrySelected.flag} />
						<span>{countrySelected.name}</span>
					</div>
					<span className="change-country">Change</span>
				</button>
				<ChangeCountryPopup isCloseCountryChoicePopupOpen={isCloseCountryChoicePopupOpen} setIsCloseCountryChoicePopupOpen={setIsCloseCountryChoicePopupOpen} countryOptions={countrySelection} countrySelected={countrySelected} setCountrySelected={setCountrySelected} />
			</div>
			{/* MENU OPEN OVERLAY */}
			{isMenuOpen && <div onClick={handleCloseNavMenu} className="nav-menu-open-overlay"></div>}
		</>
	);
}

export default HomeMainMenu;
