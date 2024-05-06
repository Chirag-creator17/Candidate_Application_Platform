import React from 'react';
import Card from './Card';

const JobResults = ({ data }) => {

    return (
        <div style={{
            display: 'flex',
            flexWrap:'wrap',
            gap: '1rem',
            alignContent: 'space-between',
            alignItems: 'inherit'
        }}>
            {data.map((job, index) => (
                <div key={index} >
                    <Card data={job} />
                </div>
            ))}
        </div>
    );
};

export default JobResults;