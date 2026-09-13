import React from 'react';
import { Link } from "react-router-dom";
import ArrowWhite from '../images/icons/arrow-right-white.svg';

//icons
import ArrowRight from '../images/icons/arrow-right.svg';
import TimeIcon from '../images/icons/time.png';
import LocationIcon from '../images/icons/location.png';
import NameIcon from '../images/icons/name.png';
import Discovery from '../images/icons/discovery.jpg';
import PinIcon from '../images/icons/pin.png';


const Opportunity = ({opportunity}) => {
  
  //date
  const formattedDate = new Date(opportunity.closing_date)
  .toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  
  //type
  const formattedType =
  opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1);

  
  return (
    <>
    <Link to={`/opportunities/${opportunity.id}`}
    className="opportunity">
      
      <div className="opportunity-header">
        <img src={opportunity.logo_url}
        className="company-icon" />
        <p className={`opportunity-type ${opportunity.type}`}>
          {formattedType}
        </p>
      </div>
      
      <h3 className="opportunity-title">
        {opportunity.title}
      </h3>
      
      <div className="opportunity-info">
        <div className="company-name">
          <img src={NameIcon} />
          <p>{opportunity.name}</p>
        </div>
        <div className="company-location">
          <img src={LocationIcon} />
          <p>{`${opportunity.city}, ${opportunity.province}`}</p>
        </div>
        {/*div className="company-location-type">
          <img src={PinIcon} />
          <p>Mode: <span>Hybrid</span></p>
        </div>*/}
        <div className="closing-date">
          <img src={TimeIcon} />
          <p>Deadline: <span>{formattedDate}</span></p>
        </div>
      </div>
      
      <span className="arrow-btn"
      to={`/opportunities/${opportunity.id}`}>
        <img src={ArrowWhite} />
      </span>
      
    </Link>
    </>
  )
}

export default Opportunity