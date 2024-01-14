import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { IoIosCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Flag from "react-world-flags";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";
import InstaCartLogoLg from "../../assets/instacart-logo-lg.webp";
import "../home-main-menu/style/accountSignUpWindow.css";
import "../home-main-menu/style/homeMainMenu.css";
import "../../App.css";
import { useState, ReactElement } from "react";

type CountrySelectionOptionsType = {
	flag: string;
	name: string;
};

type NavListType = {
	label: string;
	dropDownItems: string[];
};

type SignUpOptionsType = {
	icon: ReactElement;
	title: string;
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

function SelectedMenuItemList({ menuItems, isMenuItemsListOpen, setIsMenuItemsListOpen }: { menuItems: NavListType | null; isMenuItemsListOpen: Boolean; setIsMenuItemsListOpen: (val: boolean) => void }) {
	return (
		<>
			{isMenuItemsListOpen && (
				<div className="nav-menu-dropdown-container">
					<button onClick={() => setIsMenuItemsListOpen(false)}>
						<IoChevronBack size={".7rem"} color={"#C7C8CD"} />
						<h5>Back to main menu</h5>
					</button>
					<ul>
						{menuItems !== null &&
							menuItems.dropDownItems.map((navItem: string) => {
								return (
									<li key={navItem}>
										<a className="dropdown-menu-item-link">
											<span>{navItem}</span>
										</a>
									</li>
								);
							})}
					</ul>
				</div>
			)}
		</>
	);
}

function AccountSignUpWindow({ signUpOptions }: { signUpOptions: SignUpOptionsType[] }) {
	return (
		<div className="sign-in-container">
			<div className="sign-in-container-header">
				<IoClose size="1.4rem" color={"#343538"} />
				<h2>Sign up</h2>
			</div>
			<div className="sign-in-options-and-input-wrapper">
				<div className="sign-in-options-container">
					{signUpOptions.map(option => {
						return (
							<button>
								<div className="sign-in-option-icons">{option.icon}</div>
								<span>{option.title}</span>
							</button>
						);
					})}
				</div>
				<div className="personal-sign-up-input-container">
					<div className="sign-in-options-input-divider">or</div>
					<p className="sign-in-prompt-msg">Enter your email to get started</p>
					<div className="email-or-input-container">
						<input required type="text" name="email" />
						<label className="sign-up-email-or-input-label" htmlFor="email">
							Email
						</label>
					</div>
					<p className="terms-and-conditions-signUp">
						By continuing, you agree to our
						<a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>.
					</p>
					<button className="signUp-continue-btn">
						<span>Continue</span>
					</button>
				</div>
			</div>
			<div className="signUp-log-in-container">
				<p>Already have an account?</p>
				<button>
					<span>Log in</span>
				</button>
			</div>
		</div>
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

	const signUpLogoIcons = {
		size: "1.6rem",
	};

	const signUpOptions: SignUpOptionsType[] = [
		{ icon: <FcGoogle size={signUpLogoIcons.size} />, title: "Continue with Google" },
		{ icon: <FaFacebook size={signUpLogoIcons.size} color={"#4267B2"} />, title: "Continue with Facebook" },
		{ icon: <BsFillTelephoneOutboundFill size={signUpLogoIcons.size} />, title: "Continue with Phone" },
	];

	const [isMenuItemsListOpen, setIsMenuItemsListOpen] = useState(false);

	const [isCloseCountryChoicePopupOpen, setIsCloseCountryChoicePopupOpen] = useState(false);

	const [chosenMenuNavItem, setChosenMenuNavItem] = useState<NavListType | null>(null);

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
					{navList.map(item => {
						return (
							<div key={item.label}>
								<button
									onClick={() => {
										setChosenMenuNavItem(item);
										setIsMenuItemsListOpen(true);
									}}
									className={`${chosenMenuNavItem?.label === item.label && `selected-menu-list-label`}`}>
									<span>{item.label}</span>
									<IoChevronForward size={".7rem"} color={"#C7C8CD"} />
								</button>
							</div>
						);
					})}
				</div>
				<SelectedMenuItemList menuItems={chosenMenuNavItem} isMenuItemsListOpen={isMenuItemsListOpen} setIsMenuItemsListOpen={setIsMenuItemsListOpen} />
				{/* country select */}
				<button key={countrySelected.name} onClick={() => setIsCloseCountryChoicePopupOpen(true)} className="menu-open-change-country-btn">
					<div className="nav-country">
						<Flag code={countrySelected.flag} />
						<span>{countrySelected.name}</span>
					</div>
					<span className="change-country">Change</span>
				</button>
				<ChangeCountryPopup isCloseCountryChoicePopupOpen={isCloseCountryChoicePopupOpen} setIsCloseCountryChoicePopupOpen={setIsCloseCountryChoicePopupOpen} countryOptions={countrySelection} countrySelected={countrySelected} setCountrySelected={setCountrySelected} />
				{/* <<<<<<<< SIGN IN POPUP >>>>>>> */}
				<AccountSignUpWindow signUpOptions={signUpOptions} />
			</div>
			{/* MENU OPEN OVERLAY */}
			{isMenuOpen && <div onClick={handleCloseNavMenu} className="nav-menu-open-overlay"></div>}
		</>
	);
}

export default HomeMainMenu;
