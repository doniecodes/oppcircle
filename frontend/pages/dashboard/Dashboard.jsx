import React from 'react'

import FileIcon from "../../images/icons/file.svg"

const Dashboard = () => {
  
  const userData = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div className="container2">
      <section className="dashboard-wrapper">
        <div className="heading-wrapper">
          <h1>Welcome back {userData && userData.name}</h1>
          <p>Create opportunities and make an impact</p>
        </div>
          
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <img src={FileIcon} className="card-icon" />
              <p className="card-count">0</p>
              <p className="card-text">Total Opportunities</p>
              <p className="card-description">Active & draft</p>
            </div>
            <div className="dashboard-card">
              <img src={FileIcon} className="card-icon" />
              <p className="card-count">0</p>
              <p className="card-text">Total Views</p>
              <p className="card-description">Across all opportunities</p>
            </div>
            <div className="dashboard-card">
              <img src={FileIcon} className="card-icon" />
              <p className="card-count">0</p>
              <p className="card-text">Total Saves</p>
              <p className="card-description">From users</p>
            </div>
            <div className="dashboard-card">
              <img src={FileIcon} className="card-icon" />
              <p className="card-count">0</p>
              <p className="card-text">Total Applications</p>
              <p className="card-description">From interested candidates</p>
            </div>
          </div>
          
      </section>
    </div>
  )
}

export default Dashboard