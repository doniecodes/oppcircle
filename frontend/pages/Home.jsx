import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import Icons from "../components/Icons";
import Opportunities from "./opportunities/Opportunities";
import OpportunityFeatured from "../components/OpportunityFeatured";

import { FaSearch } from "react-icons/fa";
import HeroImage from "../images/hero3.png";

import { getOpportunitiesFeatured } from "../services/opportunitiesApi";


export const loader = async ()=> {
  const data = await getOpportunitiesFeatured();
  return data;
}

const Home = () => {
  
  //states
  const [ term, setTerm ] = useState("");
  
  //opportunities
  const data = useLoaderData();
  const opportunities = data?.opportunities;
  
  const handleSearch = async (e)=> {
    e.preventDefault();
    console.log(term);
  }
  
  return (
    <>
    <section className="hero">
    <div className="hero-img"></div>
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
            placeholder="Search for opportunities..."
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
        {opportunities.length > 0 && opportunities.map((x)=> (
        <OpportunityFeatured
        key={x.id}
        opportunity={x}
        />
        ))}
      </div>
    </section>
    </div>
    
    </>
  )
}

export default Home