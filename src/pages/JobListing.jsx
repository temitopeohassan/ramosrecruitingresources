











import React from 'react'

import Bg from "../assets/img/pagetitle-bg.jpg";
import Widget from "../assets/img/col-bgimage-7.jpg";
import Job1 from "../assets/img/job-01.png";
import Job2 from "../assets/img/job-02.png";
import Job3 from "../assets/img/job-03.png";
import Job4 from "../assets/img/job-04.png";
import Job5 from "../assets/img/job-05.png";
import Job6 from "../assets/img/job-06.png";
import { Link } from 'react-router-dom';


const JobListing = () => {
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
<div className="container" style={{ paddingTop: '30px' }} />;
<div className="form-section clearfix">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg border rounded p-40 p-lg-20 mt_70 mt-lg-50">
               <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
               </div>
               <div className="layer-content">
                  <form id="search_Form" className="search_Form wrap-form" method="post" action="#" data-mailchimp="true">
                     <label><i className="ti ti-search"></i><input type="text" id="filter" placeholder="Job Title or Keywords" /></label>
                     <label><i className="ti ti-location-pin"></i><input type="email" name="EMAIL" id="txtemail" placeholder="location" /></label>
                     <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Find Jobs</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="container">
   <div className='row'>
      <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
         <div className="job_list-widget">
            <aside className="widget job-widget">
               <h3 className="widget-title"><i className="flaticon flaticon-calendar-1"></i>Date Posted</h3>
               <form id="list1" className="list-filter">
                  <div><label className="radio"><input type="radio" name="post_date" value="Today" />Today</label><label className="radio"><input type="radio" name="post_date" value="Last 7 days" checked="" />Last 7 days</label><label className="radio"><input type="radio" name="post_date" value="Last 14 days" />Last 14 days</label><label className="radio"><input type="radio" name="post_date" value="Last 21 days" />Last 21 days</label><label className="radio"><input type="radio" name="post_date" value="Last 30 days" />Last 30 days</label></div>
               </form>
            </aside>
            <aside className="widget job-widget">
               <h3 className="widget-title"><i className="flaticon flaticon-subfolder-1"></i>Categories</h3>
               <form id="list2" className="list-filter">
                  <div><label className="radio"><input type="radio" name="categories" value="Digital Marketing" checked="" />Digital Marketing</label><label className="radio"><input type="radio" name="categories" value="Charity &amp; Voluntary" />Charity &amp; Voluntary</label><label className="radio"><input type="radio" name="categories" value="IT Contractor" />IT Contractor</label><label className="radio"><input type="radio" name="categories" value="Estate Agency" />Estate Agency</label><label className="radio"><input type="radio" name="categories" value="Graduate" />Graduate</label></div>
               </form>
            </aside>
            <aside className="widget job-widget">
               <h3 className="widget-title"><i className="flaticon flaticon-expert"></i>Experince</h3>
               <form id="list3" className="list-filter">
                  <div><label className="radio"><input type="radio" name="ex_year" value="0Year to 1Year" />0Year to 1Year</label><label className="radio"><input type="radio" name="ex_year" value="1Year to 2Year" />1Year to 2Year</label><label className="radio"><input type="radio" name="ex_year" value="2Year to 3Year" />2Year to 3Year</label><label className="radio"><input type="radio" name="ex_year" value="3Year or more" checked="" />3Year or more</label></div>
               </form>
            </aside>
            <aside className="widget job-widget">
               <h3 className="widget-title"><i className="flaticon flaticon-gender"></i>Gender</h3>
               <form id="list4" className="list-filter">
                  <div><label className="radio"><input type="radio" name="gender" value="male" checked="" />male</label><label className="radio"><input type="radio" name="gender" value="female" />female</label></div>
               </form>
            </aside>
         </div>
         <aside className="widget widget-download">
            <ul className="download">
               <li><a href="#">Download.pdf</a><i className="ti ti-files"></i></li>
               <li><a href="#">Download.txt</a><i className="ti ti-files"></i></li>
            </ul>
         </aside>
         <aside className="widget widget-banner text-theme-WhiteColor">
            <div className="ttm-col-bgcolor-yes bg-theme-DarkColor text-theme-WhitColor col-bg-img-seven ttm-col-bgimage-yes ttm-bg p-40">
               <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor" style={{ backgroundImage:  `url(${Widget})` }}>
               <div className="ttm-col-wrapper-bg-layer-inner bg-theme-DarkColor"></div>
            </div>
            <div className="layer-content text-center">
               <div className="widget-banner-inner">
                  <h3 className="mb-15">Make a Difference with Online Resume!</h3>
                  <p className="mb-30">Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
                  <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" href="/react/hireco/">appoinments!</a>
               </div>
            </div>
      </div>
      </aside>
   </div>
   <div className="col-lg-8 content-area">
      <div className="row">
         <div className="col-md-12">
            <div className="showing-result-block d-sm-flex align-items-center justify-content-between">
               <span className="showing-result">Showing 1–10 of 50 Jobs Results :</span>
               <form>
                  <div className="sort-by">
                     Sort By:
                     <select>
                        <option value="" disabled="" selected="">A to Z</option>
                        <option value="popularity">a</option>
                        <option value="rating">b</option>
                        <option value="date">c</option>
                        <option value="price">d</option>
                        <option value="price-desc">e</option>
                     </select>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job1} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details">Vacancy For the Charted Account</a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="green">full time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail">
                  <img src={Job2} alt=""/>
                  <div className="required-tag">Urgent</div>
               </div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details">Vacancy For the Business Analyst</a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="danger-color">part time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job3} alt=""/></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details"><a href="/react/hireco/Job_details">Opening For Social Media Manager</a></a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="deep-orange">full time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job4} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details"><a href="/react/hireco/Job_details">Opening For The Content Creator</a></a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="green">full time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job5} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details">Job Vacancy For the Bank Manager</a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="danger-color">part time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job6} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details">Vacancy For the Human Resource</a> </h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="blue">part time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail">
                  <img src={Job2} alt="" />
                  <div className="required-tag">Urgent</div>
               </div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details">Vacancy For the Business Analyst</a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="danger-color">part time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job3} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details"><a href="/react/hireco/Job_details">Opening For Social Media Manager</a></a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="deep-orange">full time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12 col-md-12">
            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
               <div className="featured-thumbnail"><img src={Job4} alt="" /></div>
               <div className="featured-content">
                  <div className="featured-title">
                     <h3><a href="/react/hireco/Job_details"><a href="/react/hireco/Job_details">Opening For The Content Creator</a></a></h3>
                  </div>
                  <div className="featured-desc">
                     <p>Published 2Days Ago.</p>
                  </div>
                  <div className="featured-bottom">
                     <div className="job-meta"><span><i className="fa fa-map-marker-alt"></i>California</span><span><i className="fa fa-filter"></i>Automotive Jobs</span></div>
                     <div className="job-time"><span className="green">full time</span></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-12">
            <div className="job-pagination-block"><a className="page-nav-link">prev</a><a className="page-nav-link current">1</a><a className="page-nav-link" href="#">2</a><a className="page-nav-link" href="#">3</a><a className="page-nav-link" href="#">....</a><a className="page-nav-link">next</a></div>
         </div>
      </div>
   </div>
</div>
</div>
    </>
  )
}

export default JobListing