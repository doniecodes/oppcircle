import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLoaderData, useLocation } from 'react-router-dom';
import Opportunity from "../../components/Opportunity";
import { FaSearch } from "react-icons/fa";
import OpportunitiesHook from "../../hooks/OpportunitiesHook";
import { getOpportunities } from "../../services/opportunitiesApi";
import FiltersIcon from "../../images/icons/filter4.svg"

export const loader = async ({request})=> {
  const url = new URL(request.url);
  const search = url.searchParams.toString();
  const data = await getOpportunities(search);
  return data;
}

const Opportunities = () => {
  
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  //states
  const [ shown, setShown ] = useState(false);
  const [ term, setTerm ] = useState("");
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ mode, setMode ] = useState(null);
  const [ types, setTypes ] = useState([
    { key: "internship", active: false },
    { key: "job", active: false },
    { key: "graduate_programme", active: false },
    { key: "bursary", active: false },
    { key: "scholarship", active: false },
    { key: "learnership", active: false },
    { key: "fellowship", active: false },
    { key: "apprenticeship", active: false },
    { key: "competition", active: false },
    { key: "bootcamp", active: false },
    { key: "volunteering", active: false },
    { key: "other", active: false }
    ]);
  
  //type filter
  const typeFilter = searchParams.get("type");
  
  //loader data
  const data = useLoaderData();
  const opportunities = data.opportunities;
  
  //handle filter change
  const handleFilterChange = (key, value)=> {
    setSearchParams(prevParams => {
      if(value === null){
        prevParams.delete(key);
      } else {
        prevParams.set(key, value)
      }
      return prevParams;
    })
  }
  
  //handle search
  const handleSearch = async (e)=> {
    e.preventDefault();
    console.log(term);
  }
  
  //handle clear all
  const handleClearAll = ()=> {
    setSearchParams(prevParams => {
      prevParams.delete("type");
      prevParams.delete("mode");
    })
  }
  
  //handle checkbox
  const handleCheckbox = (value)=> {
    setTypes(prev =>
    prev.map(x =>
    x.key === value ? { ...x, active: !x.active }
    : x
    )
    )
  }
  
  //handle mode
  const handleMode = (key, value)=> {
    setSearchParams((prevParams)=> {
      if(value === null){
      prevParams.delete(key);
    } else {
      prevParams.set(key, value);
    }
    return prevParams;
    })
  }
  
  //active types
  const activeTypes = types.filter(x=> x.active).map(y=> y.key);
  
  //handle apply filters
  const handleApply = async (e)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    handleFilterChange("type", activeTypes);
    setShown(false);
  }
  
  console.log(mode);
  console.log(searchParams.get("mode"));
  
  
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
        <button onClick={()=> handleFilterChange('type', null)}
        className={`chip ${typeFilter === null && 'selected'}`}>All
        </button>
        <button onClick={()=> handleFilterChange('type','internship')}
        className={`chip ${typeFilter === 'internship' && 'selected'}`}>Internships
        </button>
        <button onClick={()=> handleFilterChange('type','job')}
        className={`chip ${typeFilter === 'job' && 'selected'}`}>Jobs
        </button>
        <button onClick={()=> handleFilterChange('type','graduate_programme')}
        className={`chip graduate ${typeFilter === 'graduate_programme' && 'selected'}`}>Graduate Programmes
        </button>
        <button onClick={()=> handleFilterChange('type','bursary')}
        className={`chip ${typeFilter === 'bursary' && 'selected'}`}>Bursaries
        </button>
        <button onClick={()=> handleFilterChange('type','scholarship')}
        className={`chip ${typeFilter === 'scholarship' && 'selected'}`}>Scholarships
        </button>
        <button onClick={()=> handleFilterChange('type','learnership')}
        className={`chip ${typeFilter === 'learnership' && 'selected'}`}>Learnerships
        </button>
        <button onClick={()=> handleFilterChange('type', null)}
        className={`chip null`}>Clear Filters
        </button>
      </div>
      
      {/*Show more filters button*/}
      <button
      onClick={()=> setShown(true)}
      className="more-filters-show-btn">
        <img src={FiltersIcon} />
        <span>More Filters</span>
      </button>
      
      {/*More Filters*/}
      { shown &&
      <div className="more-filters-container">
        <h2>More Filters <span onClick={()=> setShown(false)}>Cancel</span></h2>
        
        <form
        onSubmit={handleApply}
        className="more-filters-form">
          <div className="filter-group checkbox-group">
            <h3>Opportunity Type</h3>
            {types.map((x)=> (
            <label key={x.key}
            htmlFor={x.key}>
            <input
            type="checkbox"
            name="type"
            value={x.key}
            onChange={()=> handleCheckbox(x.key)}
            id={x.key}/>
              { x.key === "graduate_programme" ? "Graduate Programme" : x.key.charAt(0).toUpperCase() + x.key.slice(1)}
            </label>
            ))}
          </div>
          
          <div className="filter-group radio-group">
              <h3>Work Mode</h3>
              <label htmlFor="on-site">
                <input
                type="radio"
                id="on-site"
                name="work_mode"
                value="on_site"
                onChange={()=> handleMode("mode", "on_site")}
                />
                On-Site
              </label>
              <label htmlFor="remote">
                <input
                type="radio"
                id="remote"
                name="work_mode"
                value="remote"
                onChange={()=> handleMode("mode", "remote")}
                />
                Remote
              </label>
              <label htmlFor="hybrid">
                <input
                type="radio"
                id="hybrid"
                name="work_mode"
                value="hybrid"
                onChange={()=> handleMode("mode", "hybrid")}
                />
                Hybrid
              </label>
              <label htmlFor="any">
                <input
                type="radio"
                id="any"
                name="work_mode"
                value="any"
                onChange={()=> handleMode("mode", null)}
                />
                Any
              </label>
          </div>
          <div className="filter-group">
              <h3>Location</h3>
          
          </div>
          <div className="filter-group">
              <h3>Company</h3>
          
          </div>
          
          <div className="filters-form-btns">
          <button
          type="button"
          onClick={handleClearAll}
          className="clear-filters-btn">
            Clear Filters
          </button>
          <button className="apply-filters-btn">
            Apply Filters
          </button>
          </div>
        </form>
      </div>
      }
      
      <section className="opportunities-section">
        <div className="opportunities">
          {opportunities.length > 0 ? opportunities.map((x)=> (
            <Opportunity
            key={x.id}
            opportunity={x}
            />
          )) : null
          }
        </div>
      </section>
      
      </div>
    </div>
  )
}

export default Opportunities