import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoImage from "../images/logo5.png";

const Header = () => {
  
  
  
  return (
    <header className="header">
      <div className="container">
        
        <nav className="main-nav">
          
        <div className="logo-wrapper">
          <Link to="/">
            <img className="logo"
            src={LogoImage}
            />
          </Link>
        </div>
        
          <ul className="nav-links">
            <li className="link">
              <NavLink to="/"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/opportunities"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Opportunities
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/jobs"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Jobs
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/internships"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Internships
              </NavLink>
            </li>
          </ul>
          
          <ul className="nav-buttons">
            <li className="btn">
              <NavLink to="/login">
                Login
              </NavLink>
            </li>
            <li className="btn signup">
              <NavLink to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  )
}

export default Header