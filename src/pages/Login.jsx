





import React from 'react';
import Bg from "../assets/img/pagetitle-bg.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from "react-icons/fa6";


const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic goes here, after successful login:
    navigate('/user_profile');
  };

  return (
    <>
      <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }}>
        {/* Page header content */}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-4 p-lg-2">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="layer-content">
                <div className="text-center mb-2">
                  <h3>Login To Your Account</h3>
                </div>
                <form onSubmit={handleSubmit} className="login_form wrap-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <label>
                        <FaEnvelope />
                        <input type="email" id="txtemail" placeholder="Email Address" />
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <label>
                        <FaLock />
                        <input type="password" id="password" placeholder="Password" />
                      </label>
                    </div>
                    <div className="forgot-pwd text-center mt-2">
                      <p><Link to="/forgot_password" className="text-theme-SkinColor">Forgot Password?</Link></p>
                      <p>Don't have an account? <Link to="/sign_up" className="text-theme-SkinColor">Sign Up here</Link></p>
                    </div>
                    <div className="col-lg-8 mx-auto">
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
      </div>
    </>
  );
};

export default Login;
