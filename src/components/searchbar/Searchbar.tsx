import { useRef, useState } from "react";
import "./style/searchbar.css";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import eggThumbNailImg from "../../assets/eggs-thumbnail-img.jpeg";

const popularSearchesData = [
	{ itemName: "egg", img: eggThumbNailImg },
	{ itemName: "egg", img: eggThumbNailImg },
	{ itemName: "egg eggs and eggs", img: eggThumbNailImg },
	{ itemName: "egg", img: eggThumbNailImg },
	{ itemName: "egg", img: eggThumbNailImg },
	{ itemName: "egg", img: eggThumbNailImg },
	{ itemName: "egg", img: eggThumbNailImg },
];

function Searchbar() {
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSearchReset = () => {
		setSearchQuery("");
		if (inputRef.current !== null) {
			inputRef.current.focus();
		}
	};

	return (
		<>
			<div className="search-bar-container">
				<BiSearch size={"1.6rem"} />
				<input ref={inputRef} onBlur={() => setIsSearchFocused(false)} onFocus={() => setIsSearchFocused(true)} onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search products and stores" type="text" />
				{searchQuery && (
					<button onClick={() => handleSearchReset()} className="clear-search-btn">
						<IoMdClose size={"1.6rem"} />
					</button>
				)}
				{/* ------ SEARCH LIST CONTAINER ---------- */}
				{isSearchFocused && !searchQuery ? (
					<div className="popular-searches-list-wrapper">
						<h4>Popular Searches</h4>
						<div className="popular-searches-list-container">
							<ul>
								{popularSearchesData.map(item => {
									return (
										<li className="popular-search-list-item">
											<a>
												<img src={item.img} alt="img" />
												<span>{item.itemName}</span>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				) : (
					<div className="search-list-container"></div>
				)}
			</div>
		</>
	);
}

export default Searchbar;
