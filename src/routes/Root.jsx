








// Root.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of BrowserRouter
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import JobListing from '../pages/JobListing';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import SignUp from '../pages/SignUp';
import ForgotPwd from '../pages/ForgotPwd';
import ScrollToTop from '../components/ScrollToTop';
import Facebook from '../pages/facebook';
import Instagram from '../pages/instagram';
import Linkedin from '../pages/linkedin';
import  '../assets/css/main.css';
import  '../assets/css/styles.css';

const Root = () => {
  console.log('Rendering Root component');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/job_listing" element={<JobListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/forgot_password" element={<ForgotPwd />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/linkedin" element={<Linkedin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
