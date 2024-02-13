











import React from 'react'
import JobSidebar from '../components/JobSideBar';
import Bg from "../assets/img/pagetitle-bg.jpg";
import Widget from "../assets/img/col-bgimage-7.jpg";
import Job1 from "../assets/img/job-01.png";
import Job2 from "../assets/img/job-02.png";
import Job3 from "../assets/img/job-03.png";
import Job4 from "../assets/img/job-04.png";
import Job5 from "../assets/img/job-05.png";
import Job6 from "../assets/img/job-06.png";
import { Link } from 'react-router-dom';
import { FaLocationDot, FaList, FaCircleCheck, FaEnvelope } from "react-icons/fa6";


const JobDetails = () => {
  return (
    <>
 <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
   <div className="container">
      <div className="row">
         <div className="col-lg-12 text-center">
            <div className="page-header-content-inner">
               <div className="page-header-content">
                  <h2>Job Details</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>
                     <span><Link to="/job_listing" title="Job Listings">Job Listings</Link></span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>Job Details
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

<br /><br />
<div className="container">
   <div className='row'>
   <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
      <div className="job_list-widget">
        <aside className="widget job-widget">
          <h6 className="widget-title"><FaList /> Job Informations</h6>
          <br />
          <ul>
            <li className="d-flex"><b className="mr-5">Job Type:</b>Part Time</li>
            <li className="d-flex"><b className="mr-5">Location:</b>California</li>
            <li className="d-flex"><b>Offered Salary:</b>$22k - $34k</li>
            <li className="d-flex"><b className="mr-5">Posted:</b>1 Week Ago</li>
            <li className="d-flex"><b className="mr-5">Experience:</b>3 Years</li>
            <li className="d-flex"><b className="mr-5">Industry:</b>Design</li>
            <li className="d-flex"><b>Qualification:</b>Associate Degree</li>
            <li className="d-flex"><b className="mr-5">position:</b>2</li>
          </ul>
        </aside>
        <br />
        <aside className="widget form-widget">
          <h6 className="widget-title"><FaEnvelope /> Send Us Message</h6>
          <br />
          <form className="wrap-form">
            <label><input name="name" type="text" placeholder="Your Name" required /></label>
            <label><input name="email" type="text" placeholder="Your Email" required /></label>
            <label><textarea name="message" rows="3" placeholder="Message" required></textarea></label>
            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
          </form>
        </aside>
        <br />
      
      </div>
    </div>
   <div className="col-lg-8 content-area">
      <div className="row">
      <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor m-0">
      <div className="featured-thumbnail">
        <img src={Job1} alt="Job Thumbnail" />
      </div>
      <div className="featured-content">
        <div className="featured-title">
          <h3>Vacancy For the Charted Accountant</h3>
        </div>
        <div className="featured-desc">
          <p>Published 2Days Ago.</p>
        </div>
        <div className="featured-bottom">
          <div className="job-meta">
            <span><FaLocationDot /> California</span>
            <span><FaList /> Automotive Jobs</span>
          </div>
          <div className="job-time">
            <span className="green">full time</span>
          </div>
        </div>
      </div>
    </div>
      </div>
     <br />
     <div className="row">

     <div className="col-lg-12 col-md-12">
     <br />
      <div className="overview-box">
        <div className="title">
          <h6>Job Description :</h6>
        </div>
        <div className="desc">
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ”</p>
          <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ”</p>
        </div>
      </div>
      <br />
      <div className="overview-box">
        <div className="title">
          <h6>Required Knowledge, Skills, and Abilities :</h6>
        </div>
        <div className="desc">
          <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
            <li><FaCircleCheck /><div className="ttm-list-li-content">You have at least 3 years’ experience working as a Product Designer.</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">You have experience using Sketch and InVision or Framer X</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">You are familiar using Jira and Confluence in your workflow</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">You have some previous experience working in an agile environment</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">You are familiar using Jira and Confluence in your workflow</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">You have at least 3 years’ experience working as a Product Designer.</div></li>
          </ul>
        </div>
      </div>
      <br />
      <div className="overview-box">
        <div className="title">
          <h6>Skills Required</h6>
        </div>
        <div className="desc">
          <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
            <li><FaCircleCheck /><div className="ttm-list-li-content">HTML, CSS & Scss</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">Javascript</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">PHP</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">Photoshop</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">Illustrator</div></li>
            <li><FaCircleCheck /><div className="ttm-list-li-content">Wordpress & elementor</div></li>
          </ul>
        </div>
      </div>
      <br />
      
    </div> 
     </div>
   </div>
</div>
</div>
    </>
  )
}

export default JobDetails