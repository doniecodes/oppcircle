import React from 'react';
import { Link } from "react-router-dom";

import BuildingIcon from "../../images/icons/building2.png";
import ArrowRight from "../../images/icons/arrow-right.svg";

const CompanyProfile = () => {
  return (
    <>
      <div className="container2">
        
        <Link to=".."
        relative="path"
        className="back-btn company-profile">
          <img src={ArrowRight} />
          Back to opportunities
        </Link>
        
        <div className="company-profile-header">
          <div className="company-profile-heading-wrapper">
            <img src={BuildingIcon} />
            <h2>
              Company Profile
              <p>
              Manage your company profile, this is what candidates will see when they visit your page.
              </p>
            </h2>
          </div>
        </div>
        
        <div className="company-profile-profile-card">
          
        </div>
        
      </div>
    </>
  )
}

export default CompanyProfile