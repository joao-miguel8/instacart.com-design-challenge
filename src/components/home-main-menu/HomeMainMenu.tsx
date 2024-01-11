import { IoChevronForward, IoClose } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import Flag from "react-world-flags";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";
import "./homeMainMenu.css";
import "../../App.css";
import { useState } from "react";

type CountrySelectionOptionsType = {
	flag: string;
	name: string;
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
								const selectedCountry = countrySelected.name !== country.name;
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

function HomeMainMenu({ handleCloseNavMenu, isMenuOpen }: { handleCloseNavMenu: () => void; isMenuOpen: boolean }) {
	const navList = [{ label: "Departments" }, { label: "More ways to shop" }, { label: "Help" }];

	const [isCloseCountryChoicePopupOpen, setIsCloseCountryChoicePopupOpen] = useState(false);

	const countrySelection: CountrySelectionOptionsType[] = [
		{ flag: "US", name: "United States" },
		{ flag: "CA", name: "Canada" },
	];
	const [countrySelected, setCountrySelected] = useState(countrySelection[0]);

	return (
		<>
			<div className="menu-container">
				<header className="menu-open-header">
					<nav className="header-nav">
						<div className="nav-left">
							<button onClick={handleCloseNavMenu} className="nav-menu-button">
								<IoClose size="1.6rem" />
							</button>
							<a href="#">
								<img className="nav-left-instacart-logo" src={InstaCartLogo} alt="instacart logo" />
							</a>
						</div>
						<div className="nav-right">
							<button>Log in</button>
							<button>Sign up</button>
						</div>
					</nav>
				</header>
				<div className="menu-list">
					{navList.map(item => (
						<button key={item.label}>
							<span>{item.label}</span>
							<IoChevronForward size={".7rem"} color={"#C7C8CD"} />
						</button>
					))}
				</div>
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
		</>
	);
}

export default HomeMainMenu;
