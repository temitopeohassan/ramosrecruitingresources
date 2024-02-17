





import React from 'react';
import styled from 'styled-components';

import Services1 from "../../assets/img/services-01.jpg";
import Services2 from "../../assets/img/services-02.jpg";
import Services3 from "../../assets/img/services-03.jpg";
import Services4 from "../../assets/img/services-04.jpg";
import { Link } from 'react-router-dom';





// Styled components
const Section = styled.section`
  background-image: url('images/bg-image/row-bgimage-1.png');
`;

const TitleHeader = styled.div`
  h3 {
    color: var(--theme-SkinColor);
  }
`;

const FeaturedImageBox = styled.div`
  /* Define your styles for featured image box */
`;

const FeaturedContent = styled.div`
  /* Define your styles for featured content */
`;

const Btn = styled.a`
  /* Define your button styles */
`;

const Slide = styled.div`
  width: 600px; /* Adjust width as needed */
`;

// React component
const Services = () => {
  return (
    <section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix" style={{ backgroundImage: 'url("images/bg-image/row-bgimage-1.png")' }}>
    <div className="container">
       <div className="row">
          <div className="col-lg-11">
             <div className="section-title style2 mb-0">
                <div className="title-header">
                   <h3>Our <span className="text-theme-SkinColor">Services</span></h3>
                   <h2 className="title">We Understand Needs</h2>
                </div>
              
             </div>
          </div>
       </div>
       <div className="slick-slider row slick_slider  pt-20 mb_10 slick-initialized" dir="ltr">
       <div className="row">
      <div className="col-md-6">
        <div className="featured-imagebox featured-imagebox-services style1">
          <div className="featured-thumbnail">
            <img src={Services1} alt="" />
          </div>
          <div className="featured-content">
            <div className="featured-title">
              <h3><Link to="/services_details">Manpower Supply</Link></h3>
            </div>
            <div className="featured-desc">
              <p>We are quality personnel experts to the fields of expertise that needed for all kind of recruit projects</p>
            </div>
            <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" to="/services_details">read more!</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-imagebox featured-imagebox-services style1">
          <div className="featured-thumbnail">
            <img className="img-fluid" src={Services2} alt="" />
          </div>
          <div className="featured-content">
            <div className="featured-title">
              <h3><Link to="/services_details">Technical Services</Link></h3>
            </div>
            <div className="featured-desc">
              <p>Ramos Recruiting Resources tens to accelerate innovation current and future based solutions to support customers.</p>
            </div>
            <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" to="/services_details">read more!</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-imagebox featured-imagebox-services style1">
          <div className="featured-thumbnail">
            <img className="img-fluid" src={Services3} alt="" />
          </div>
          <div className="featured-content">
            <div className="featured-title">
              <h3><Link to="/services_details">Executive Search</Link></h3>
            </div>
            <div className="featured-desc">
              <p>Ramos Recruiting Resources supplies variety of technical service including fabrication, design,  and commissioning</p>
            </div>
            <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" to="/services_details">read more!</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="featured-imagebox featured-imagebox-services style1">
          <div className="featured-thumbnail">
            <img className="img-fluid" src={Services4} alt="" />
          </div>
          <div className="featured-content">
            <div className="featured-title">
              <h3><Link to="/services_details">CV Services</Link></h3>
            </div>
            <div className="featured-desc">
              <p>Ramos Recruiting Resources supplies variety of technical service including fabrication, design,  and commissioning</p>
            </div>
            <Link  className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" to="/services_details">read more!</Link>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </div>
    </div>
    </section>
  );
};

export default Services;
