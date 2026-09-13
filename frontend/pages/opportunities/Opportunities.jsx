import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData } from 'react-router-dom';
import Opportunity from "../../components/Opportunity";
import { FaSearch } from "react-icons/fa";
import OpportunitiesHook from "../../hooks/OpportunitiesHook";
import { getOpportunities } from "../../services/opportunitiesApi";

export const loader = async ({request})=> {
  const data = await getOpportunities();
  return data;
}

const Opportunities = ({isHome}) => {
  
  //states
  const [ term, setTerm ] = useState("");
  const [ searchParams, setSearchParams ] = useSearchParams();
  
  const typeFilter = searchParams.get("type");
  
  //loader data
  const data = useLoaderData();
  const opportunities = data?.opportunities;
  //opportunities to display
  //const filteredOpportunities = typeFilter !== null && 
  
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
        placeholder="Search for opportunities..."
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
        <button onClick={()=> handleFilterChange('type', null)}
        className={`chip null`}>Clear Filters
        </button>
      </div>
      
      <section className="opportunities-section">
        <div className="opportunities">
          {opportunities.length > 0 && opportunities.map((x)=> (
            <Opportunity
            key={x.id}
            opportunity={x}
            />
          ))
          }
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default Opportunities