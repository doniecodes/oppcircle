
const URI = import.meta.env.VITE_PUBLIC_URI;

//getOpportunities
    export const getOpportunities = async ()=> {
      const res = await fetch(`${URI}/opportunities`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      return data;
    }
    
  //get featured opportunities
    export const getOpportunitiesFeatured = async ()=> {
      const res = await fetch(`${URI}/opportunities/featured`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      return data;
    }
    