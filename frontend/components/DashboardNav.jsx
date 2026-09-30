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
              <NavLink end to=".">
              <img src={DashboardIcon} />
                Dashboard
              </NavLink>
            </li>
            <li className="nav-dashboard-item">
              <NavLink to="opportunities">
              <img src={OpportunitiesIcon} />
                Opportunities
              </NavLink>
            </li>
            <li className="nav-dashboard-item">
              <NavLink to="company-profile">
              <img src={CompanyProfileIcon} />
                Company Profile
              </NavLink>
            </li>
            <li className="nav-dashboard-item">
              <NavLink to="analytics">
              <img src={AnalyticsIcon} />
                Analytics
              </NavLink>
            </li>
            <li className="nav-dashboard-item">
              <NavLink to="settings">
              <img src={SettingsIcon} />
                Settings
              </NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default DashboardNav