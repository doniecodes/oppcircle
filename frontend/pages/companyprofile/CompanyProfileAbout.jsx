import React from 'react';
import { useOutletContext } from "react-router-dom";

const CompanyProfileAbout = () => {
  
  const { company } = useOutletContext();
  
  return (
      <div className="container2">
        <div className="company-profile-about-wrapper">
          <p>{company.company_description}</p>
        </div>
      </div>
  )
}

export default CompanyProfileAbout