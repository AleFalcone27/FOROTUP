import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LoginPage';
import Register from './components/RegisterPage';
import Main from './components/MainPage';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route exact path="/main" element={<Main/>}/> 
        <Route exact path="/post" element={<Post/>}/> 
      </Routes>
    </Router>
  );
};

export default App;