import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Carousal from '../../components/Banner/Carousal.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import BlogCard from '../../components/BlogCard/BlogCard.jsx';

const HomeBlogPage = () => {
  return (
    <>
     <div className='home-blogs-page'>
        <div>
          <Carousal/>
        </div>
        <div className='home-blogs-page-search-blogs-and-filter'>
          <div className='home-blogs-page-search-blogs-and-filter-box'><Filter/></div>
          <div className='home-blogs-page-search-blogs-and-filter-all-blogs-box'>
            <div className='home-blogs-page-search-blogs-and-filter-all-blogs'>
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
                  <NavLink to="/blogs/blogId">
                    <BlogCard/>
                  </NavLink> 
            </div>
          </div>
          <div className='home-blogs-page-search-blogs-and-filter-all-blogs-pagination'>
                <div className='home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box'>
                    <div className='home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon'><CiCircleChevLeft/></div>
                    <div className='home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-curr-page'>1</div>
                    <div className='home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon'><CiCircleChevRight/></div>
                </div>
          </div>
      </div>
    </div>
     
  </>

  )
}

export default HomeBlogPage