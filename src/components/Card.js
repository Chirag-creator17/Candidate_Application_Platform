import React from 'react';
import './Card.css';

const Card = ({ data }) => {
    
    return (
        <div className="card">
            <div className="card-header">
                <span className="posted-time">Posted 8 days ago</span>
            </div>
            <div className="card-body">
                <h3 className="company-name">{data.companyName}</h3>
                <h4 className="data-title">{data.dataRole}</h4>
                <p className="location">{data.location}</p>
                <div className="salary">
                    <span className="salary-label">Estimated Salary:</span>
                    <span className="salary-range">{data.minJdSalary} - {data.maxJdSalary} {data.salaryCurrencyCode} </span>
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
                    <p>{data.dataDetailsFromCompany}: </p>
                </div>
                <div className="experience">
                    <h5>Minimum Experience:</h5>
                    <p>{data.minExp} </p>
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