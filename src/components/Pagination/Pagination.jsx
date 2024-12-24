import React, { useEffect, useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import "./pagination.css";

const Pagination = ({changePage, totalPages}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    changePage(page)
  }, [page]);

  return (
    <>
      <div className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination">
        <div className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box">
          <div
            className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
            onClick={page > 1 ?() => setPage(page - 1): ()=>setPage(1)}
            style={page === 1 ? {opacity:0.3} : {opacity:1}}
          >
            <CiCircleChevLeft />
          </div>
          <div className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-curr-page">
            {page}
          </div>
          <div
            className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
            onClick={page < totalPages ?() => setPage(page + 1): ()=>setPage(totalPages)}
            style={page === totalPages ? {opacity:0.3} : {opacity:1}}
          >
            <CiCircleChevRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
