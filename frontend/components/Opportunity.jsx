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


const Opportunity = ({id, title, icon, location}) => {
  return (
    <>
    <Link to={`/opportunities/${id}`}
    className="opportunity">
      
      <div className="opportunity-header">
        <img src={Discovery}
        className="company-icon" />
        <p className="opportunity-type internship">
          Internship
        </p>
      </div>
      
      <h3 className="opportunity-title">
        Software Development Internship
      </h3>
      
      <div className="opportunity-info">
        <div className="company-name">
          <img src={NameIcon} />
          <p>Discovery Bank</p>
        </div>
        <div className="company-location">
          <img src={LocationIcon} />
          <p>Cape Town, WC</p>
        </div>
        {/*div className="company-location-type">
          <img src={PinIcon} />
          <p>Mode: <span>Hybrid</span></p>
        </div>*/}
        <div className="closing-date">
          <img src={TimeIcon} />
          <p>Deadline: <span>15 Oct 2026</span></p>
        </div>
      </div>
      
      <span className="arrow-btn"
      to={`/opportunities/${id}`}>
        <img src={ArrowWhite} />
      </span>
      
    </Link>
    </>
  )
}

export default Opportunity