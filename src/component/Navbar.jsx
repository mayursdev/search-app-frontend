import React, { useEffect, useState } from "react";
import { debounce } from "../utils";
import SearchSvg from "./svg/SearchSvg";

// to prevent excess api calls
const debouncedSearch = debounce(500, (searchTerm) => {
  // make fetch ads api call here
  console.log(searchTerm);
});

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm !== "") debouncedSearch(searchTerm);
  }, [searchTerm]);

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="p-4 flex justify-center border-b">
      <div className="container mx-auto">
        <div className="search-input-container w-full flex items-center relative">
          <SearchSvg />
          <input
            type="text"
            className="search-input rounded py-2 px-4 pl-9 border border-slate-400 w-full placeholder:text-sm outline-none focus:bg-slate-100 focus:border-slate-900 hover:border-slate-900"
            placeholder="Start typing here to search.."
            value={searchTerm}
            onChange={(e) => handleSearchInputChange(e)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
