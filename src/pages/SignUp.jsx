











import React from 'react'
import Bg from "../assets/img/pagetitle-bg.jpg";
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <>
    <div className="page-header-area bg-img" style={{ backgroundImage:  `url(${Bg})` }} >
<div className="page-header-area-inner">
<div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="page-header-content-inner">
        <div className="page-header-content">
          <h2>Sign Up</h2>
          <div>
            </div>
            <div className="breadcrumb-wrapper">
              <span><Link to="/" title="Homepage">
                Home</Link></span>
                <span className="bread-sep">&nbsp;/&nbsp;</span>Sign Up</div>
                <div>
                  </div>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
    
    <div><h1>Sign Up</h1></div>
    </>
  )
}

export default SignUp