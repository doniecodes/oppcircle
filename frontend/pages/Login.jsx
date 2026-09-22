import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import PersonIcon from "../images/icons/name.png";

export const action = async({request})=> {
  return "123"
}

const Login = () => {
  
  const data = useLoaderData();
  
  return (
    <>
      <div className="container">
          <form className="user-form login-form">
              <h2>Login to your OppCircle account</h2>
              <div className="form-group">
                <label htmlFor="email">
                  Email *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <input
                  type="email"
                  id="email"
                  name="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <input
                  type="password"
                  id="password"
                  name="password"
                  />
                </div>
              </div>
              <button>
                Login
              </button>
              <p className="link-text">
                New to OppCircle?
                <Link to="/signup">Signup
                </Link>
              </p>
          </form>
      </div>
    </>
  )
}

export default Login