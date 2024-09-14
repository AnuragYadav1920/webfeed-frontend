import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Carousal from '../../components/Banner/Carousal.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import BlogCard from '../../components/BlogCard/BlogCard.jsx';
import HomeBlogContainer from '../../components/BlogContainer/HomeBlogContainer.jsx';

const HomeBlogPage = () => {
  return (
    <>
     <div className='home-blogs-page'>
        <div>
          <Carousal/>
        </div>
        <div>
          <HomeBlogContainer/>
        </div>
    </div>
     
  </>

  )
}

export default HomeBlogPage