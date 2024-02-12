





import React from 'react';
import styled from 'styled-components';

import Services1 from "../../assets/img/services-01.jpg";
import Services2 from "../../assets/img/services-02.jpg";
import Services3 from "../../assets/img/services-03.jpg";
import Services4 from "../../assets/img/services-04.jpg";





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
    <Section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="section-title style2 mb-0">
              <TitleHeader>
                <h3>Classic <span className="text-theme-SkinColor">Service</span></h3>
                <h2 className="title">We Understand Needs</h2>
              </TitleHeader>
              <div className="title-desc">
                <p>A process that involves everything from <span className="text-theme-SkinColor">identifying,</span> attracting, shortlisting, interviewing, selecting, hiring, screening &amp; onboarding employees.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-slider row slick_slider slick-arrows-style2 pt-20 mb_10 slick-initialized" dir="ltr">
        <div className="row">
  <div className="col-md-6">
    <div className="featured-imagebox featured-imagebox-services style1">
      <div className="featured-thumbnail">
        <img src={Services1} alt="" />
      </div>
      <div className="featured-content">
        <div className="featured-title">
          <h3><a href="/react/hireco/services_details">Manpower Supply</a></h3>
        </div>
        <div className="featured-desc">
          <p>We are quality personnel experts to the fields of expertise that needed for all kind of recruit projects</p>
        </div>
        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
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
          <h3><a href="/react/hireco/services_details">Forte Acquisition</a></h3>
        </div>
        <div className="featured-desc">
          <p>HireCo tens to accelerate innovation current and future based solutions to support customers.</p>
        </div>
        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
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
          <h3><a href="/react/hireco/services_details">Technical Services</a></h3>
        </div>
        <div className="featured-desc">
          <p>HireCo supplies variety of technical service including fabrication, design,  and commissioning</p>
        </div>
        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
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
          <h3><a href="/react/hireco/services_details">CV Services</a></h3>
        </div>
        <div className="featured-desc">
          <p>HireCo supplies variety of technical service including fabrication, design,  and commissioning</p>
        </div>
        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
      </div>
    </div>
  </div>
</div>
           </div>
      </div>
    </Section>
  );
};

export default Services;
