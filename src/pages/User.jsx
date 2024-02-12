







import React from 'react';
import styled from 'styled-components';
import Bg from "../assets/img/pagetitle-bg.jpg";
import { Link } from 'react-router-dom';


// Styled components
const SidebarContainer = styled.div`
    padding: 80px 0;
`;

const Container = styled.div`
    padding: 100px 0;
`;

const WidgetArea = styled.div`
    background-color: #f8f9fa;
    padding: 20px;
    border: 1px solid #dee2e6;
`;

const ContentArea = styled.div`
    background-color: #f8f9fa;
    padding: 20px;
    border: 1px solid #dee2e6;
`;

const User = () => {
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
    <Container className="container">
        <SidebarContainer className="ttm-row sidebar job-sidebar clearfix">
           
                <div className="row">
                    <WidgetArea className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                        <div className="job_list-widget">
                            <aside className="widget candidate-widget">
                                <h3 className="widget-title"><i className="ti ti-files"></i>Candidate Informations</h3>
                                <ul>
                                    <li className="d-flex"><b className="mr-5">Category:</b><span>Webdesigner / Webdevloper</span></li>
                                    <li className="d-flex"><b className="mr-5">Experience:</b><span>3 to 5 Years</span></li>
                                    <li className="d-flex"><b className="mr-5">Expected Salary:</b><span>$ 20k To $ 30k</span></li>
                                    <li className="d-flex"><b className="mr-5">Marital status:</b><span>Singal</span></li>
                                    <li className="d-flex"><b className="mr-5">Experience:</b><span>3 Years</span></li>
                                    <li className="d-flex"><b className="mr-5">Language:</b><span>English, French</span></li>
                                    <li className="d-flex"><b className="mr-5">Qualification:</b><span>Associate Degree</span></li>
                                    <li className="d-flex"><b className="mr-5">Type:</b><span>Full Time</span></li>
                                </ul>
                            </aside>
                            <aside className="widget form-widget">
                                <h3 className="widget-title"><i className="ti ti-email"></i>Contact Candidate</h3>
                                <form className="wrap-form">
                                    <label><input name="name" type="text" placeholder="Name" required /></label>
                                    <label><input name="email" type="text" placeholder="Email" required /></label>
                                    <label><input name="subject" type="text" placeholder="Subject" required /></label>
                                    <label><textarea name="message" rows="4" placeholder="Message" required ></textarea></label>
                                    <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                </form>
                            </aside>
                            {/* Add other nested components */}
                        </div>
                    </WidgetArea>
                    </div>
                    </SidebarContainer>
                    <ContentArea className="col-lg-8 content-area">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="candidate-data">
                                    <div className="candidate-img"><img src="images/candidate/01.jpg" alt="Candidate Image" /></div>
                                    <div className="candidate-caption">
                                        <h5>Jimmy Divison</h5>
                                        <span>Web Designer Ul/Ux</span>
                                        <div className="meta-line">
                                            <span><i className="ti ti-bag"></i> UX/UI Designer</span>
                                            <span><i className="ti ti-headphone"></i> (+01)123 456 789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="overview-box">
                                    <div className="title"><h5>About me</h5></div>
                                    <div className="desc">
                                        <p>Dolor sed viverra ipsum nunc. In ornare quam viverra orci. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Non diam phasellus vestibulum lorem sed risus ultricies. Lacinia at quis risus sed vulputate odio ut enim blandit. Suspendisse ultrices gravida dictum fusce ut.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                                    </div>
                                </div>
                                {/* Add other overview boxes */}
                            </div>
                        </div>
                    </ContentArea>
            </Container>


   </>
    );
};

export default User;
