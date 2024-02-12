





import React, { useState } from 'react';
import styled from 'styled-components';
import Single from "../../assets/img/single-img-05.jpg";
import Tab1 from "../../assets/img/tab-img01.jpg";
import Tab2 from "../../assets/img/tab-img02.jpg";
import Tab3 from "../../assets/img/tab-img03.jpg";

// Define styled components
const Container = styled.div`
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --bs-gradient: linear-gradient(180deg,hsla(0,0%,100%,0.15),hsla(0,0%,100%,0));
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  color: #919191;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 26px;
  font-size: 14px;
  letter-spacing: .2px;
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  max-width: 1200px;
  counter-reset: featuredbox-number;
  padding: 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Column = styled.div`
  flex: 0 0 auto;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.div`
  color: ${(props) => props.color || '#000'};
`;

// React component


const StyledComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <Container className="container">
        <Row className="row g-0">
          <Column className="col-lg-7 col-md-12">
            <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{ backgroundImage:  `url(${Single})` }}></div>
              <div className="layer-content"></div>
              <Img className="img-fluid col-bg-img-res" src={Single} alt="bgimage" />
            </div>
          </Column>
          <Column className="col-lg-5">
            <div className="ttm-bg ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg ttm-right-span spacing-1 z-index-1">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                <div className="ttm-col-wrapper-bg-layer-inner"></div>
              </div>
              <div className="layer-content text-theme-WhiteColor">
                <div className="section-title">
                  <div className="title-header">
                    <h3>How <span className="text-theme-SkinColor">we are! </span></h3>
                    <h2 className="title">Reliable &amp; Cost Efficient Recruitment Agency</h2>
                  </div>
                </div>
                <div className="ttm-tabs ttm-tab-style-01">
                  <div className="react-tabs" data-tabs="true">
                    <ul className="tabs" role="tablist">
                      <li className={`tab ${activeTab === 0 ? 'react-tabs__tab--selected' : ''}`} onClick={() => setActiveTab(0)} role="tab" id="react-tabs-0" aria-selected={activeTab === 0} aria-disabled="false" aria-controls="react-tabs-1" tabindex="0"><a className="tab-1" tabindex="0">Our Mission</a></li>
                      <li className={`tab ${activeTab === 1 ? 'react-tabs__tab--selected' : ''}`} onClick={() => setActiveTab(1)} role="tab" id="react-tabs-2" aria-selected={activeTab === 1} aria-disabled="false" aria-controls="react-tabs-3"><a className="tab-2" tabindex="0">Our Vision</a></li>
                      <li className={`tab ${activeTab === 2 ? 'react-tabs__tab--selected' : ''}`} onClick={() => setActiveTab(2)} role="tab" id="react-tabs-4" aria-selected={activeTab === 2} aria-disabled="false" aria-controls="react-tabs-5"><a className="tab-3" tabindex="0">Core Values</a></li>
                    </ul>
                    <div className="content-tab mb_15">
                      <div className={`react-tabs__tab-panel ${activeTab === 0 ? 'react-tabs__tab-panel--selected' : ''}`} role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
                        <div className="row">
                          <div className="col-lg-4 col-md-3 col-sm-4">
                            <Img className="img-fluid alignleft" height="200" width="200" src={Tab1} alt="image" />
                          </div>
                          <div className="col-lg-8 col-md-9 col-sm-8">
                            <div className="pt-15">
                              <p>Content for Our Mission tab</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`react-tabs__tab-panel ${activeTab === 1 ? 'react-tabs__tab-panel--selected' : ''}`} role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
                        <div className="row">
                          <div className="col-lg-4 col-md-3 col-sm-4">
                            <Img className="img-fluid alignleft" height="200" width="200" src={Tab2} alt="image" />
                          </div>
                          <div className="col-lg-8 col-md-9 col-sm-8">
                            <div className="pt-15">
                              <p>Content for Our Vision tab</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`react-tabs__tab-panel ${activeTab === 2 ? 'react-tabs__tab-panel--selected' : ''}`} role="tabpanel" id="react-tabs-5" aria-labelledby="react-tabs-4">
                        <div className="row">
                          <div className="col-lg-4 col-md-3 col-sm-4">
                            <Img className="img-fluid alignleft" height="200" width="200" src={Tab3} alt="image" />
                          </div>
                          <div className="col-lg-8 col-md-9 col-sm-8">
                            <div className="pt-15">
                              <p>Content for Core Values tab</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    );
  };
  
  export default StyledComponent;
  