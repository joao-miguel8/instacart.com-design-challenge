import { useRef, useState } from "react";
import "./style/searchbar.css";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

function Searchbar() {
	const [searchQuery, setSearchQuery] = useState("");
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSearchReset = () => {
		setSearchQuery("");
		if (inputRef.current !== null) {
			inputRef.current.focus();
		}
	};

	return (
		<div className="search-bar-container">
			<BiSearch size={"1.6rem"} />
			<input ref={inputRef} onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search products and stores" type="text" />
			{searchQuery && (
				<button onClick={() => handleSearchReset()} className="clear-search-btn">
					<IoMdClose size={"1.6rem"} />
				</button>
			)}
		</div>
	);
}

export default Searchbar;
