import React, { useState, useEffect, useRef } from "react";
import "./search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <div className="search-container">
        <form
          className="search"
          onSubmit={handleSubmit}  
        >
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
