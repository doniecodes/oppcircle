import React from 'react';
import { useOutletContext } from "react-router-dom";
import CompanyProfileOpportunity from "../../components/CompanyProfileOpportunity";

const CompanyProfileOpportunities = () => {
  
  //context data
  const { opportunities } = useOutletContext();
  
  return (
    <>
      <div className="container2">
        <div className="company-profile-opportunities-wrapper">
          {/*<h2>Latest Opportunities</h2>*/}
          <div className="company-profile-opportunities">
            { opportunities.map(x => (
            <CompanyProfileOpportunity
            key={x.id}
            opportunity={x}
            />
            ))}
          </div>
        </div>
        </div>
    </>
  )
}

export default CompanyProfileOpportunities