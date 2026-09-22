import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import ArrowRight from '../../images/icons/arrow-right.svg';
import TimeIcon from '../../images/icons/time.png';
import LocationIcon from '../../images/icons/location.png';
import NameIcon from '../../images/icons/name.png';
import Discovery from '../../images/icons/discovery.jpg';
import PinIcon from '../../images/icons/pin.png';

const OpportunityInfo = ({opportunity}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  //states
  const [ saved, setSaved ] = useState(false);
  
  const formattedDate = new Date(opportunity.closing_date).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })
  
  let formattedType;
  switch(opportunity.type){
    case "graduate_programme":
      formattedType = "Graduate Programme"
      break;
      default:
      formattedType = opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1);
  }
  
  //handle save
  const handleSave = ()=> {
    setSaved((prev)=> !prev);
  }
  
  return (
    <>
      
      <div className="container">
        
        <Link to=".."
        relative="path"
        className="back-btn">
          <img src={ArrowRight} />
          Back to opportunities
        </Link>
        
          <div className="details-info-container">
            <div className="details-company-info">
              <img
              src={opportunity.logo_url}
              className="details-company-logo"
              />
              <h2 className="details-company-name">
                {opportunity.name}
              </h2>
            </div>
            
            <h2 className="details-opportunity-title">
              {opportunity.title}
            </h2>
            
            <div className="details-opportunity-info">
              <div className="details-opportunity-chips">
                <p className={`opportunity-type ${opportunity.type}`}>{formattedType}</p>
                <p className="details-work-mode">{opportunity.work_mode}</p>
              </div>
              
              <div className="details-opportunity-info-divs">
                <div className="details-company-name">
          <img src={NameIcon} />
          <p>{opportunity.name}</p>
        </div>
        <div className="details-company-location">
          <img src={LocationIcon} />
          <p>{`${opportunity.city}, ${opportunity.province}`}</p>
        </div>
        <div className="details-company-location-type">
          <img src={PinIcon} />
          <p>Mode: <span>{opportunity.work_mode}</span></p>
        </div>
        <div className="details-closing-date">
          <img src={TimeIcon} />
          <p>Deadline: <span>{formattedDate}</span></p>
        </div>
              </div>
            </div>
            
          </div>
          
          {/*Action Buttons*/}
          <div className="action-buttons">
            <a
            className="apply-btn"
            href={opportunity.application_url}
            target="_blank"
            rel="noopener noreferrer">
              Apply Now
              <img src={ArrowRight} />
            </a>
            <button
            className="save-btn"
            onClick = {handleSave}>
              { saved ? "♡ Saved" : "♡ Save" }
            </button>
          </div>
          
          <div className="details-navbar">
            <NavLink to="."
            end
            className={({isActive})=> isActive ? "details-nav-link active" : "details-nav-link"} >
              Overview
            </NavLink>
            <NavLink
            to="company"
            className={({isActive})=> isActive ? "details-nav-link active" : "details-nav-link"} >
              Company
            </NavLink>
          </div>
          
      </div>
    </>
  )
}

export default OpportunityInfo