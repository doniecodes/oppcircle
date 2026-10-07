
const URI = import.meta.env.VITE_PUBLIC_URI;
const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

//get opportunities
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
    
  //Get dashboard opportunities
  export const getDashboardOpportunities = async (search)=> {
    const urlString = search ? `${URI}/dashboard/opportunities?${search}`: `${URI}/dashboard/opportunities`;
    const res = await fetch(urlString, {
      headers: {"Authorization": `Bearer ${token}`}
    });
    const data = await res.json();
    if(!res.ok){
      throw {
        message: data.error,
        statusText: res.statusText,
        status: res.status
      }
    }
    return data;
  }
  
  //create opportunity
  export const createOpportunity = async (title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website)=> {
    
    const urlString = `${URI}/opportunities/create`;
    const res = await fetch(urlString, {
      method: "POST",
      headers:
      {"Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website})
    });
    const data = await res.json();
    if(!res.ok){
      throw {
        message: data.error,
        statusText: res.statusText,
        status: res.status
      }
    }
    return data;
  }
  
  //get industries
  export const getIndustries = async ()=> {
    const urlString = `${URI}/dashboard/industries`;
    const res = await fetch(urlString);
    const data = await res.json();
    if(!res.ok){
      throw {
        message: data.error,
        statusText: res.statusText,
        status: res.status
      }
    }
    return data;
  }
  
  //get locations
  export const getLocations = async ()=> {
    const urlString = `${URI}/dashboard/locations`;
    const res = await fetch(urlString);
    const data = await res.json();
    if(!res.ok){
      throw {
        message: data.error,
        statusText: res.statusText,
        status: res.status
      }
    }
    return data;
  }