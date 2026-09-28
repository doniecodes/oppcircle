import React from 'react';
import { NavLink } from 'react-router-dom';

import DashboardIcon from '../images/icons/home.svg';
import OpportunitiesIcon from '../images/icons/opportunity.png';
import CompanyProfileIcon from '../images/icons/building2.png';
import AnalyticsIcon from '../images/icons/analytics.png';
import SettingsIcon from '../images/icons/settings.svg';


const DashboardNav = () => {
  return (
    <>
      <nav className="nav-dashboard">
          <ul className="nav-list-dashboard">
            <li className="nav-dashboard-item">
              <img src={DashboardIcon} />
              <NavLink end to=".">Dashboard</NavLink>
            </li>
            <li className="nav-dashboard-item">
              <img src={OpportunitiesIcon} />
              <NavLink to="opportunities">Opportunities</NavLink>
            </li>
            <li className="nav-dashboard-item">
              <img src={CompanyProfileIcon} />
              <NavLink to="company-profile">Company Profile</NavLink>
            </li>
            <li className="nav-dashboard-item">
              <img src={AnalyticsIcon} />
              <NavLink to="analytics">Analytics</NavLink>
            </li>
            <li className="nav-dashboard-item">
              <img src={SettingsIcon} />
              <NavLink to="settings">Settings</NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default DashboardNav