    const URI = import.meta.env.VITE_PUBLIC_URI;
    
    //login user
    export const loginUser = async (email, password)=> {
      const res = await fetch(`${URI}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
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
  
  //create user personal
    export const createUserPersonal = async (email, password)=> {
      const res = await fetch(`${URI}/user/signup/personal`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      });
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
    
  //create user organization
    export const createUserOrganization = async (name, companyEmail, website, industry, country, password)=> {
      const res = await fetch(`${URI}/user/signup/organization`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({name, companyEmail, website, industry, country, password})
      });
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