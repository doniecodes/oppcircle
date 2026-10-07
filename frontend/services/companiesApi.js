const URI = import.meta.env.VITE_PUBLIC_URI;
const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

 //get company
  export const getCompany = async ()=> {
    const urlString = `${URI}/companies/company`;
    const res = await fetch(urlString, {
      headers: { "Authorization": `Bearer ${token}` }
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
  
 //edit company profile
  export const editCompanyProfile = async (logo, name, industry, description, website, country, location)=> {
    const urlString = `${URI}/companies/company/edit`;
    const res = await fetch(urlString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({logo, name, industry, description, website, country, location})
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