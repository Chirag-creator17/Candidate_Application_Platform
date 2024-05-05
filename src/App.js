import React, { useEffect, useState } from 'react';
import JobResults from './components/JobResults';
import { fetchJobResults } from './api';
import InfiniteScrollGrid from './components/InfiniteScrollGrid';
import JobSearchBar from './JobSearchBar';

const App = () => {
  return (
    <div>
      <JobSearchBar />

      <h1>Job Results</h1>
      <InfiniteScrollGrid fetchData={fetchJobResults} Renderer={JobResults} />
    </div>
  );
};

export default App;