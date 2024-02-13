











import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Bg from "../assets/img/pagetitle-bg.jpg";
import Services1 from "../assets/img/services-01.jpg";
import Services2 from "../assets/img/services-02.jpg";
import Services3 from "../assets/img/services-03.jpg";
import Services4 from "../assets/img/services-04.jpg";
import Services5 from "../assets/img/services-05.jpg";
import Services6 from "../assets/img/services-06.jpg";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize the Slick slider here
    if (sliderRef.current) {
      // Example initialization, customize it based on your needs
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // Add any other settings you need
      };

      // Initialize the Slick slider with the provided settings
      sliderRef.current.slickGoTo(0); // Go to the first slide
      sliderRef.current.slickSettings(settings);
    }
  }, []); // Empty dependency array means it runs once after the component mounts

      
  return (
    <>
  <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
   <div className="container">
      <div className="row">
         <div className="col-lg-12 text-center">
            <div className="page-header-content-inner">
               <div className="page-header-content">
                  <h2>Our Services</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>Our Services
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
<section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix" style={{ backgroundImage: 'url("images/bg-image/row-bgimage-1.png")' }}>
<div className="container">
   <div className="row">
      <div className="col-lg-11">
         <div className="section-title style2 mb-0">
            <div className="title-header">
               <h3>Classic <span className="text-theme-SkinColor">Service</span></h3>
               <h2 className="title">We Understand Needs</h2>
            </div>
            <div className="title-desc">
               <p>A process that involves everything from <span className="text-theme-SkinColor">identifying,</span> attracting, shortlisting, interviewing, selecting, hiring, screening &amp; onboarding employees.</p>
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
          <p>Ramos Recruiting Resources tens to accelerate innovation current and future based solutions to support customers.</p>
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
          <p>Ramos Recruiting Resources supplies variety of technical service including fabrication, design,  and commissioning</p>
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
          <p>Ramos Recruiting Resources supplies variety of technical service including fabrication, design,  and commissioning</p>
        </div>
        <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
      </div>
    </div>
  </div>
</div>



</div>
</div>
</section>
<section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="d-md-flex align-items-center justify-content-between">
               <div className="featured-icon-box icon-align-before-content style2">
                  <div className="featured-icon">
                     <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-recruitment-5"></i>
                     </div>
                  </div>
                  <div className="featured-content">
                     <div className="featured-title">
                        <h3>Incredible Recruitment &amp; Staffing Agency</h3>
                     </div>
                     <div className="featured-desc">
                        <p>We have over 30 years experience oft Business porro qusquam dol ipsum quia dolor sit amet.</p>
                     </div>
                  </div>
               </div>
               <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" to="/contact">Hiring Now!</Link>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}

export default Services