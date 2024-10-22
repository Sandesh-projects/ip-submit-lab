import React from 'react';
import './App.css';
import Blog from './first/blog';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
