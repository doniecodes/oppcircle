import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Opportunity from "../../components/Opportunity";
import { FaSearch } from "react-icons/fa";


const Opportunities = ({isHome}) => {
  
  //states
  const [ term, setTerm ] = useState("");
  const [ searchParams, setSearchParams ] = useSearchParams();
  
  const typeFilter = searchParams.get("type");
  
  //handle filter change
  const handleFilterChange = (key, value)=> {
    setSearchParams(prevParams=> {
      if(value === null || value === "All"){
        prevParams.delete(key);
      } else {
        prevParams.set(key, value)
      }
      return prevParams;
    })
  }
  
  const handleSearch = async (e)=> {
    e.preventDefault();
    console.log(term);
  }
  
  return (
    <div className="container">
      
      <div className="opportunities-layout">
      
      <form onSubmit={handleSearch}
      className="search-form">
        <FaSearch className="icon" />
        <input
        type="text"
        placeholder="Search for internships, jobs, scholarships..."
        value={term}
        onChange={(e)=> setTerm(e.target.value)}
        />
        <button className="btn-search">
          Search
        </button>
      </form>
      
      <div className="opportunities-chips">
        <button onClick={()=> handleFilterChange('type','All')}
        className={`chip ${typeFilter === null && 'selected'}`}>All
        </button>
        <button onClick={()=> handleFilterChange('type','internships')}
        className={`chip ${typeFilter === 'internships' && 'selected'}`}>Internships
        </button>
        <button onClick={()=> handleFilterChange('type','jobs')}
        className={`chip ${typeFilter === 'jobs' && 'selected'}`}>Jobs
        </button>
        <button onClick={()=> handleFilterChange('type','graduate_programmes')}
        className={`chip graduate ${typeFilter === 'graduate_programmes' && 'selected'}`}>Graduate Programmes
        </button>
        <button onClick={()=> handleFilterChange('type','bursaries')}
        className={`chip ${typeFilter === 'bursaries' && 'selected'}`}>Bursaries
        </button>
        <button onClick={()=> handleFilterChange('type','scholarships')}
        className={`chip ${typeFilter === 'scholarships' && 'selected'}`}>Scholarships
        </button>
        <button onClick={()=> handleFilterChange('type','learnerships')}
        className={`chip ${typeFilter === 'learnerships' && 'selected'}`}>Learnerships
        </button>
      </div>
      
      <section className="opportunities-section">
        <div className="opportunities">
          <Opportunity />
          <Opportunity />
          <Opportunity />
          <Opportunity />
          <Opportunity />
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default Opportunities