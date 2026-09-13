import React from 'react'

import Briefcase from "../images/icons/briefcase.svg";
import Coins from "../images/icons/coins.svg";
import Tie from "../images/icons/tie.svg";
import Graduate from "../images/icons/graduate.svg";
import Graduation from "../images/icons/graduation.svg";
import File from "../images/icons/file.svg";

const Icons = () => {
  return (
  <section className="icons">
    <div className="icon-div">
      <img src={Briefcase}/>
      <h3>Internships</h3>
    </div>
    <div className="icon-div">
      <img src={Tie}/>
      <h3>Jobs</h3>
    </div>
    <div className="icon-div">
      <img src={Coins}/>
      <h3>Bursaries</h3>
    </div>
    <div className="icon-div">
      <img src={Graduation}/>
      <h3>Scholarships</h3>
    </div>
    <div className="icon-div">
      <img src={File}/>
      <h3>Learnerships</h3>
    </div>
    <div className="icon-div">
      <img src={Graduate} className="icon-graduate"/>
      <h3 className="text-graduate">Graduate Programmes</h3>
    </div>
  </section>
  )
}

export default Icons