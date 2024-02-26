









import React, { useState, useEffect } from 'react';
import img from '../../assets/img/footer-logo.png'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures the effect runs only once


  return (
   <>
  

















<footer className="footer widget-footer bg-theme-DarkColor text-theme-WhiteColor clearfix">
    <div className="second-footer">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                    <div className="widget widget_text clearfix">
                        <div className="footer-logo">
                            <img id="footer-logo-img" className="img-fluid auto_size" height="40" width="162" src={img} alt="footer-logo" />
                        </div>
                        <p>At Ramos Recruiting Resources (RRR), We are Resourceful, Resilient and Reliable. The No.1 solution for a full staffing service, and highly skilled professionals who seek life-changing opportunities.<Link to='/about'>Read More</Link></p>
                        <div className="d-flex align-items-center pt-15 pb-25">
                            <p className="fw-normal">Connect With Us: </p>
                            <div className="social-icons">
                                <ul className="social-icons list-inline">
                                    <li><Link to="/facebook" target="_blank" rel="noopener" aria-label="facebook"><i><FaFacebook /></i></Link></li>
                                    <li><Link to="/instagram" target="_blank" rel="noopener" aria-label="instagram"><i><FaInstagram /></i></Link></li>
                                    <li><Link to="/linkedin" target="_blank" rel="noopener" aria-label="linkedin"><i><FaLinkedin /></i></Link></li>
                                    <li><Link to="/twitter" target="_blank" rel="noopener" aria-label="twitter"><i><FaTwitter /></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" href="/contact">Request A Free Quotes</a>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                    <div className="widget widget-recent-post clearfix">
                        <h3 className="widget-title">Menu</h3>
                        <ul className="widget-post ttm-recent-post-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/job_listing">Job Listings</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                    <div className="widget widget-contact clearfix">
                        <h3 className="widget-title">Quick Contact!</h3>
                        <ul className="widget_contact_wrapper">
                            <li><i><FaPhone /></i><h3>Call Us On:</h3>+1 832 510 3293</li>
                            <li><i><FaMapMarkerAlt /></i><h3>Address:</h3>5722 Strong Creek Drive Houston TX 770</li>
                            <li><i><FaEnvelope /></i><h3>Email:</h3><Link to="#">careers@ramosrr.com</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom-footer-text">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6">
                    <span className="copyright">Copyright © {currentYear} <a href="/">Ramos Recruiting Resources </a>All rights reserved.</span>
                    <ul className="footer-nav-menu">
                        <li><a href="/privacy">Privacy &amp; Policy</a></li>
                        <li><a href="/terms_conditions">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 d-lg-flex align-items-center justify-content-between">
                    <form id="subscribe-form" className="subscribe-form">
                        <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                            <input type="email" name="EMAIL" id="txtemail" placeholder="Enter Your Email Address..." />
                            <button className="submit ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor" type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</footer>
   </>
  )
}

export default Footer