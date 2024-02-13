











import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Bg from "../assets/img/pagetitle-bg.jpg";
import Bg2 from "../assets/img/col-bgimage-7.jpg";
import Services1 from "../assets/img/services-01.jpg";
import Services2 from "../assets/img/services-02.jpg";
import Services3 from "../assets/img/single-img-03.jpg";
import Services4 from "../assets/img/services-04.jpg";
import Services5 from "../assets/img/services-05.jpg";
import Services6 from "../assets/img/services-06.jpg";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaComments } from "react-icons/fa6";

const ServicesDetails = () => {
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
                  <h2>Services Details</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span><span><Link to="/services" title="Services">Our Services</Link></span><span className="bread-sep">&nbsp;/&nbsp;</span>Details
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
<div className="container" style={{ paddingTop: '30px' }} />
<div className="container">
   <div className='row'>
   <div className="col-lg-4 widget-area">
      <div className="sidebar-right">
        <aside className="widget widget-nav-menu">
          <ul className="widget-nav-menu">
            <li className="widget-nav-menu"><Link className="active" to="/services_details">Manpower Supply</Link></li>
            <li className="widget-nav-menu"><Link to="/services_details">Technical Services</Link></li>
            <li><Link to="/services_details">Executive Search</Link></li>
            <li><Link to="/services_details">CV Services</Link></li>
          </ul>
        </aside>
        
        <aside className="widget widget-banner">
          <div className="ttm-col-bgcolor-yes bg-theme-DarkColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-30 pb-50 pt-45">
            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor" style={{ backgroundImage:  `url(${Bg2})` }}>
              <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
            </div>
            <div className="layer-content text-center text-theme-WhiteColor">
              <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                <FaComments />
              </div>
              <h3>Do You Need Any Help?</h3>
              <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
              <ul>
                <li>+1 832 510 3293</li>
                <li>careers@ramosrr.com</li>
              </ul>
              <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" to="/contact">appoinments!</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div className="col-lg-8 content-area order-lg-2">
      <div className="ttm-service-single-content-area">
        <div className="ttm_single_image-wrapper">
          <img className="img-fluid" src={Services3} alt="services-img" />
        </div>
        <div className="ttm-service-description mt-40">
          <h3 className="mb-20">Description For Our Service</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. m suspendisse ultrices gravida. Risus commodo vivm suspendisse ultrices gravida. ipsum suspendisse ultrices gravida.</p>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                <div className="featured-icon">
                  <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                  </div>
                </div>
               
              </div>
            </div>
            {/* Add similar divs for other services */}
          </div>
         
            <br />         
        </div>
      </div>
    </div>

    </div>
   </div>

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

export default ServicesDetails