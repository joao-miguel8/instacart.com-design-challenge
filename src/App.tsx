import Flag from "react-world-flags";
import { IoChevronForward } from "react-icons/io5";
import "./App.css";
import Header from "./components/header/Header";
import "./styling/nav.css";
function App() {
	const navList = [{ label: "Departments" }, { label: "More ways to shop" }, { label: "Help" }];

	return (
		<>
			<Header />
			<div className="nav-menu-container">
				<Header />
				<div className="nav">
					<div className="nav-list">
						{navList.map(item => (
							<button key={item.label}>
								<span>{item.label}</span>
								<IoChevronForward size={".7rem"} color={"#C7C8CD"} />
							</button>
						))}
					</div>
					{/* country select */}
					<button className="nav-change-country-btn">
						<div className="nav-country">
							<Flag code={"US"} />
							<span>United States</span>
						</div>
						<span className="change-country">Change</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
