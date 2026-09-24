
const URI = import.meta.env.VITE_PUBLIC_URI;

//getOpportunities
    export const getOpportunities = async (search)=> {
      const urlString = search ? `${URI}/opportunities?${search}`: `${URI}/opportunities`;
      const res = await fetch(urlString);
      const data = await res.json();
      if (!res.ok) {
        throw {
          message: data.error,
          statusText: res.statusText,
          status: res.status
        }
      }
      return data;
    }
    
  //get featured opportunities
    export const getOpportunitiesFeatured = async ()=> {
      const res = await fetch(`${URI}/opportunities/featured`);
      const data = await res.json();
      if (!res.ok) {
        throw {
          message: data.error,
          statusText: res.statusText,
          status: res.status
        }
      }
      return data;
    }
    
  //get opportunity
    export const getOpportunity = async (id)=> {
      const res = await fetch(`${URI}/opportunities/${id}`);
      const data = await res.json();
      if (!res.ok) {
        throw {
          message: data.error,
          statusText: res.statusText,
          status: res.status
        }
      }
      return data;
    }