import React from 'react';
import './Card.css';

// "jdList": [
//     {
//         "jdUid": "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
//         "jdLink": "https://weekday.works",
//         "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
//         "maxJdSalary": 61,
//         "minJdSalary": null,
//         "salaryCurrencyCode": "USD",
//         "location": "delhi ncr",
//         "minExp": 3,
//         "maxExp": 6,
//         "jobRole": "frontend",
//         "companyName": "Dropbox",
//         "logoUrl": "https://logo.clearbit.com/dropbox.com"


const Card = ({ job }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="posted-time">Posted 8 days ago</span>
            </div>
            <div className="card-body">
                <h3 className="company-name">{job.companyName}</h3>
                <h4 className="job-title">{job.jobRole}</h4>
                <p className="location">{job.location}</p>
                <div className="salary">
                    <span className="salary-label">Estimated Salary:</span>
                    <span className="salary-range">{job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode} </span>
                    {/* <span className="salary-warning">&#9888;</span> */}
                </div>
                <div className="company-info">
                    <h5>About Company:</h5>
                    <p>
                        Lore Ipsum
                    </p>
                </div>
                <div className="role-info">
                    <h5>About Role:</h5>
                    <p>{job.jobDetailsFromCompany}: </p>
                </div>
                <div className="experience">
                    <h5>Minimum Experience:</h5>
                    <p>{job.minExp} </p>
                </div>
            </div>
            <div className="card-footer">
                <button className="easy-apply-btn">Easy Apply</button>
                <button className="referral-btn">Ask for referral</button>
            </div>
        </div>
    );
};

export default Card;