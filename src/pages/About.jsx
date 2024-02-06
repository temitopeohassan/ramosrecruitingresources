import React, { useState } from 'react';
import Bg from "../assets/img/pagetitle-bg.jpg";
import { Link } from 'react-router-dom';
import Single from "../assets/img/single-img-05.jpg";
import Dots from "../assets/img/dot-pattern.png";
import Tab1 from "../assets/img/tab-img01.jpg";
import Tab2 from "../assets/img/tab-img02.jpg";
import Tab3 from "../assets/img/tab-img03.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
    <div className="page-header-area-inner">
       <div className="container">
          <div className="row">
             <div className="col-lg-12 text-center">
                <div className="page-header-content-inner">
                   <div className="page-header-content">
                      <h2>About Us</h2>
                      <div>
                      </div>
                      <div className="breadcrumb-wrapper">
                         <span>
                            <Link to="/" title="Homepage">
                            Home</Link>
                         </span>
                         <span className="bread-sep">&nbsp;/&nbsp;</span>About Us
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

      {/* About Section */}
      <section className="ttm-row about-section clearfix">
        <div className="container">
          <div className="row">
            {/* Left Column with Section Title and Tabs */}
            <div className="col-lg-6">
              <div className="section-title">
                {/* ... (your section title content) */}
              </div>

              {/* Tabs */}
              <div className="ttm-tabs ttm-tab-style-01">
                <div className="react-tabs" data-tabs="true">
                  <ul className="tabs" role="presentation">
                    {[1, 2, 3].map((tabNumber) => (
                      <li
                        key={tabNumber}
                        className={`tab ${activeTab === tabNumber ? 'react-tabs__tab--selected' : ''}`}
                        role="presentation"
                        onClick={() => handleTabClick(tabNumber)}
                      >
                        <a className={`tab-${tabNumber}`} tabIndex="0">{`Tab ${tabNumber}`}</a>
                      </li>
                    ))}
                  </ul>

                  {/* Tab Content */}
                  <div className="content-tab">
                    {[1, 2, 3].map((tabNumber) => (
                      <div
                        key={tabNumber}
                        className={`react-tabs__tab-panel ${activeTab === tabNumber ? 'react-tabs__tab-panel--selected' : ''}`}
                        role="tabpanel"
                        id={`react-tabs-${tabNumber}`}
                        aria-labelledby={`react-tabs-${tabNumber - 1}`}
                      >
                        <div className="row">
                          <div className="col-lg-4 col-md-3 col-sm-4">
                            <img
                              className="img-fluid alignleft"
                              height="200"
                              width="200"
                              src={tabNumber === 2 ? Tab2 : Tab1}
                              alt={`Tab ${tabNumber} image`}
                            />
                          </div>
                          <div className="col-lg-8 col-md-9 col-sm-8">
                            <div className="pt-15">
                              {/* Content for each tab */}
                              <p>{`Content for Tab ${tabNumber}`}</p>
                              <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                <li>
                                  <i className="far fa-check-circle"></i>
                                  <div className="ttm-list-li-content">An ability to attract and retain great talent</div>
                                </li>
                                <li>
                                  <i className="far fa-check-circle"></i>
                                  <div className="ttm-list-li-content">A talent need, quickly and cost-effectively</div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column with Image */}
            <div className="col-lg-6">
              <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                <div className="d-flex">
                  <img src={Single} className="img-fluid" alt="single_05" />
                  <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                    <img src={Dots} className="img-fluid" alt="dot-pattern" />
                  </div>
                  <div className="d-flex justify-content-end flex-column ml_180 mr_30 mb_35 z-index_1">
                    <img src={Dots} className="img-fluid" alt="dot-pattern" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
