import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';  


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
