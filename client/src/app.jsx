import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import LogIn from './components/LoginPage';
import Register from './components/RegisterPage';
import Feed from './components/Feed';

const isAuthenticated = () =>{
  const token = localStorage.getItem('username');
  if(token != null){
    return false
  }
  else return true
}

const PrivateRoute = ({ component: Component, redirectPath,...rest }) => (
    isAuthenticated()
      ? <Component {...rest} />
      : <Navigate to={redirectPath} replace />
);

console.log(isAuthenticated())

//localStorage.removeItem('miDato');
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} /> 
        {/*Rutas protegidas*/}
        <Route path='/feed' element={<PrivateRoute component={Feed} redirectPath="/" />} />
      </Routes>
    </Router>
  );
};

export default App;