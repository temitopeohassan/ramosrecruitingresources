











import React from 'react'
import Bg from "../assets/img/pagetitle-bg.jpg";
import img from "../assets/img/country-01.jpg";
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="page-header-content-inner">
        <div className="page-header-content">
          <h2>Contact Us</h2>
          <div>
            </div>
            <div className="breadcrumb-wrapper">
              <span><Link to="/" title="Homepage">
                Home</Link></span>
                <span className="bread-sep">&nbsp;/&nbsp;</span>Contact Us</div>
                <div>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
    
  
    
    <section className="ttm-row map-section bg-theme-GreyColor clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title title-style-center_text pb-15">
              <div className="title-header">
                <h3>get in <span className="text-theme-SkinColor">touch</span></h3>
                <h2 className="title">Feel Free To Contact</h2>
                </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
            <div className="featured-imagebox box-shadow">
              <div className="featured-thumbnail">
                <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="featured-content p-30">
                  <div className="featured-title">
                    <h3>United States</h3>
                    </div>
                    <div className="featured-desc">
                      <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                        <li className="pb-5"><i><FaMapMarkerAlt /></i><div className="ttm-list-li-content">Addres: Newyork Envanto 45 HQ</div></li>
                        <li className="pb-5"> <i><FaPhone /></i><div className="ttm-list-li-content">Call Us:123 456 7890</div></li>
                        <li><i><FaEnvelope /></i> <div className="ttm-list-li-content"><a href="mailto:info@example.com">Email:info@example.com</a></div></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col-lg-6">
                  <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-2 p-40 p-lg-30 mt-lg-30">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                      </div>
                      <div className="layer-content">
                        <form id="contact_form" className="contact_form wrap-form">
                          <div className="row ttm-boxes-spacing-10px">
                            <div className="col-md-12 ttm-box-col-wrapper"><label><input name="name" type="text" placeholder="Your Name" required="" /></label></div>
                            <div className="col-md-6 ttm-box-col-wrapper"><label><input name="email" type="text" placeholder="Your Email" required="" /></label></div>
                            <div className="col-md-6 ttm-box-col-wrapper"><label><input name="subject" type="text" placeholder="Subject" required="" /></label></div>
                            <div className="col-md-12 ttm-box-col-wrapper"><label><input name="phone" type="text" placeholder="Phone Number" required="" /></label></div>
                            <div className="col-md-12 ttm-box-col-wrapper"><label><textarea name="message" rows="7" placeholder="Message" required=""></textarea></label></div>
                            </div>
                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
 ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
    </>
  )
}

export default Contact