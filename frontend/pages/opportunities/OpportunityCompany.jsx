import React from 'react';
import { useOutletContext } from 'react-router-dom';

const OpportunityCompany = () => {
  
  const opportunity = useOutletContext();
  
  return (
    <div className="container">
      
      <div className="details-company-container">
        
          <img src={opportunity.logo_url}
          className="company-logo-full" />
          
          <div className="company-details-wrapper">
            <p>{opportunity.company_description}</p>
            
            <p><span>Industry:</span>{opportunity.industry}</p> 
            
            <p>
              <span>Website:</span>
              <span className="website">
                {opportunity.website_url}
              </span>
            </p> 
            
            <p><span>City:</span>{opportunity.company_city}</p> 
            
            <p><span>Country:</span>{opportunity.company_country}</p>  
          </div>
         
      </div>
      
    </div>
  )
}

export default OpportunityCompany