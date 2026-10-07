import React, { useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";

import BuildingIcon from "../../images/icons/building2.png";
import ArrowRight from "../../images/icons/arrow-right.svg";
import NoImageCircle from '../../images/no-image-circle.png';
import IndustryIcon from '../../images/icons/circuit.svg';
import LocationIcon from '../../images/icons/location.png';
import CalenderIcon from '../../images/icons/calender.png';


const CompanyProfileInfo = ({company}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const logoImage = company.logo_url ? company.logo_url : NoImageCircle ;
  
  //formatted date
  const formattedDate = new Date(company.created_at).
  toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })
  
  return (
    <>
      <div className="container2">
        
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
          <img src={logoImage} className="company-profile-logo-image" />
          <div className="profile-card-content-wrapper">
              <h2>{company.company_name}</h2>
              <a href={company.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="company-profile-link">
                {company.website_url}
              </a>
              <div className="profile-card-chips">
                  <div className="profile-card-chip">
                    <span><img src={IndustryIcon} /> Industry</span>
                    <p className="profile-card-chip-name">
                      {company.industry}
                    </p>
                  </div>
                  <div className="profile-card-chip">
                    <span><img src={LocationIcon} /> City</span>
                    <p className="profile-card-chip-name">
                      {company.company_city ? company.company_city : "Unknown"}
                    </p>
                  </div>
                  <div className="profile-card-chip">
                    <span><img src={LocationIcon} /> Country</span>
                    <p className="profile-card-chip-name">
                      {company.company_country}
                    </p>
                  </div>
                  <div className="profile-card-chip">
                    <span><img src={CalenderIcon} /> Joined OppCircle</span>
                    <p className="profile-card-chip-name">
                      {formattedDate}
                    </p>
                  </div>
              </div>
          </div>
          <Link to="edit" className="edit-profile-btn">
            Edit Profile
          </Link>
        </div>
        
        <div className="company-profile-navbar">
          <NavLink to="."
          end
          className={({isActive})=> isActive ? "details-nav-link active" : "company-profile-nav-link"} >
            Latest Opportunities
          </NavLink>
          <NavLink
          to="about"
          className={({isActive})=> isActive ? "details-nav-link active" : "company-profile-nav-link"} >
            About Company
          </NavLink>
        </div>
        
      </div>
    </>
  )
}

export default CompanyProfileInfo