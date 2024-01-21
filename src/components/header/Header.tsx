import { RxHamburgerMenu } from "react-icons/rx";
import "../../App.css";
import "../header/header.css";
import InstaCartLogo from "../../assets/nav-carrot-logo.webp";
import InstaCartLogoLg from "../../assets/instacart-logo-lg.webp";
import HomeMainMenu from "../home-main-menu/HomeMainMenu";
import type { LoginSignUpStatusType } from "../account-signup-window/types/LoginSignUpStatusType";
import Searchbar from "../searchbar/Searchbar";

function Header({ handleCloseMainMenu, isMenuOpen, loginSignUpStatus, setLoginSignUpStatus }: { handleCloseMainMenu?: () => void | undefined; isMenuOpen?: boolean; loginSignUpStatus: LoginSignUpStatusType; setLoginSignUpStatus: (status: LoginSignUpStatusType) => void }) {
	return (
		<>
			<header className="header">
				<nav className="header-nav">
					<div className="nav-left">
						<button onClick={handleCloseMainMenu} className="nav-menu-button">
							<RxHamburgerMenu size="1.2rem" />
						</button>
						{/* small instacart logo  */}
						<a href="#" className="nav-left-instacart-logo">
							<img src={InstaCartLogo} alt="Carrot" />
						</a>
						{/* large instacart logo  */}
						<a href="#" className="nav-left-instacart-lg-logo">
							<div>
								<img src={InstaCartLogoLg} alt="instacart logo" />
							</div>
						</a>
					</div>
					<Searchbar />
					<div className="nav-right">
						<button onClick={() => setLoginSignUpStatus({ ...loginSignUpStatus, isSignUpEnabled: true })}>Log in</button>
						<button onClick={() => setLoginSignUpStatus({ ...loginSignUpStatus, isSignUpEnabled: true })}>Sign up</button>
					</div>
				</nav>
			</header>
			{isMenuOpen && <HomeMainMenu handleCloseNavMenu={handleCloseMainMenu} isMenuOpen={isMenuOpen} loginSignUpStatus={loginSignUpStatus} setLoginSignUpStatus={setLoginSignUpStatus} />}
		</>
	);
}

export default Header;
