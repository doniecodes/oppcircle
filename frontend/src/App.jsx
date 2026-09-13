import React from 'react'
import './index.css';
import { Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
  } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import MainOutlet from '../pages/MainOutlet';
import Home, { loader as homeLoader } from '../pages/Home';
import Opportunities, { loader as opportunitiesLoader } from '../pages/opportunities/Opportunities';
import OpportunityDetails, { loader as opportunityDetailsLoader } from '../pages/opportunities/OpportunityDetails';
import RouteError from '../components/RouteError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainOutlet/>}>
      <Route index element={<Home/>}
      loader={homeLoader}
      errorElememt={<RouteError/>}
      />
      
      <Route path="/opportunities"
      element={<Opportunities />}
      loader={opportunitiesLoader}
      />
      
      <Route path="/opportunities/:id"
      element={<OpportunityDetails />}
      loader={opportunityDetailsLoader}>
        
      </Route>
      
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
    </>
    )
  )

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App