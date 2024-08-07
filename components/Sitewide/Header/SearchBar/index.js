// components/SearchBar.js

import React, { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // Pass the search term to the parent component or perform search logic here
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{
          color: "black",
          border: "1px solid black",
          marginLeft: "10px",
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
