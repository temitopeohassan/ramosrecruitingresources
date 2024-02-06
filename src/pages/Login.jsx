











import React from 'react'
import Bg from "../assets/img/pagetitle-bg.jpg";

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="page-header-content-inner">
        <div className="page-header-content">
          <h2>Login</h2>
          <div>
            </div>
            <div className="breadcrumb-wrapper">
              <span><Link to="/" title="Homepage">
                Home</Link></span>
                <span className="bread-sep">&nbsp;/&nbsp;</span>Login</div>
                <div>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>


                  <div className="container">
  <div className="row justify-content-center"> {/* Centering the form */}
    <div className="col-lg-8"> {/* Adjusted the column size */}
      <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-4 p-lg-2"> {/* Reduced padding */}
        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
        </div>
        <div className="layer-content">
          <div className="text-center mb-2"> {/* Reduced margin */}
            <h3>Login To Your Account</h3>
          </div>
          <div className="ttm-tabs ttm-tab-style-02">
            <div className="react-tabs" data-tabs="true">
              <div className="content-tab">
                <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
                </div>
                <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2">
                  <form id="login_form" className="login_form wrap-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <label>
                          <i className="ti ti-email"></i>
                          <input type="email" id="txtemail" placeholder="Email Address" />
                        </label>
                      </div>
                      <div className="col-lg-12">
                        <label>
                          <i className="ti ti-lock"></i>
                          <input type="password" id="password" placeholder="Password" />
                        </label>
                      </div>
                      <div className="forgot-pwd text-center mt-2">
                        <p><Link to="/forgot_password" className="text-theme-SkinColor">Forgot Password?</Link></p>
                        <p>Don't have an account? <Link to="/sign_up" className="text-theme-SkinColor">Sign Up here</Link></p>
                      </div>
                      <div className="col-lg-8 mx-auto"> {/* Adjusted the column size */}
                        <label className="mb-0">
                          <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Sign In</button>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="login-social-buttons">
            <div className="row">
              <div className="col-md-6">
                <button id="login-with-facebook" className="social-account-button w-100 facebook-button">
                  <i className="ti ti-facebook"></i>
                  <span>Login With Facebook</span>
                </button>
              </div>
              <div className="col-md-6">
                <button id="login-with-google" className="social-account-button w-100 google-button">
                  <i className="ti ti-google"></i>
                  <span>Login With Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Login