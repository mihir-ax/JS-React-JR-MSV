import React from "react";
import { Bookmark } from "lucide-react";

function Cards(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="company-logo">
          <div className="company-logo">
            <img src={props.companyLogo} alt="Company Logo" />
          </div>
        </div>
        <button className="save-btn">
          Save <Bookmark />
        </button>
      </div>

      <div className="card-body">
        <p className="company-name">
          {props.companyName} <span className="time">{props.postedTime}</span>
        </p>
        <h3 className="job-title">{props.jobTitle}</h3>
        <div className="tags">
          <span className="tag">{props.jobType}</span>
          <span className="tag">{props.experienceLevel}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="salary-location">
          <p className="salary">{props.salary}</p>
          <p className="location">{props.location}</p>
        </div>
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
}

export default Cards;
