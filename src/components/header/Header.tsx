import { RxHamburgerMenu } from "react-icons/rx";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";
import "../../App.css";
import "../header/header.css";
import HomeMainMenu from "../home-main-menu/HomeMainMenu";

function Header({ handleCloseMainMenu, isMenuOpen }: { handleCloseNavMenu?: () => void | undefined; isMenuOpen?: boolean }) {
	return (
		<>
			<header className="header">
				<nav className="header-nav">
					<div className="nav-left">
						<button onClick={handleCloseMainMenu} className="nav-menu-button">
							<RxHamburgerMenu size="1.2rem" />
						</button>
						<img className="nav-left-instacart-logo" src={InstaCartLogo} alt="Carrot" />
					</div>
					<div className="nav-right">
						<button>Log in</button>
						<button>Sign up</button>
					</div>
				</nav>
			</header>
			{isMenuOpen && <HomeMainMenu handleCloseNavMenu={handleCloseMainMenu} isMenuOpen={isMenuOpen} />}
		</>
	);
}

export default Header;
