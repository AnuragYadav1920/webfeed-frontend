import React, { useState} from "react";
import components from "../../../exports/components"
import "./search.css";

const Search = ({closeComponent}) => {
  const [query, setQuery] = useState("");
  const [creators, setCreators] = useState(null)
  const handleSearch = async() => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/search-creators`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "query":query
        })
      })
      if(response.ok){
        const data = await response.json();
        console.log(data)
        setCreators(data.creators)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search creators here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button" onClick={handleSearch}  >
            Search
          </button>
        </div>
        <main className="creators">
            {
              creators?.map((creator, index)=>(
                <components.ChannelCard creator={creator} key={index} closeComponent={closeComponent}/>
              ))
            }
        </main>
      </div>
    </>
  );
};

export default Search;
