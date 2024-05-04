import React, { useEffect, useState } from 'react';
import JobResults from './components/JobResults';
import { fetchJobResults } from './api';
import InfiniteScrollGrid from './components/InfiniteScrollGrid';
import Card from './components/Card';

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
      <InfiniteScrollGrid fetchData={fetchJobResults} Renderer={JobResults} renderItem={Card} />
    </div>
  );
};

export default App;