import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import BreadScrumb from './component/BreadScrumb';
import Login from './component/Login';
import SignUp from './component/SignUp';
import ForgotPass from './component/ForgotPass';
import HomeDefault from './component/HomeDefault';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="bread" element={<BreadScrumb />} />
        </Route>
        <Route path="/home" element={<Homepage />} >
          <Route path='' element={<HomeDefault />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPass />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </Router>
  );
}

export default App;
