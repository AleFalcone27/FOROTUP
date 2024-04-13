import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LoginPage';
import Register from './components/RegisterPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/register" element={<Register/>} /> 
      </Routes>
    </Router>
  );
};

export default App;