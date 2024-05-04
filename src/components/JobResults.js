import React from 'react';

const JobResults = ({ Component, data }) => {

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(350px, 1fr))',
            gap: '1rem',
            alignContent: 'space-between',
            alignItems: 'inherit'
        }}>
            {data.map((job, index) => (
                <div key={index} >
                    <Component data={job} />
                </div>
            ))}
        </div>
    );
};

export default JobResults;