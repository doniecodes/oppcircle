import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoImage from "../images/logo5.png";
import CloseIcon from "../images/icons/close-dark.svg";
import MenuIcon from "../images/icons/menu3.svg";

const DashboardHeader = () => {
  
  const [ show, setShow ] = useState(false);
  
  const user = null;
  
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
          
          { !user ?
          <>
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
          </>
          : 
          <>
          <div className="nav-buttons">
            
          </div>
          </>
          }
          
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
            onClick={()=> setShow(false)}
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/opportunities"
            onClick={()=> setShow(false)}
            className={({isActive})=> (
            isActive ? "active" : "" )}>
              Opportunities
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/opportunities?type=job"
            onClick={()=> setShow(false)}
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Jobs
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/dashboard"
            onClick={()=> setShow(false)}
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Dashboard
            </NavLink>
          </li>
        </ul>
          
          <ul className="nav-buttons">
            <li className="btn">
              <NavLink
              onClick={()=> setShow(false)}
              to="/login">
                Login
              </NavLink>
            </li>
            <li className="btn signup">
              <NavLink
              onClick={()=> setShow(false)}
              to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
      </div>
      : null }
      
    </header>
  )
}

export default DashboardHeader