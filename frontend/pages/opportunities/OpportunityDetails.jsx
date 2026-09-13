import React from 'react'
import { useParams } from 'react-router-dom'

export const loader = async ()=> {
  
}

const OpportunityDetails = () => {
  
  const { id } = useParams();
  
  return (
    <>
      <div className="container">
          <h2>  { id } </h2>
      
      </div>
    </>
  )
}

export default OpportunityDetails