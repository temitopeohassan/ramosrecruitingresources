




import React from 'react';
import styled from 'styled-components';
import Bg from "../assets/img/pagetitle-bg.jpg";
import ImgBg from "../assets/img/row-bgimage-7.jpg";
import { Link } from 'react-router-dom';
import Single from "../assets/img/col-bgimage-1.jpg";
import { FaCircleCheck } from "react-icons/fa6";


const About = () => {
  return (

   <>
   <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
   <div className="page-header-area-inner">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="page-header-content-inner">
                  <div className="page-header-content">
                     <h2>About Us</h2>
                     <div>
                     </div>
                     <div className="breadcrumb-wrapper">
                        <span>
                           <Link to="/" title="Homepage">
                           Home</Link>
                        </span>
                        <span className="bread-sep">&nbsp;/&nbsp;</span>About Us
                     </div>
                     <div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   <section className="ttm-row about-section bg-layer-equal-height clearfix">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="pb-70 pb-md-50 pr-60 pr-md-0">
              <div className="section-title">
                <div className="title-header">
                  <h2 className="title">Who We Are</h2>
                </div>
                <div className="title-desc">
                  <p>At Ramos Recruiting Resources (RRR), We are Resourceful, Resilient and Reliable. The No.1 solution for a full staffing service, and highly skilled professionals who seek life-changing opportunities. We place available jobs that are up-to-the-minute and relevant relating to any field. We don’t only offer jobs, we put job seekers first and help to build their career. We differentiate ourselves from other agencies by aligning the optimal candidate with the right personality and skill set, to meet your organization needs. RRR will pride itself in assisting organizations in the recruitment of the very best talents that match their various vacant positions while equipping talents with the tools needed to successfully transition into the organization’s roles as required.

</p>
                </div>
              </div>
              
              <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark" to="/job_listing">Find A Jobs!</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage:  `url(${Single})` }}></div>
              <div className="layer-content"></div>
              <img src={Single} className="img-fluid col-bg-img-res" alt="bgimage" />
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="ttm-row cta-section bg-img7 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage:  `url(${ImgBg})`, backgroundAttachment: 'fixed',
  height: '100vh' }}
>
    <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
    <div className="container">
        <div className="row">
        <div className="col-lg-8 m-auto row-title">
            <div className="section-title title-style-center_text">
                <div className="title-header">
                    <h3><span className="text-theme-SkinColor">More than 50,000 happy client</span></h3>
                    <h2 className="title">Get In Touch With Recruitment Staffing<span className="text-theme-SkinColor"> Agency!</span></h2>
                    </div>
                    </div>
                    <div className="text-center pt-10">
                        <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" to="/contact">contact us</Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
                        <section className="ttm-row clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="column-content">
              <h3>Our Mission</h3>
              <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                  <li><i><FaCircleCheck /></i><div className="ttm-list-li-content">To provide a staffing solution mechanism that offers a partnership-based workforce with innovative solution to address the challenges of unemployment. </div></li>
                  <li><i><FaCircleCheck /></i><div className="ttm-list-li-content">To provide a platform where reputable employers can find and connect with the right candidate, with the required cutting-edge skills to join their team and grow the business.</div></li>
                  <li><i><FaCircleCheck /></i><div className="ttm-list-li-content">To provide tailored solutions for everything ranging from transparent recruitment experience to using human capital management and employment – if we can over-deliver, we do!</div></li>
                </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="column-content">
              <h3>Our Vision</h3>
              <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                  <li><i><FaCircleCheck /></i><div className="ttm-list-li-content">To become the key player in the recruiting industry using our existing integrated approach to create fulfillment for our clients, candidate, and staff. </div></li>
                  <li><i><FaCircleCheck /></i><div className="ttm-list-li-content">To build a database of resources that will enable a job seeker to succeed in the marketplace.</div></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    

   </>
  );
};

export default About;


