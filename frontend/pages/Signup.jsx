import React, { useState } from 'react';
import { Link, useActionData, Form } from "react-router-dom";
import PersonIcon from "../images/icons/name.png";
import { createUserPersonal, createUserOrganization } from "../services/opportunitiesApi";

export const action = async({request})=> {
    const formData = await request.formData();
    const type = formData.get("type");
    const name = formData.get("name");
    const email = formData.get("email");
    const companyEmail = formData.get("company-email");
    const website = formData.get("website");
    const industry = formData.get("industry");
    const country = formData.get("country");
    const password = formData.get("password");
    
    try {
      let data;
      if(type === "personal"){
        data = await createUserPersonal(email, password);
      } else {
        data = await createUserOrganization(name, companyEmail, website, industry, country, password);
      }
      return data;
    } catch (error) {
      return { error: error.message };
    }
}

const Signup = () => {
  
  //loader variables
  const actionData = useActionData();
  console.log(actionData);
  
  //states
  const [ accountType, setAccountType ] = useState("personal");
  
  return (
    <>
      <div className="container">
          <Form
          method="post"
          className="user-form signup-form">
              <h2>Create an OppCircle account</h2>
              
              <div className="account-type-wrapper">
                <h3>Choose account type*</h3>
                <div>
                  <label htmlFor="personal">
                    <input
                    type="radio"
                    id="personal"
                    value="personal"
                    name="type"
                    defaultChecked={true}
                    onChange={(e)=> setAccountType(e.target.value)}
                    />
                    Personal account
                  </label>
                  <p>Find opportunities and apply. </p>
                  </div>
                  <div>
                  <label htmlFor="organization">
                    <input
                    type="radio"
                    id="organization"
                    value="organization"
                    name="type"
                    onChange={(e)=> setAccountType(e.target.value)}
                    />
                    Organization account
                  </label>
                    <p>Post opportunities and reach potential applicants. </p>
                  </div>
              </div>
              
              { accountType === "personal" &&
              <>
              <div className="form-group">
                <label htmlFor="email">
                  Email *
                </label>
                <div>
                <img src={PersonIcon} />
                <input
                type="text"
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
              </>
              }
              { accountType === "organization" &&
              <>
              <div className="form-group">
                <label htmlFor="name">
                  Company name *
                </label>
                <div>
                <img src={PersonIcon} />
                <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Microsoft South Africa"
                />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="company-email">
                  Company email *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <input
                  type="text"
                  id="company-email"
                  name="company-email"
                  placeholder="careers@company.co.za"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="website">
                  Website *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="https://www.company.co.za"
                  />
                </div>
              </div>
              
              <div className="form-group industry">
                <label htmlFor="industry">
                  Industry *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <select
                  name="industry"
                  id="industry">
                    <option disabled>Select indiustry</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Banking">Banking</option>
                    <option
                    value="Technology">
                      Technology
                    </option>
                  </select>
                </div>
              </div>
              
              <div className="form-group country">
                <label htmlFor="country">
                  Country *
                </label>
                <div>
                  <img src={PersonIcon} />
                  <select
                  name="country"
                  id="country">
                    <option disabled>Select country</option>
                    <option
                    value="Australia">
                      Australia
                      </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Canada">Canada</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">
                  Password*
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
              </>
              }
              
              { actionData?.error ?
                <div className="error-form">
                  { actionData.error }
                </div>
                : null
              }
              
              <button type="submit"
              className="user-form-btn-signup">
                { accountType === "personal" ? "Create Personal Account" : "Create Organization Account" }
              </button>
              
              <p className="link-text">
                Have an OppCircle account?
                <Link to="/login">Login</Link>
              </p>
              
          </Form>
          
      </div>
    </>
  )
}

export default Signup