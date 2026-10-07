import React from 'react';
import { Link, useSearchParams } from "react-router-dom";

//icons
import ArrowWhite from '../images/icons/arrow-right-white.svg';
import ArrowRight from '../images/icons/arrow-right.svg';
import TimeIcon from '../images/icons/time.png';
import LocationIcon from '../images/icons/location.png';
import NameIcon from '../images/icons/name.png';
import Discovery from '../images/icons/discovery.jpg';
import PinIcon from '../images/icons/pin.png';
import NoImageCircle from '../images/no-image-circle.png';


const CompanyProfileOpportunity = ({opportunity}) => {

  //date
  const formattedDate = new Date(opportunity.closing_date)
  .toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  
  //type
  let formattedType;
  switch(opportunity.type){
    case "graduate_programme":
      formattedType = "Graduate Programme"
      break;
      default:
      formattedType = opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1);
  }
  
  const logoImage = opportunity.logo_url ? opportunity.logo_url : NoImageCircle;
  
  
  return (
    <>
    <Link
    to={`/opportunities/${opportunity.id}?backTo=company-profile`}
    className="opportunity">
      
      <div className="opportunity-header">
        <img src={logoImage}
        className={`company-icon ${!opportunity.logo_url && "no-logo"}`} />
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
          <p>{opportunity.company_name}</p>
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

export default CompanyProfileOpportunity