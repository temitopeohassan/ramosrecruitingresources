





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
                  <h2>Terms and Conditions</h2>
                  <div>
                  </div>
                  <div className="breadcrumb-wrapper">
                     <span>
                        <Link to="/" title="Homepage">
                        Home</Link>
                     </span>
                     <span className="bread-sep">&nbsp;/&nbsp;</span>Terms and Conditions
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

      
    </>
  );
};

export default Login;
