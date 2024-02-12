




import React from 'react';
import styled from 'styled-components';
import Bg from "../assets/img/pagetitle-bg.jpg";
import ImgBg from "../assets/img/row-bgimage-7.jpg";
import { Link } from 'react-router-dom';
import Single from "../assets/img/single-img-05.jpg";
import CTA from '../components/CTA';
import StyledComponent from "../components/AboutSection"



const Container = styled.div`
  margin-top: 40px;
`;

const DescriptionTitle = styled.h3`
  margin-bottom: 20px;
`;

const FeaturedIconBox = styled.div`
  margin-top: 20px;
`;

const FeaturedTitle = styled.h3`
  color: #000; /* You can adjust the color as needed */
`;


const FeaturedDesc = styled.div`
  color: #000; /* You can adjust the color as needed */
`;

const SingleImageWrapper = styled.div`
  margin-bottom: 30px;
`;

const ServiceComponent = () => {
  return (

   <>
   <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
   <div className="page-header-area-inner">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <div className="page-header-content-inner">
                  <div className="page-header-content">
                     <h2>Job Listings</h2>
                     <div>
                     </div>
                     <div className="breadcrumb-wrapper">
                        <span>
                           <Link to="/" title="Homepage">
                           Home</Link>
                        </span>
                        <span className="bread-sep">&nbsp;/&nbsp;</span>Job Listings
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
   <Container className="col-lg-12 content-area order-lg-2">












   <div className='row'>
    <div className="col-md-6">
        <div className="ttm_single_image-wrapper mb-30">
        <img className="img-fluid" src={Single} alt="services-img" />
        </div>
              </div>
        
                <div className="col-md-6">
                  <FeaturedTitle className="mb-20">Who We Are</FeaturedTitle>
                  <FeaturedDesc>
                  <p>At Ramos Recruiting Resources (RRR), We are Resourceful, Resilient and Reliable. The No.1 solution for a full staffing service, and highly skilled professionals who seek life-changing opportunities.</p>
                  <p>We place available jobs that are up-to-the-minute and relevant relating to any field. We don’t only offer jobs, we put job seekers first and help to build their career. </p>
                  <p>We differentiate ourselves from other agencies by aligning the optimal candidate with the right personality and skill set, to meet your organization needs. </p>
                  <p>RRR will pride itself in assisting organizations in the recruitment of the very best talents that match their various vacant positions while equipping talents with the tools needed to successfully transition into the organization’s roles as required.</p> 
                  </FeaturedDesc>
                </div>
</div>
</Container>
<section className="ttm-row cta-section bg-img7 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage:  `url(${ImgBg})` }}
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

<div className="row">
    {/* Repeat the following block for each service */}
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
      
        <div className="featured-content">
          <div className="featured-title">
            <h3>Our Mission</h3>
          </div>
          <div className="featured-desc">
          <p>To provide a staffing solution mechanism that offers a partnership-based workforce with innovative solution to address the challenges of unemployment.</p>

<p>To provide a platform where reputable employers can find and connect with the right candidate, with the required cutting-edge skills to join their team and grow the business.</p>

<p>To provide tailored solutions for everything ranging from transparent recruitment experience to using human capital management and employment – if we can over-deliver, we do!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
        
        <div className="featured-content">
          <div className="featured-title">
            <h3>Our Vision</h3>
          </div>
          <div className="featured-desc">
          <p>To become the key player in the recruiting industry using our existing integrated approach to create fulfillment for our clients, candidate, and staff. </p>

<p>To build a database of resources that will enable a job seeker to succeed in the marketplace.</p>

          </div>
        </div>
      </div>
    </div>
    {/* End of repeated block */}
  </div>
    
<CTA />
   </>
  );
};

export default ServiceComponent;


