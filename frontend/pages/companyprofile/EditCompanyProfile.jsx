import React, { useState } from 'react';
import { Link, Form, useActionData, useLoaderData } from 'react-router-dom';
import { FaTrash, FaUpload } from 'react-icons/fa';

import ArrowRight from "../../images/icons/arrow-right.svg";
import Discovery from "../../images/icons/discovery.jpg";

import { editCompanyProfile } from "../../services/companiesApi";

export const action = async({request})=> {
  const formData = await request.formData();
  const logo = formData.get("logo");
  const name = formData.get("name");
  const industry = formData.get("industry");
  const description = formData.get("description");
  const website = formData.get("website");
  const country = formData.get("country");
  const location = formData.get("location");
  
  try {
    const data = await editCompanyProfile(logo, name, industry, description, website, country, location);
  } catch (error) {
    return { error: error.message };
  }
}
  
export const loader = async()=> {
  return null;
}

const EditCompanyProfile = () => {
  
  //hooks
  const actionData = useActionData();
  const loaderData = useActionData();
  
  //states
  const [ image, setImage ] = useState("");
  console.log(image);
  
  //const logoImage = company.logo_url ? company.logo_url : NoImageCircle ;
  
  const handleLogo = async(value)=> {
    setImage(value);
  }
  
  return (
    <>
      <div className="container2">
        
        <Link to=".."
        relative="path"
        className="back-btn">
          <img src={ArrowRight} />
          Back to Company Profile
        </Link>
        
        <div className="company-edit-profile-heading-wrapper">
            <h2>Edit Profile</h2>
            <p>Edit your company information</p>
        </div>
        
        <div className="edit-form-wrapper">
          
        <Form method="post" className="edit-form">
          
          <div className="edit-form-logo-wrapper">
            <h4>Company Logo</h4>
            <p>Upload your company logo. Recommended size: 512x512px (PNG, JPG) </p>
            <div>
              <img src={Discovery} className="edit-form-logo-img"/>
              <div className="edit-form-logo-buttons-wrapper">
                <div className="edit-form-logo-buttons">
                  <label htmlFor="logoInput" className="change-logo-btn">
                    <FaUpload />Change Logo
                  </label>
                  <input
                    type="file"
                    id="logoInput"
                    filename=""
                    value=""
                    name="logo"
                    accept="image/png, image/jpeg, image/webp"
                    hidden
                    onChange={(e)=> handleLogo(e.target.filename)}
                  />
                  <button type="button"
                  className="remove-logo-btn">
                    <FaTrash/> Remove
                  </button>
                </div>
                <p>Current logo will be replaced after changes saved</p>
              </div>
            </div>
          </div>
          
          <div className="form-group-wrapper">
            <h3>Basic Information</h3>
            <div className="flex-group">
              <div className="form-group">
                <label htmlFor="name">Company Name <span>*</span></label>
                <input
                type="text"
                id="name"
                name="name"
                />
              </div>
              <div className="form-group industry">
              <label htmlFor="industry">
                Industry <span>*</span>
              </label>
              <select name="industry" id="industry">
                <option value="none">Technology</option>
                {/*{industries.map((x)=> (
                <option key={x.id} value={x.name}>{x.name}</option>
                ))}*/}
              </select>
              </div>
            </div>
            <div className="form-group description">
              <label htmlFor="description">
                Company Description <span>*</span>
              </label>
              <textarea
              name="description"
              id="description">
              </textarea>
            </div>
          </div>
          
          <div className="flex-group">
            <div className="form-group">
              <label htmlFor="website">Company Website <span>*</span></label>
              <input
              type="text"
              id="website"
              name="website"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Company Email <span>*</span></label>
              <input
              type="text"
              id="email"
              name="email"
              />
            </div>
          </div>
          
          <div className="flex-group">
            <div className="form-group">
              <label htmlFor="country">Country <span>*</span>
              </label>
              <select name="country" id="country">
                <option value="South Africa">South Africa</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="location">
                Location <span>*</span>
              </label>
              <select name="location" id="location">
                <option value="none">Centurion, Gauteng</option>
                {/*{locations.map((x)=> (
                <option
                key={x.id}
                value={`${x.id},${x.city},${x.province}`}>
                  {`${x.city}, ${x.province}`}
                </option>
                ))}*/}
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          { actionData?.error ?
          <div className="error-form">
            { actionData.error }
          </div>
          : null
          }
          
          <div className="form-buttons">
            <button type="button" className="cancel-changes-btn">
              Cancel
            </button>
            <button type="submit" className="submit-changes-btn">
              Save Changes
            </button>
          </div>
        </Form>
        
        </div>
      
      </div>
    </>
  )
}

export default EditCompanyProfile