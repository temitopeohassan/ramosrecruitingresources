









import React from 'react'
import Services1 from "../../assets/img/services-01.jpg";
import Services2 from "../../assets/img/services-02.jpg";
import Services3 from "../../assets/img/services-03.jpg";
import Services4 from "../../assets/img/services-04.jpg";
import { Link } from 'react-router-dom';



const Services = () => {
  return (
   <>
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
   <div className="slick-slider row slick_slider slick-arrows-style2 pt-20 mb_10 slick-initialized" dir="ltr">
      <div className="slick-list">
         <div className="slick-track" style={{ width: '4800px', opacity: 1, transform: 'translate3d(-1200px, 0px, 0px)' }}>
         <div data-index="-2" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '600px' }}>
         <div>
            <div className="col-md-12" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
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
      </div>
      <div>
         <div className="col-md-12" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
         <div className="featured-imagebox featured-imagebox-services style1">
            <div className="featured-thumbnail">
               <img className="img-fluid" src={Services1} alt="" />
            </div>
            <div className="featured-content">
               <div className="featured-title">
                  <h3><a href="/react/hireco/services_details">Human Resource</a></h3>
               </div>
               <div className="featured-desc">
                  <p>The most daunting task of  a Human Resource department, which must need to meet deadline.</p>
               </div>
               <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
            </div>
         </div>
      </div>
   </div>
</div>
<div data-index="-1" tabindex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '600px' }}>
<div>
   <div className="col-md-12" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
   <div className="featured-imagebox featured-imagebox-services style1">
      <div className="featured-thumbnail">
         <img className="img-fluid" src={Services2} alt="" />
      </div>
      <div className="featured-content">
         <div className="featured-title">
            <h3><a href="/react/hireco/services_details">Executive Search</a></h3>
         </div>
         <div className="featured-desc">
            <p>We, HireCo specializes in recruiting  executives and other personnel for their client company</p>
         </div>
         <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
      </div>
   </div>
</div>
</div>
<div>
   <div className="col-md-12" tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
   <div className="featured-imagebox featured-imagebox-services style1">
      <div className="featured-thumbnail">
         <img className="img-fluid" src={Services4} alt="" />
      </div>
      <div className="featured-content">
         <div className="featured-title">
            <h3><a href="/react/hireco/services_details">Retained search</a></h3>
         </div>
         <div className="featured-desc">
            <p>HireCo tens to accelerate innovation current and future based solutions to support customers.</p>
         </div>
         <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href="/react/hireco/services_details">read more!</a>
      </div>
   </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
   </>
  )
}

export default Services