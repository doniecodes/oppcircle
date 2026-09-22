import React from 'react'
import './index.css';
import { Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
  } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import MainOutlet from '../pages/MainOutlet';
import Home, { loader as homeLoader } from '../pages/Home';
import Opportunities, { loader as opportunitiesLoader } from '../pages/opportunities/Opportunities';
import OpportunityDetailsLayout, { loader as opportunityDetailsLoader } from '../components/OpportunityDetailsLayout';
import Login, { action as loginAction } from '../pages/Login';
import Signup, { action as signupAction } from '../pages/Signup';
import OpportunityOverview from '../pages/opportunities/OpportunityOverview';
import OpportunityCompany from '../pages/opportunities/OpportunityCompany';
import RouteError from '../components/RouteError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainOutlet/>}>
      <Route index element={<Home/>}
      loader={homeLoader}
      errorElememt={<RouteError/>}
      />
      
      <Route path="opportunities"
      element={<Opportunities />}
      loader={opportunitiesLoader}
      />
      
      <Route path="opportunities/:id"
      element={<OpportunityDetailsLayout />}
      loader={opportunityDetailsLoader}
      errorElememt={<RouteError/>}>
        <Route index element={<OpportunityOverview />} />
        <Route path="company" element={<OpportunityCompany />} />
      </Route>
      
      <Route path="login"
      element={<Login />}
      action={loginAction}
      />
      
      <Route path="signup"
      element={<Signup />}
      action={signupAction}
      />
      
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