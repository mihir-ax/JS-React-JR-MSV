import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} alt="Profile" />
      </div>
      <div className="card-content">
        <h3 className="card-name">{props.name}</h3>
        <p className="card-role">{props.role}</p>
        <p className="card-bio">{props.bio}</p>
        <div className="card-stats">
          <span>{props.projects} Projects</span>
          <span>{props.followers} Followers</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
