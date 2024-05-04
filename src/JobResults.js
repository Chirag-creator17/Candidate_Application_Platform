import React from 'react';
import Card from './components/Card';

const JobResults = ({ jobResults }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(350px, 1fr))',
            gap: '1rem',
            alignContent: 'space-between',
            alignItems: 'inherit'
        }}>
            {jobResults.map((job, index) => (
                <div key={index} >
                    <Card job={job} />
                </div>
            ))}
        </div>
    );
};

export default JobResults;