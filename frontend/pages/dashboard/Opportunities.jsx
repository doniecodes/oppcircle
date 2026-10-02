import React, { useState } from 'react';
import { useLoaderData, useSearchParams, Link } from "react-router-dom";

import EmptyIcon from "../../images/icons/empty-list.jpg";
import DiscoveryIcon from "../../images/icons/discovery.jpg";
import OpportunitiesIcon from "../../images/icons/opportunity.png";
import CalenderIcon from "../../images/icons/calender.png";
import TimeIcon from "../../images/icons/time.png";
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";

import { getDashboardOpportunities } from "../../services/opportunitiesApi";

export const loader = async ({request})=> {
  const url = new URL(request.url);
  const search = url.searchParams.toString();
  console.log(search)
  const data = await getDashboardOpportunities(search);
  return data;
}

const Opportunities = () => {
  
  const data = useLoaderData();
  const opportunities = data && data.opportunities;
  
  const [ term, setTerm ] = useState("");
  const [ count, setCount ] = useState(1);
  const [ offsetCount, setOffsetCount ] = useState(1);
  const [ searchParams, setSearchParams ] = useSearchParams();
  
  const handleSearch = async (e) => {
    e.preventDefault();
  }
  
  const status = "";
  const closingDate = new Date()
  
  //handle count
  const handleCount = (type) => {
  let newCount = count;
  
  if (type === "plus" && opportunities.length === 5) {
    newCount = count + 1;
  }
  if (type === "minus" && count > 1) {
    newCount = count - 1;
  }
  setCount(newCount);
  setSearchParams({ offset: (newCount - 1) * 5 });
  console.log("count:", newCount);
};
  
  return (
    <div className="container2">
      
      <section className="dashboard-opportunities-section">
          
        <div className="opportunities-header">
          <div>
            <div className="opportunities-header-text-wrapper">
              <img src={OpportunitiesIcon} />
              <h2>Opportunities
              <span>
                Manage your opportunities and track their performance.
              </span>
              </h2>
            </div>
            
            <div className="dashboard-opportunities-chips">
              <button className="dashboard-opportunities-chip">
                All <span>4</span>
              </button>
              <button className="dashboard-opportunities-chip">
                Active <span>3</span>
              </button>
              <button className="dashboard-opportunities-chip">
                Drafts <span>1</span>
              </button>
              <button className="dashboard-opportunities-chip">
                Closed <span>1</span>
              </button>
            </div>
            
          </div>
          
          <Link className="new-opportunity-btn" to="create">
            <FaPlus />
            Post new opportunity
          </Link>
        </div>
        
        { opportunities.length > 0 &&
        <>
        <form className="dashboard-opportunities-form"
          onSubmit={handleSearch}>
            <FaSearch className="icon" />
            <input
            type="text"
            placeholder="Search for opportunities..."
            value={term}
            onChange={(e)=> setTerm(e.target.value)}
            />
        </form>
        
        {/*Opportunities Table*/}
        <div className="opportunities-table-container">
        <table className="opportunities-table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Type</td>
              <td>Status</td>
              <td>Views</td>
              <td>Applied</td>
              <td>Closing Date</td>
              <td>Created</td>
              <td>Actions</td>
            </tr>
          </thead>
          
          <tbody>
            { opportunities.map((opportunity)=> (
            <tr key={opportunity.id}>
              <td>
                <div>
                  <h3>{opportunity.title.length > 30 ? opportunity.title.slice(0, 32) + "..." : opportunity.title}</h3>
                  <p>{opportunity.summary.length > 70 ? opportunity.summary.slice(0, 70) + "..." : opportunity.summary}</p>
                </div>
              </td>
              <td>
                <p className={`opportunity-type ${opportunity.type}`}>
                  {opportunity.type === "graduate_programme" ? "Graduate Programme" : opportunity.type}
                </p>
              </td>
              <td><p className="status">{opportunity.is_active ? "Active" : "Not active"}</p></td>
              <td><p>{opportunity.views}</p></td>
              <td>{opportunity.views}</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                {new Date(opportunity.closing_date).toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                {new Date(opportunity.created_at).toLocaleDateString("en-ZA", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </td>
              <td className="table-action-btns">
                <button>View</button>
                <button><FaTrash /></button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        
          <div className="table-footer">
              <p>Showing {opportunities.length} opportunities</p>
              <div className="table-footer-btns">
                <button onClick={()=> handleCount("minus")}>&lt;</button>
                <span>{count}</span>
                <button onClick={()=> handleCount("plus")}>&gt;</button>
              </div>
          </div>
          
        </div>
        </>
        }
        
        { opportunities.length === 0 &&
      <div className="empty-list-wrapper">
        <img src={EmptyIcon} />
        <p>
          Start posting opportunities to reach talented students and young professionals
        </p>
        <Link>
          <FaPlus />
          Post an opportunity
        </Link>
      </div>
      }
      
      </section>
      
    </div>
  )
}

export default Opportunities