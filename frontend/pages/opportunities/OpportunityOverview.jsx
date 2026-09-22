import React from 'react';
import { useOutletContext } from 'react-router-dom';

const OpportunityOverview = () => {
  
  const opportunity = useOutletContext();
  
  return (
    <div className="container">
      <div className="overview-container">
          <div className="overview-about">
              <h3>About the opportunity</h3>
              <p className="overview-text">
                {opportunity.description}
              </p>
          </div>
          <div className="overview-todo">
              <h3>What you'll do</h3>
              <p className="overview-text">
                {opportunity.description}
              </p>
          </div>
          <div className="overview-requirements">
              <h3>Requirements</h3>
              <p className="overview-text">
                {opportunity.description}
              </p>
          </div>
      
      </div>
    </div>
  )
}

export default OpportunityOverview