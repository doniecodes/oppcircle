import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoImage from "../images/logo5.png";
import CloseIcon from "../images/icons/close-dark.svg";
import MenuIcon from "../images/icons/menu3.svg";

const Header = () => {
  
  const [ show, setShow ] = useState(false);
  
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
          
          <ul className="sidebar-btns">
            {!show &&
            <li className="hamburger"
            onClick={()=> setShow(true)}>
              <img src={MenuIcon} />
            </li>
            }
            { show && 
            <li className="close-btn"
            onClick={()=> setShow(false)}>
              <img src={CloseIcon} />
            </li>
            }
          </ul>
          
        </nav>
      </div>
      
      { show ?
      <div className="sidebar-container">
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
      </div>
      : null }
      
    </header>
  )
}

export default Header