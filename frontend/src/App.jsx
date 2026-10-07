import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
  } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';
import RouteError from '../components/RouteError';

import MainOutlet from '../pages/MainOutlet';
import Home, { loader as homeLoader, action as homeAction } from '../pages/Home';
import Opportunities, { loader as opportunitiesLoader } from '../pages/opportunities/Opportunities';
import OpportunityDetailsLayout, { loader as opportunityDetailsLoader } from '../components/OpportunityDetailsLayout';
import Login, { action as loginAction } from '../pages/Login';
import Signup, { action as signupAction, loader as signupLoader } from '../pages/Signup';
import OpportunityOverview from '../pages/opportunities/OpportunityOverview';
import OpportunityCompany from '../pages/opportunities/OpportunityCompany';

import DashboardLayout from '../components//DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import DashboardOpportunities, { loader as dashboardOpportunitiesLoader } from '../pages/dashboard/Opportunities';
import Analytics from '../pages/dashboard/Analytics';
import Settings from '../pages/dashboard/Settings';
import CreateOpportunity, { loader as createOpportunityLoader, action as createOpportunityAction } from '../pages/dashboard/CreateOpportunity';
import CompanyProfileLayout, { loader as companyProfileLoader } from '../components/CompanyProfileLayout';
import CompanyProfileOpportunities from '../pages/companyprofile/CompanyProfileOpportunities';
import CompanyProfileAbout from '../pages/companyprofile/CompanyProfileAbout';
import EditCompanyProfile from '../pages/companyprofile/EditCompanyProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainOutlet/>}>
      <Route index element={<Home/>}
      loader={homeLoader}
      action={homeAction}
      errorElement={<RouteError/>}
      />
      
      <Route path="opportunities"
      element={<Opportunities />}
      loader={opportunitiesLoader}
      errorElement={<RouteError/>}
      />
      
      <Route path="opportunities/:id"
      element={<OpportunityDetailsLayout />}
      loader={opportunityDetailsLoader}
      errorElement={<RouteError/>}>
        <Route index element={<OpportunityOverview />} />
        <Route path="company" element={<OpportunityCompany />} />
      </Route>
      
      <Route
      path="dashboard"
      element={<DashboardLayout />}>
        <Route
        index
        errorElement={<RouteError/>}
        element={<Dashboard />} />
        <Route
        path="opportunities"
        element={<DashboardOpportunities />}
        errorElement={<RouteError/>}
        loader={dashboardOpportunitiesLoader}/>
        <Route
        path="opportunities/create"
        element={<CreateOpportunity />}
        action={createOpportunityAction}
        loader={createOpportunityLoader}
        errorElement={<RouteError/>}/>
      
        <Route path="company-profile"
        element={<CompanyProfileLayout />}
        loader={companyProfileLoader}>
          <Route index element={<CompanyProfileOpportunities/>}/>
          <Route path="about" element={<CompanyProfileAbout/>}/>
        </Route>
        
        <Route path="company-profile/edit"
        element={<EditCompanyProfile/>}/>
        
        <Route path="analytics"
        element={<Analytics />} />
        
        <Route path="settings"
        element={<Settings />} />
      </Route>
      
      <Route path="login"
      element={<Login />}
      action={loginAction}
      />
      <Route path="signup"
      element={<Signup />}
      loader={signupLoader}
      action={signupAction}
      />
      
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
    </>
    )
  )

const App = () => {
  return (
    <>
    <ToastContainer position="top-right" />
    <RouterProvider router={router} />
    </>
  )
}

export default App