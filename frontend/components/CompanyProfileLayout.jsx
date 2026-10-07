import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import CompanyProfileInfo from '../pages/companyprofile/CompanyProfileInfo';
import { getCompany } from '../services/companiesApi';

export const loader = async ()=> {
  const data = await getCompany();
  return data;
}

const CompanyProfileLayout = () => {
  
  const data = useLoaderData();
  const opportunities = data && data.opportunities;
  const company = opportunities.length > 1 ? opportunities[0] : opportunities[0];
  
  return (
    <>
      <div className="company-profile-layout">
      <CompanyProfileInfo company={company}/>
      <Outlet context={{opportunities, company}} />
      </div>
    </>
  )
}

export default CompanyProfileLayout