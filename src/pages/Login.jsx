





import React from 'react';
import Bg from "../assets/img/pagetitle-bg.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic goes here, after successful login:
    navigate('/user_profile');
  };

  return (
    <>
       <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
   <div className="container">
      <div className="row">
         <div className="col-lg-12 text-center">
            <div className="page-header-content-inner">
               <div className="page-header-content">
                  <h2>Login To Your Account</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>Login
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

      <div className="ttm-row login-section clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                            <div className="layer-content">
                                <div className="text-center mb-20">
                                    <h3>Login To Your Account</h3>
                                </div>
                                <div className="ttm-tabs ttm-tab-style-02">
                                    <div className="react-tabs" data-tabs="true">
                                       
                                        <div className="content-tab" style={{ marginLeft: '300px', marginRight: '300px'}}>
                                            <div className="react-tabs__tab-panel react-tabs__tab-panel--selected" role="tabpanel" id="react-tabs-1" aria-labelledby="react-tabs-0">
                                                <form id="login_form" className="login_form wrap-form">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <label><input type="email" id="txtemail" placeholder="Email Address" /></label>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <label><input type="password" id="password" placeholder="Password" /></label>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <label>
                                                                <div className="forgot-pwd text-center mt-5">
                                                                    <p><Link to="#" className="text-theme-SkinColor">Forgot Password?</Link></p>
                                                                    <p>Don't have account? <Link to="/sign_up" className="text-theme-SkinColor">Sign Up here</Link></p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div className="col-lg-6 mx-auto">
                                                            <label className="mb-0">
                                                                <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Sign in</button>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="react-tabs__tab-panel" role="tabpanel" id="react-tabs-3" aria-labelledby="react-tabs-2"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-social-buttons">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button id="login-with-facebook" className="social-account-button w-100 facebook-button"><FaFacebook /><span> Login With facebook</span></button>
                                        </div>
                                        <div className="col-md-6">
                                            <button id="login-with-google" className="social-account-button w-100 google-button"><FaGoogle /><span> Login With Google</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;
