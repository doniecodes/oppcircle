import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import OpportunityInfo from '../pages/opportunities/OpportunityInfo';
import { getOpportunity } from '../services/opportunitiesApi';

export const loader = async ({params})=> {
  const { id } = params;
  const data = await getOpportunity(id);
  return data;
}

const OpportunityDetailsLayout = () => {
  
  const data = useLoaderData();
  const opportunity = data && data.opportunity;
  
  return (
    <>
      <OpportunityInfo opportunity={opportunity}/>
      <Outlet context={opportunity} />
    </>
  )
}

export default OpportunityDetailsLayout