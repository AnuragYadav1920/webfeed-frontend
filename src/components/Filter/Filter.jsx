import React, { useState } from "react";
import './filter.css'
import {FaSearch} from "react-icons/fa"

const Filter = ({filterChange}) => {
    const handleChange = (event)=>{
        filterChange(event.target.value)
    }
  return (
    <>
      <div>
        <div className="filter-container">
          <div className="filter-container-left">
            <div className="filter-container-left-search-icon-box">
              <FaSearch className="filter-container-left-search-icon" />
            </div>
            <div className="filter-container-left-search-input-box">
              <input
                type="text"
                className="filter-container-left-search-input"
                placeholder="filter the blogs"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
