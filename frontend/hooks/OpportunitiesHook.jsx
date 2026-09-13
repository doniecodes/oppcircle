import React from 'react'


const OpportunitiesHook = () => {
    
    const URI = import.meta.env.VITE_PUBLIC_URI;
    
    //getOpportunities
    const getOpportunities = async ()=> {
      const res = await fetch(`${URI}/opportunities`);
      const data = await res.json();
      if(!res.ok){
        console.log("error getOpportunities");
      }
      return data;
    }
    
    return { getOpportunities }
}

export default OpportunitiesHook