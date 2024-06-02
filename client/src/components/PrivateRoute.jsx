import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('username');
  return token != null;
};

const PrivateRoute = ({ children, redirectPath = "/" }) => {
  return isAuthenticated() ? children : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;