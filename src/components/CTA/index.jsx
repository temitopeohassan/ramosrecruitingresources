









import React from 'react'
import Bg from "../../assets/img/row-bgimage-7.jpg";
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
   <>
  
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

export default CTA