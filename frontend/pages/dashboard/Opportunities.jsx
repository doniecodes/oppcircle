import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { getDashboardOpportunities } from "../../services/opportunitiesApi";

import EmptyIcon from "../../images/icons/empty-list.jpg";
import DiscoveryIcon from "../../images/icons/discovery.jpg";
import OpportunitiesIcon from "../../images/icons/opportunity.png";
import CalenderIcon from "../../images/icons/calender.png";
import TimeIcon from "../../images/icons/time.png";

import { FaSearch, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const loader = async ()=> {
  const data = await getDashboardOpportunities();
  return data;
}

const Opportunities = () => {
  
  const opportunities = [1, 2];
  
  const [ term, setTerm ] = useState(null);
  const [ count, setCount ] = useState(1);
  
  const handleSearch = async (e) => {
    e.preventDefault();
  }
  
  //handle count
  const handleCount = (text)=> {
    if(text === "plus") {
      setCount(prev=> prev + 1);
    }
    if(text === "minus" && count > 1) {
      setCount(prev=> prev - 1)
    }
  }
  
  const desc = "Work on real projects, build your skills and gain hands-on experience with our internship opportunity we have designed for you."
  const description = desc.slice(0, 70) + "...";
  
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
          
          <button>
            <FaPlus />
            Post new opportunity
          </button>
        </div>
        
        {/*Search bar*/}
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
              <td>Applications</td>
              <td>Closing Date</td>
              <td>Created</td>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>

                <div>
                  <h3>Software Development Internship</h3>
                  <p>{description}</p>
                </div>
              </td>
              <td>
                <p className="opportunity-type internship">
                  Internship
                </p>
              </td>
              <td><p>Active</p></td>
              <td><p>2.4K</p></td>
              <td>196</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                30 Oct 2026
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                9 August 2026
              </td>
            </tr>
            <tr>
              <td>
                <img src={DiscoveryIcon} />
                <div>
                  <h3>Software Development Internship</h3>
                  <p>{description}</p>
                </div>
              </td>
              <td>
                <p className="opportunity-type graduate_programme">
                  Graduate Programme
                </p>
              </td>
              <td><p>Closed</p></td>
              <td><p>2.4K</p></td>
              <td>196</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                30 Oct 2026
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                9 August 2026
              </td>
            </tr>
            <tr>
              <td>
                <img src={DiscoveryIcon} />
                <div>
                  <h3>Software Development Internship</h3>
                  <p>{description}</p>
                </div>
              </td>
              <td>
                <p className="opportunity-type internship">
                  Internship
                </p>
              </td>
              <td><p>Active</p></td>
              <td><p>2.4K</p></td>
              <td>196</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                30 Oct 2026
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                9 August 2026
              </td>
            </tr>
            <tr>
              <td>
                <img src={DiscoveryIcon} />
                <div>
                  <h3>Software Development Internship</h3>
                  <p>{description}</p>
                </div>
              </td>
              <td>
                <p className="opportunity-type internship">
                  Internship
                </p>
              </td>
              <td><p>Active</p></td>
              <td><p>2.4K</p></td>
              <td>196</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                30 Oct 2026
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                9 August 2026
              </td>
            </tr>
            <tr>
              <td>
                <img src={DiscoveryIcon} />
                <div>
                  <h3>Software Development Internship</h3>
                  <p>{description}</p>
                </div>
              </td>
              <td>
                <p className="opportunity-type internship">
                  Internship
                </p>
              </td>
              <td><p>Active</p></td>
              <td><p>2.4K</p></td>
              <td>196</td>
              <td className="td-with-icon">
                <img src={CalenderIcon} />
                30 Oct 2026
              </td>
              <td className="td-with-icon">
                <img src={TimeIcon} />
                9 August 2026
              </td>
            </tr>
          </tbody>
        </table>
        
          <div className="table-footer">
              <p>Showing 6 opportunities</p>
              <div className="table-footer-btns">
                <button onClick={()=> handleCount("minus")}>&lt;</button>
                <span>{count}</span>
                <button onClick={()=> handleCount("plus")}>&gt;</button>
              </div>
          </div>
        </div>
      
      {/*Opportunities list*/}
      {opportunities.length === 0 ?
      <div className="empty-list-wrapper">
        <img src={EmptyIcon} />
        <p>
          Start posting opportunities to reach talented students and young professionals
        </p>
        <button>
          <FaPlus />
          Post an opportunity
        </button>
      </div>
      :
      null
      }
      </section>
      
    </div>
  )
}

export default Opportunities