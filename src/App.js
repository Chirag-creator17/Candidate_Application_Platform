import React, { useEffect, useState } from 'react';
import { fetchJobResults } from './api';
import InfiniteScrollGrid from './components/InfiniteScrollGrid';

const App = () => {
  return (
    <div>      
      <InfiniteScrollGrid fetchData={fetchJobResults} />
    </div>
  );
};

export default App;