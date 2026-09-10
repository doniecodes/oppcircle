import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Icons from "../components/Icons";
import Opportunities from "./opportunities/Opportunities";
import OpportunityHome from "../components/OpportunityHome";

import { FaSearch } from "react-icons/fa";
import HeroImage from "../images/hero3.png";

const Home = () => {
  
  //states
  const [ term, setTerm ] = useState("");
  
  const handleSearch = async (e)=> {
    e.preventDefault();
    console.log(term);
  }
  
  return (
    <>
    <section className="hero">
      <div className="hero-content-wrapper">
        
        <div className="hero-text-wrapper">
          <h1 className="heading">
            Discover real <strong> opportunities</strong> for your tomorrow.
          </h1>
          <p className="text">
            Connecting students and young people with internships, jobs, graduate programmes, bursaries, scholarships, learnerships and more - all in one place.
          </p>
          <form className="hero-form"
          onSubmit={handleSearch}>
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
        </div>
          
      </div>
    </section>
    
    <div className="container">
      <Icons />
    </div>
    
    <div className="container">
    <section className="featured-section">
      <div className="heading2-wrapper">
        <h2 className="heading2">
        Featured Opportunities
        </h2>
        <Link className="view-all-btn"
        to="/opportunities">
          View all
        </Link>
      </div>
      <div className="featured-opportunities">
        <OpportunityHome />
        <OpportunityHome />
        <OpportunityHome />
        <OpportunityHome />
        <OpportunityHome />
      </div>
    </section>
    </div>
    
    </>
  )
}

export default Home