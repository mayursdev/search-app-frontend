import React, { useEffect, useState } from "react";
import { debounce } from "../utils";

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
          <svg
            className="w-5 h-5 absolute left-2 stroke-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
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