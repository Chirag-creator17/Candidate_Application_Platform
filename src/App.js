import React, { useEffect, useState } from 'react';
import JobResults from './JobResults';
import { fetchJobResults } from './JobFetcher';

const App = () => {
  const [jobResults, setJobResults] = useState([]);

  useEffect(() => {
    fetchJobResults()
      .then(data => setJobResults(data.jdList))
      .catch(error => console.error('Error fetching job results:', error));
  }, []);

  return (
    <div>
      <h1>Job Results</h1>
      <JobResults jobResults={jobResults} />
    </div>
  );
};

export default App;