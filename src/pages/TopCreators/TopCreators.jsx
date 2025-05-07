// TopCreatorsPage.js
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './topcreators.css';

const creators = [
    {
      id: 1,
      name: 'MrBeast',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2khex_SbvLiPN9ql0GClkY16Z5xfnZI16xg&s',
      subscribers: 387000000,
    },
    {
      id: 2,
      name: 'T-Series',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaGaqWZKn1C9ZyOLUI1NSOe7sjvAi7R1M1A&s',
      subscribers: 292000000,
    },
    
  ];

const TopCreatorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const creatorsPerPage = 10;

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredCreators.length / creatorsPerPage);
  const offset = currentPage * creatorsPerPage;
  const currentCreators = filteredCreators.slice(offset, offset + creatorsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="top-creators-page">
      <h1>Top Creators</h1>
      <input
        type="text"
        placeholder="Search creators..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="top-creators-search-input"
      />
      <div className="creators-list">
        {currentCreators.map((creator, index) => (
          <div key={creator.id} className="creator-card">
            <img src={creator.avatar} alt={creator.name} className="creator-avatar" />
            <div className="creator-info-box">
              <h2>{creator.name}</h2>
              <p>{creator.subscribers.toLocaleString()} subscribers</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default TopCreatorsPage;
