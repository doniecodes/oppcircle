import React from 'react';
import { useLoaderData, useActionData, Link, Form } from "react-router-dom";
import ArrowRight from "../../images/icons/arrow-right.svg";
import OpportunitiesIcon from "../../images/icons/opportunity.png";
import LocationIcon from "../../images/icons/location.png";

import { createOpportunity, getIndustries, getLocations } from "../../services/opportunitiesApi";

export const loader = async ()=> {
  const industriesData = await getIndustries();
  const locationsData = await getLocations();
  return { industriesData, locationsData };
}

export const action = async ({request})=> {
  const formData = await request.formData();
  
  const title = formData.get("title");
  const type = formData.get("type");
  const summary = formData.get("summary");
  const description = formData.get("description");
  const location = formData.get("location");
  const mode = formData.get("work-mode");
  const industry = formData.get("industry");
  const skills = formData.get("skills");
  const qualifications = formData.get("qualification");
  const website = formData.get("website");
  const deadline = formData.get("deadline");
  const positions = formData.get("positions");
  
  try {
    const data = await createOpportunity(title, type, summary, description, location, mode, industry, skills, qualifications, deadline, positions, website);
  } catch (error) {
    return { error: error.message };
  }
}

const CreateOpportunity = () => {
  
  //hooks
  const actionData = useActionData();
  const { industriesData, locationsData } = useLoaderData();
  const industries = industriesData && industriesData.industries;
  const locations = locationsData && locationsData.locations;
  
  const types = ["internship", "job", "graduate_programme", "bursary", "scholarship", "learnership", "fellowship", "apprenticeship", "competition", "bootcamp", "volunteering", "other"];
  const workModes = ["on_site", "remote", "hybrid", "not_applicable"];
  
  return (
    <div className="container2">
      
      <Link to=".."
      relative="path"
      className="back-btn">
        <img src={ArrowRight} />
        Back to opportunities
      </Link>
      
      <div className="opportunities-header-text-wrapper">
        <img src={OpportunitiesIcon} />
        <h2>Post New Opportunity
        <span>
          create new opportunity and reach talented students.
        </span>
        </h2>
      </div>
      
      <Form method="post" className="create-opportunity-form">
        <div className="form-group-wrapper basic">
          <h3>Basic Information</h3>
          <div className="flex-group">
          <div className="form-group title">
            <label htmlFor="title">
              Title <span>*</span>
            </label>
            <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g. Software Engineering Internship"
            />
          </div>
          <div className="form-group type">
            <label htmlFor="type">
              Opportunity Type <span>*</span>
            </label>
            <select name="type" id="type">
              <option value="none">Select type</option>
              {types.map((x)=> (
              <option key={x} value={x}>{x === "graduate_programme" ? "Graduate Programme" : x}</option>
              ))}
            </select>
          </div>
          </div>
          <div className="form-group summary">
            <label htmlFor="summary">
              Short Description <span>*</span>
            </label>
            <textarea
            name="summary"
            id="summary"
            placeholder="Write a brief description of the opportunity (1-2 sentences)..."></textarea>
          </div>
          <div className="form-group description">
            <label htmlFor="description">
              Detailed Description <span>*</span>
            </label>
            <textarea
            name="description"
            id="description"
            placeholder="Provide more details about the opportunity (e.g. role, responsibilities, requirements and what candidates can expect)..."></textarea>
          </div>
        </div>
        
        <div className="form-group-wrapper location">
          <h3><img src={LocationIcon} />Location and Work Mode</h3>
          <div className="grid-group">
          <div className="form-group location">
            <label htmlFor="location">
              Location <span>*</span>
            </label>
            <select name="location" id="location">
              <option value="none">Select location</option>
              {locations.map((x)=> (
              <option
              key={x.id}
              value={`${x.id},${x.city},${x.province}`}>
                {`${x.city}, ${x.province}`}
              </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group work-mode">
            <label htmlFor="woek-mode">
              Work Mode <span>*</span>
            </label>
            <select name="work-mode" id="work-mode">
              <option value="none">Select work mode</option>
              {workModes.map((x)=> (
              <option key={x} value={x}>{x}</option>
              ))}
            </select>
          </div>
          <div className="form-group industry">
            <label htmlFor="industry">
              Industry <span>*</span>
            </label>
            <select name="industry" id="industry">
              <option value="none">Select industry</option>
              {industries.map((x)=> (
              <option key={x.id} value={x.name}>{x.name}</option>
              ))}
            </select>
          </div>
          </div>
        </div>
          
        <div className="form-group-wrapper requirements">
          <h3>Requirements</h3>
          <div className="flex-group">
          <div className="form-group skills">
            <label htmlFor="skills">
              Skills <span>(optional)</span>
            </label>
            <input
            type="text"
            name="skills"
            id="skills"
            placeholder="e.g. Python, Javascript, Communication..."
            />
            <p className="field-instruction">Add skills separated by commas</p>
          </div>
          <div className="form-group">
            <label htmlFor="qualification">
              Minimum Qualification <span>(optional)</span>
            </label>
            <select name="qualification" id="qualification">
              <option value="none">Select qualification level</option>
              {types.map((x)=> (
              <option key={x} value={x}>{x}</option>
              ))}
            </select>
          </div>
          </div>
        </div>
        
        <div className="form-group-wrapper details">
          <h3>Application Details</h3>
          <div className="grid-group website">
          <div className="form-group website">
            <label htmlFor="website">
              Application Website <span>*</span>
            </label>
            <input
            type="text"
            name="website"
            id="website"
            placeholder="Application website"
            />
          </div>
          <div className="form-group deadline">
            <label htmlFor="deadline">
              Application Deadline <span>*</span>
            </label>
            <input
            type="date"
            name="deadline"
            id="deadline"
            placeholder="Select date"
            />
          </div>
          <div className="form-group positions">
            <label htmlFor="positions">
              Number Of Positions <span>*</span>
            </label>
            <input
            type="number"
            name="positions"
            id="positions"
            defaultValue="1"
            />
          </div>
          </div>
        </div>
        
        { actionData?.error ?
          <div className="error-form">
            { actionData.error }
          </div>
          : null
        }
        
        <button type="submit"
        className="create-opportunity-form-btn">
          Publish Opportunity
        </button>
        
      </Form>
      
    </div>
  )
}

export default CreateOpportunity