import React from 'react';
import { Link, useActionData, Form, redirect } from "react-router-dom";
import PersonIcon from "../images/icons/name.png";
import { loginUser } from "../services/userApi";

import EmailIcon from "../images/icons/email.svg";
import LockIcon from "../images/icons/lock.svg";

export const action = async({request})=> {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser(email, password);
    localStorage.setItem("user", JSON.stringify(data.user));
    return redirect("/");
  } catch (error) {
    return { error: error.message };
  }
}

const Login = () => {
  
  const actionData = useActionData();
  
  return (
    <>
      <div className="container">
          <Form method="post"
          className="user-form login-form">
              <h2>Login to your OppCircle account</h2>
              <div className="form-group">
                <label htmlFor="email">
                  Email *
                </label>
                <div>
                  <img src={EmailIcon} />
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password *
                </label>
                <div>
                  <img src={LockIcon} />
                  <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  />
                </div>
              </div>
              
              { actionData?.error ?
                <div className="error-form">
                  { actionData.error }
                </div>
                : null
              }
              
              <button type="submit"> Login </button>
              
              <p className="link-text">
                New to OppCircle?
                <Link to="/signup">Signup
                </Link>
              </p>
          </Form>
          
      </div>
    </>
  )
}

export default Login