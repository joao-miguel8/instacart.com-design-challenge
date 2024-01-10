import { IoChevronForward, IoClose } from "react-icons/io5";
import Flag from "react-world-flags";
import InstaCartLogo from "../../../assets/nav-carrot-logo.webp";
import "./homeMainMenu.css";
import "../../../App.css";

function HomeMainMenu({ handleCloseNavMenu, isMenuOpen }: { handleCloseNavMenu: () => void; isMenuOpen: boolean }) {
	const navList = [{ label: "Departments" }, { label: "More ways to shop" }, { label: "Help" }];
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
				<button className="menu-open-change-country-btn">
					<div className="nav-country">
						<Flag code={"US"} />
						<span>United States</span>
					</div>
					<span className="change-country">Change</span>
				</button>
			</div>
		</>
	);
}

export default HomeMainMenu;
