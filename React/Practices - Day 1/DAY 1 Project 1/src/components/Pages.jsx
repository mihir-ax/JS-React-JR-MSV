import React from "react";
import Cards from "./Cards";

const Pages = () => {
  const cardsData = [
    {
      id: 1,
      companyName: "Amazon",
      companyLogo: "https://logo.clearbit.com/amazon.com",
      postedTime: "5 days ago",
      jobTitle: "Senior UI/UX Designer",
      jobType: "Part-Time",
      experienceLevel: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      isSaved: false,
    },
    {
      id: 2,
      companyName: "Google",
      companyLogo: "https://logo.clearbit.com/google.com",
      postedTime: "2 days ago",
      jobTitle: "Frontend Developer",
      jobType: "Full-Time",
      experienceLevel: "Mid Level",
      salary: "$90/hr",
      location: "Bangalore, India",
      isSaved: false,
    },
    {
      id: 3,
      companyName: "Microsoft",
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      postedTime: "1 week ago",
      jobTitle: "Backend Engineer",
      jobType: "Full-Time",
      experienceLevel: "Senior Level",
      salary: "$110/hr",
      location: "Hyderabad, India",
      isSaved: false,
    },
    {
      id: 4,
      companyName: "Netflix",
      companyLogo: "https://logo.clearbit.com/netflix.com",
      postedTime: "3 days ago",
      jobTitle: "Product Designer",
      jobType: "Contract",
      experienceLevel: "Mid Level",
      salary: "$100/hr",
      location: "Remote",
      isSaved: false,
    },
    {
      id: 5,
      companyName: "Meta",
      companyLogo: "https://logo.clearbit.com/meta.com",
      postedTime: "6 days ago",
      jobTitle: "React Developer",
      jobType: "Full-Time",
      experienceLevel: "Junior Level",
      salary: "$70/hr",
      location: "Pune, India",
      isSaved: false,
    },
    {
      id: 6,
      companyName: "Adobe",
      companyLogo: "https://logo.clearbit.com/adobe.com",
      postedTime: "4 days ago",
      jobTitle: "UI Engineer",
      jobType: "Part-Time",
      experienceLevel: "Mid Level",
      salary: "$85/hr",
      location: "Delhi, India",
      isSaved: false,
    },
    {
      id: 7,
      companyName: "Tesla",
      companyLogo: "https://logo.clearbit.com/tesla.com",
      postedTime: "2 weeks ago",
      jobTitle: "Software Engineer",
      jobType: "Full-Time",
      experienceLevel: "Senior Level",
      salary: "$130/hr",
      location: "Chennai, India",
      isSaved: false,
    },
    {
      id: 8,
      companyName: "Spotify",
      companyLogo: "https://logo.clearbit.com/spotify.com",
      postedTime: "8 days ago",
      jobTitle: "Mobile App Developer",
      jobType: "Contract",
      experienceLevel: "Mid Level",
      salary: "$95/hr",
      location: "Remote",
      isSaved: false,
    },
    {
      id: 9,
      companyName: "Airbnb",
      companyLogo: "https://logo.clearbit.com/airbnb.com",
      postedTime: "10 days ago",
      jobTitle: "Full Stack Developer",
      jobType: "Full-Time",
      experienceLevel: "Senior Level",
      salary: "$115/hr",
      location: "Noida, India",
      isSaved: false,
    },
    {
      id: 10,
      companyName: "Uber",
      companyLogo: "https://logo.clearbit.com/uber.com",
      postedTime: "1 day ago",
      jobTitle: "DevOps Engineer",
      jobType: "Full-Time",
      experienceLevel: "Mid Level",
      salary: "$105/hr",
      location: "Gurgaon, India",
      isSaved: false,
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>Job Listings</h1>
        <p>Find your dream role</p>
      </div>

      <div className="cards-grid">
        {cardsData.map(function (values) {
          return <Cards {...values} key={values.id} />;
        })}
      </div>
    </div>
  );
};

export default Pages;
