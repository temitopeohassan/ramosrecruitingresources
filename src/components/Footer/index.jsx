









import React from 'react'
import img from '../../assets/img/footer-logo.png'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
  FaInstagram,
  FaLinkedin
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';


const Footer = () => {
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
                        <p>HireCo is multi award-winning executive search, management recruiter and employer branding organization. Our customized recruiting process delivers fast &amp; accurate results</p>
                        <div className="d-flex align-items-center pt-15 pb-25">
                            <p className="fw-normal">Connect With Us: </p>
                            <div className="social-icons">
                                <ul className="social-icons list-inline">
                                    <li><Link to="/facebook" target="_blank" rel="noopener" aria-label="facebook"><i><FaFacebook /></i></Link></li>
                                    <li><Link to="/instagram" target="_blank" rel="noopener" aria-label="instagram"><i><FaInstagram /></i></Link></li>
                                    <li><Link to="/linkedin" target="_blank" rel="noopener" aria-label="linkedin"><i><FaLinkedin /></i></Link></li>
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
                            <li>
                                <div className="post-detail">
                                    <div className="cat-link">
                                        <a href="/react/hireco/blog_details">business</a>
                                    </div>
                                    <a href="/react/hireco/blog_details">Are  meetings falling to flat? Try these 10 tips</a>
                                </div>
                            </li>
                            <li>
                                <div className="post-detail">
                                    <div className="cat-link">
                                        <a href="/react/hireco/blog_details">business</a>
                                    </div>
                                    <a href="/react/hireco/blog_details">Are You Moving Businesses To Another State?</a>
                                </div>
                            </li>
                            <li>
                                <div className="post-detail">
                                    <div className="cat-link">
                                        <a href="/react/hireco/blog_details">business</a>
                                    </div>
                                    <a href="/react/hireco/blog_details">Shame: Does It Fine to Fit In The Workplace?</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                    <div className="widget widget-contact clearfix">
                        <h3 className="widget-title">Quick Contact!</h3>
                        <ul className="widget_contact_wrapper">
                            <li><i><FaPhone /></i><h3>Call Us On:</h3>+92 777 555 0000</li>
                            <li><i><FaMapMarkerAlt /></i><h3>Address:</h3>Suite 20 Golden Street USA</li>
                            <li><i><FaEnvelope /></i><h3>Email:</h3><a href="mailto:info@example.com">info@example.com</a></li>
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
                    <span className="copyright">Copyright © 2021 <a href="/react/hireco/">HireCo </a>All rights reserved.</span>
                    <ul className="footer-nav-menu">
                        <li><a href="/react/hireco/">Privacy &amp; Policy</a></li>
                        <li><a href="/react/hireco/">Terms &amp; Conditions</a></li>
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