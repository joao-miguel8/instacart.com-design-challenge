import { useRef, useState } from "react";
import "./style/searchbar.css";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import milkThumbNailImg from "../../assets/milk-thumbnail-img.jpg";
import cheeseThumbNailImg from "../../assets/cheese-thumbnail-img.jpg";
import orangeThumbNailImg from "../../assets/orange-thumbnail-img.jpg";
import eggThumbNailImg from "../../assets/eggs-thumbnail-img.jpeg";
import kiwiThumbNailImg from "../../assets/kiwi-tumbnail-img.jpg";
import watermelonThumbNailImg from "../../assets/watermelon-thumbnail-img.jpg";

const popularSearchesData = [
	{ itemName: "fresh kiwi", img: kiwiThumbNailImg },
	{ itemName: "eggs", img: eggThumbNailImg },
	{ itemName: "oranges", img: orangeThumbNailImg },
	{ itemName: "watermelons", img: watermelonThumbNailImg },
	{ itemName: "milk", img: milkThumbNailImg },
	{ itemName: "cheese", img: cheeseThumbNailImg },
];

const searchQueries = [
	{
		category: "dairy",
		queries: [
			{ query: "cheese", url: cheeseThumbNailImg },
			{ query: "eggs", url: eggThumbNailImg },
			{ query: "milk", url: milkThumbNailImg },
		],
	},
	{
		category: "fruits",
		queries: [
			{ query: "oranges", url: orangeThumbNailImg },
			{ query: "kiwi", url: kiwiThumbNailImg },
			{ query: "watermelon", url: watermelonThumbNailImg },
		],
	},
];

function Searchbar() {
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [filteredSearchList, setFilteredSearchList] = useState(searchQueries);

	const handleSearchReset = () => {
		setSearchQuery("");
		if (inputRef.current !== null) {
			inputRef.current.focus();
		}
	};

	const queryList = filteredSearchList
		.flatMap(item => {
			return item.queries;
		})
		.sort();

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
				{isSearchFocused && !searchQuery && (
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
				)}
				{isSearchFocused && searchQuery && (
					<div className="search-list-container">
						<ul>
							{queryList
								.filter(item => item.query.toLowerCase().includes(searchQuery.toLowerCase()))
								.map(filteredQuery => {
									console.log(filteredQuery);
									return (
										<li className="search-list-item" key={filteredQuery.query}>
											<a href="#">
												<img src={filteredQuery.url} alt="" />
												<span>{filteredQuery.query}</span>
											</a>
										</li>
									);
								})}
						</ul>
					</div>
				)}
			</div>
		</>
	);
}

export default Searchbar;
