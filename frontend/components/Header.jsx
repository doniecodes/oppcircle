import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import { logoutUser } from '../services/userApi';

import { FaRegBell } from 'react-icons/fa';
import LogoImage from "../images/logo5.png";
import CloseIcon from "../images/icons/close-dark.svg";
import MenuIcon from "../images/icons/menu3.svg";
import NoAvatarIcon from "../images/no_avatar.png";

const Header = () => {
  
  const [ show, setShow ] = useState(false);
  const [ menuShow, setMenuShow ] = useState(false);
  
  const userData = JSON.parse(localStorage.getItem("user"));
  const avatarIcon = userData && userData.avatar_url !== null ? userData.avatar_url : NoAvatarIcon;
  
  const navigate = useNavigate();
  
  const handleLogout = async ()=> {
    try {
    await logoutUser();
    navigate("/login");
    } catch (error) {
      navigate("/login");
    }
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  }
  
  return (
    <header className="header">
        
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
              <NavLink to="/opportunities"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Opportunities
              </NavLink>
            </li>
            { userData && userData.account_type === "organization" &&
            <li className="link">
              <NavLink to="/dashboard"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Dashboard
              </NavLink>
            </li>
            }
            <li className="link">
              <NavLink to="/contact"
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Contact
              </NavLink>
            </li>
          </ul>
          
          { userData === null &&
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
          }
          
          { userData &&
          <>
          <div className="nav-account-wrapper">
            <div className="account-icons">
              <button className="bell-icon">
                <FaRegBell/>
              </button>
              <button
              className="account-icon-btn"
              onClick={()=> setMenuShow(true)}>
                <img
                src={avatarIcon}
                className="account-icon"
                />
              </button>
            </div>
            {menuShow &&
            <div className={`account-menu-wrapper`}>
                <img
                src={CloseIcon}
                className="account-menu-close-icon"
                onClick={()=> setMenuShow(false)}
                />
              <ul className="account-menu">
                <li>{userData.name}</li>
                { userData && userData.account_type === "organization" &&
                <li>
                  <NavLink to="/dashboard"
                  className={({isActive})=> (
                  isActive ? "active" : "" )}>
                    Dashboard
                  </NavLink>
                </li>
                }
                <li>Update Profile</li>
                <li onClick={()=> handleLogout()}>Logout</li>
              </ul>
            </div>
            }
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
          { userData && userData.account_type === "organization" &&
          <li className="link">
            <NavLink to="/dashboard"
            onClick={()=> setShow(false)}
              className={({isActive})=> (
              isActive ? "active" : "" )}>
                Dashboard
            </NavLink>
          </li>
          }
          <li className="link">
            <NavLink to="/profile"
            onClick={()=> setShow(false)}
            className={({isActive})=> (
            isActive ? "active" : "" )}>
              Profile
            </NavLink>
          </li>
        </ul>
          
          <ul className="nav-buttons">
          { !userData ?
          <>
            <li className="btn">
              <NavLink
              onClick={()=> setShow(false)}
              to="/login">
                Login
              </NavLink>
            </li>
            <li className="btn">
              <NavLink
              onClick={()=> setShow(false)}
              to="/signup">
                Signup
              </NavLink>
            </li>
          </> :
            <li className="btn signup">
              <button className="logout-btn-mobile"
              onClick={()=> handleLogout()}>
                Logout
              </button>
            </li>
          }
          </ul>
      </div>
      : null }
    </header>
  )
}

export default Header