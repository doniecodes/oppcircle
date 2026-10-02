import React from 'react'
import { Link } from 'react-router-dom'
  import LogoImage from "../images/logo5.png";

const Footer = () => {
  
  return (
    <footer>
      <div className="container">
         <div className="logo-wrapper footer">
          <Link to="/">
            <img className="logo"
            src={LogoImage}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer