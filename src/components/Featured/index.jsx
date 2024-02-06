









import React from 'react'
import { Link } from 'react-router-dom';
import Bg from "../../assets/img/finance-hover.png";
import Icon from "../../assets/img/cat-icon1.png";
import Bg1 from "../../assets/img/technology-hover.png";
import Icon1 from "../../assets/img/cat-icon2.png";
import Bg2 from "../../assets/img/agriculture-hover.png";
import Icon2 from "../../assets/img/cat-icon3.png";
import Bg3 from "../../assets/img/construction-hover.png";
import Icon3 from "../../assets/img/cat-icon4.png";
import Bg4 from "../../assets/img/manufacturing-hover.png";
import Icon4 from "../../assets/img/cat-icon5.png";
import Bg5 from "../../assets/img/production-hover.png";
import Icon5 from "../../assets/img/cat-icon6.png";
import Bg6 from "../../assets/img/transport-hover.png";
import Icon6 from "../../assets/img/cat-icon7.png";
import Bg7 from "../../assets/img/insurance-hover.png";
import Icon7 from "../../assets/img/cat-icon8.png";


const Featured = () => {
  return (
   <>
   <section className="ttm-row features-section clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                    <div className="title-header">
                        <h3>Get <span className="text-theme-SkinColor">Appropriate</span></h3>
                        <h2 className="title">Search Job By Industry</h2>
                    
                    
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="row row-equal-height mb_10">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Finance</h3>
                        </div>
                        <div className="featured-desc">
                            <p>85 Jobs<br />Financial Branch Manager</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg1})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon1} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Technology</h3>
                        </div>
                        <div className="featured-desc">
                            <p>110 Jobs<br />Software, Hardware, SEO</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg2})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon2} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Agriculture</h3>
                        </div>
                        <div className="featured-desc">
                            <p>100 Jobs<br />Agricultural Food Scientist</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg3})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon3} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Construction</h3>
                        </div>
                        <div className="featured-desc">
                            <p>120 Jobs<br />The Marketing Coordinator</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg4})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon4} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Manufacturing</h3>
                        </div>
                        <div className="featured-desc">
                            <p>100 Jobs<br />Quality Control Inspector</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg5})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon5} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Production</h3>
                        </div>
                        <div className="featured-desc">
                            <p>90 Jobs<br />Assistant Plant Manager</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg6})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon6} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Transport</h3>
                        </div>
                        <div className="featured-desc">
                            <p>125 Jobs<br />Cargo and Freight Agents</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="featured-icon-box icon-align-top-content style1">
                    <div className="ttm-box-view-overlay">
                    <div className="ttm-col-bgimage-yes ttm-bg h-100" style={{ backgroundImage:  `url(${Bg7})` }}>
    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
    <div className="layer-content"></div>
</div>
                    </div>
                    <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                            <img className="img-fluid" src={Icon7} alt="" />
                        </div>
                    </div>
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3>Insurance</h3>
                        </div>
                        <div className="featured-desc">
                            <p>110 Jobs<br />Corporate Finance Officer</p>
                        </div>
                        <Link className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" to="/job_listing">Apply Jobs!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default Featured