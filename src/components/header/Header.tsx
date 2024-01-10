import { RxHamburgerMenu } from "react-icons/rx";
import "../../App.css";
import "../header/header.css";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";

function Header() {
	return (
		<header className="header">
			<nav className="header-nav">
				<div className="nav-left">
					<button className="nav-menu-button">
						<RxHamburgerMenu size={"1.2rem"} />
					</button>
					<img className="nav-left-instacart-logo" src={InstaCartLogo} alt="Carrot" />
				</div>
				<div className="nav-right">
					<button>Log in</button>
					<button>Sign up</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
