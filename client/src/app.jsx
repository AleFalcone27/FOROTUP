import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LoginPage';
import Register from './components/RegisterPage';
import Feed from './components/Feed';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logut';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<Register/>} />
        {/* Rutas protegidas */}
        <Route path="/feed" element={<PrivateRoute><Feed/></PrivateRoute>}/>
        <Route path="/post/:id" element={<PrivateRoute><Post/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
};

export default App