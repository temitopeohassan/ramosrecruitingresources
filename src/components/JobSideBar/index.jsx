import React from 'react';

const JobSidebar = () => {
  return (
    <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
      <div className="job_list-widget">
        <aside className="widget job-widget">
          <h6 className="widget-title"><i className="ti ti-files"></i>Job Informations</h6>
          <ul>
            <li className="d-flex"><b className="mr-5">Job Type:</b>Part Time</li>
            <li className="d-flex"><b className="mr-5">Location:</b>California</li>
            <li className="d-flex"><b className="mr-5">Offered Salary:</b>$22k - $34k</li>
            <li className="d-flex"><b className="mr-5">Posted:</b>1 Week Ago</li>
            <li className="d-flex"><b className="mr-5">Experience:</b>3 Years</li>
            <li className="d-flex"><b className="mr-5">Industry:</b>Design</li>
            <li className="d-flex"><b className="mr-5">Qualification:</b>Associate Degree</li>
            <li className="d-flex"><b className="mr-5">position:</b>2</li>
          </ul>
        </aside>
        <br />
        <aside className="widget form-widget">
          <h6 className="widget-title"><i className="ti ti-email"></i>Send Us Message</h6>
          <form className="wrap-form">
            <label><input name="name" type="text" placeholder="Your Name" required /></label>
            <label><input name="email" type="text" placeholder="Your Email" required /></label>
            <label><textarea name="message" rows="3" placeholder="Message" required></textarea></label>
            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
          </form>
        </aside>
        <br />
        <aside className="widget location-widget p-0">
          <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1578680778274!5m2!1sen!2sin"></iframe>
          <div className="p-20">
            <div><span className="text-theme-SkinColor"><i className="fa fa-map-marker-alt mr-10"></i></span>24 Fifth st, Los Angeles, USA</div>
            <div><a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@example.com</a></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JobSidebar;
