







import React from 'react';
import { FaSuitcase, FaList, FaPhone, FaCircleCheck, FaEnvelope } from "react-icons/fa6";
import Bg from "../assets/img/pagetitle-bg.jpg";
import Candidate from "../assets/img/01.jpg";
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <>
 <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
   <div className="container">
      <div className="row">
         <div className="col-lg-12 text-center">
            <div className="page-header-content-inner">
               <div className="page-header-content">
                  <h2>User Profile</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>User Profile
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
   <br />
              <aside className="widget candidate-widget">
                <h6 className="widget-title">
                  <FaList /> Candidate Informations
                </h6>
                <br />
                <ul>
                  <li className="d-flex">
                    <b className="mr-5">Category:</b>
                    <span>Webdesigner </span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Experience:</b>
                    <span>3 to 5 Years</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Expected Salary:</b>
                    <span>$ 20k To $ 30k</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Marital status:</b>
                    <span>Single</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Experience:</b>
                    <span>3 Years</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Language:</b>
                    <span>English, French</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Qualification:</b>
                    <span>Associate Degree</span>
                  </li>
                  <li className="d-flex">
                    <b className="mr-5">Type:</b>
                    <span>Full Time</span>
                  </li>
                </ul>
              </aside>
              <br />
              <aside className="widget form-widget">
                <h6 className="widget-title">
                  <FaEnvelope /> Contact Candidate
                </h6>
                <br />
                <form className="wrap-form">
                  <label>
                    <input name="name" type="text" placeholder="Name" required />
                  </label>
                  <label>
                    <input name="email" type="text" placeholder="Email" required />
                  </label>
                  <label>
                    <input name="subject" type="text" placeholder="Subject" required />
                  </label>
                  <label>
                    <textarea name="message" rows="4" placeholder="Message" required></textarea>
                  </label>
                  <button
                    className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                    type="submit"
                  >
                    send a message!
                  </button>
                </form>
              </aside>
            </div>
    </div>
   <div className="col-lg-8 content-area">
   <div className="candidate-data">
      <div className="candidate-img">
        <img src={Candidate} alt="Candidate" />
      </div>
      <div className="candidate-caption">
        <h6>Jimmy Divison</h6>
        <span>Web Designer Ul/Ux</span>
        <div className="meta-line">
          <span>
            <FaSuitcase /> UX/UI Designer
          </span>
          <span>
            <FaPhone /> (+01)123 456 789
          </span>
        </div>
      </div>
    </div>
     <br />
    <div className="overview-box">
      <div className="title">
        <h6>About me</h6>
      </div>
      <div className="desc">
        <p>
          Dolor sed viverra ipsum nunc. In ornare quam viverra orci. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Non diam phasellus vestibulum lorem sed risus ultricies. Lacinia at quis risus sed vulputate odio ut enim blandit. Suspendisse ultrices gravida dictum fusce ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <br />
    <div className="overview-box">
      <div className="title">
        <h6>Education Details</h6>
      </div>
      <div className="desc">
        <div className="candidate-timeline">
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Internatinal University</h6>
              <span className="timeline-year">2009-2012</span>
            </div>
            <div className="timeline-body">
              <h6>Bachlors in Fine Arts</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Internatinal University</h6>
              <span className="timeline-year">2012-2015</span>
            </div>
            <div className="timeline-body">
              <h6>Master In Fine Arts</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Diploma In Fine Arts</h6>
              <span className="timeline-year">2015-2018</span>
            </div>
            <div className="timeline-body">
              <h6>Imperieal Institute of Art Direction</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
<br />
<div className="overview-box">
      <div className="title">
        <h6>Work Experience</h6>
      </div>
      <div className="desc">
        <div className="candidate-timeline">
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Senior Software Engineer</h6>
              <span className="timeline-year">2009-2012</span>
            </div>
            <div className="timeline-body">
              <h6>Clothing Store</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Self Employe Professional</h6>
              <span className="timeline-year">2012-2015</span>
            </div>
            <div className="timeline-body">
              <h6>Fashion Store</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h6>Self Employe Professional</h6>
              <span className="timeline-year">2014-2015</span>
            </div>
            <div className="timeline-body">
              <h6>Jewelry Store</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="overview-box">
        <div className="title">
          <h6>Additional Skills</h6>
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
    </>
  );
};

export default UserProfile;
