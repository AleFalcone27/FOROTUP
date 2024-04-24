import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LoginPage';
import Register from './components/RegisterPage';
import Feed from './components/Feed';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route exact path="/feed" element={<Feed/>}/> 
      </Routes>
    </Router>
  );
};

export default App;