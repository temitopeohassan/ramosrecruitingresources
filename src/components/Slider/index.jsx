







import React from 'react';
import Img from '../../assets/img/slider-mainbg-001.jpg';
import styled from 'styled-components';

// Styled components
const SlideContainer = styled.div`
  width: 100%;
  display: inline-block;
`;

const SlideImg = styled.div`
  background-image: ImgURL(${Img});
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Headings = styled.div`
  color: white;
`;

const SearchForm = styled.form`
  & label {
    display: block;
    margin-bottom: 10px;
  }
`;

// React component
const SlideComponent = () => {
  return (
    <SlideContainer className="slide" tabIndex="-1" style={{ backgroundImage:  `url(${Img})` }}>
      <ContentContainer className="slide__content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Headings className="slide__content--headings">
                <h3 data-animation="animate__animated animate__bounce animate__delay-2s">Empowering, Inspiring, Rising.</h3>
                <div className="d-flex align-items-center justify-content-center">
                  <h2 data-animation="animate__fadeInDown">Recruitment & Staffing Agency</h2>
                </div>
              </Headings>
              <div className="mt-30">
                <div className="row">
                  <div className="col-lg-12">
                    <p data-animation="animate__fadeInDown" className="mb-30 mb-md-0">
                      <SearchForm id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
                        <div className="row row-equal-height">
                          <div className="col-lg-3">
                            <label><i className="ti ti-search"></i><input type="text" id="filter" placeholder="Job Title or Keywords" /></label>
                          </div>
                          <div className="col-lg-3">
                            <label><i className="ti ti-location-pin"></i><select name="locations" aria-hidden="true" placeholder="Locations">
                              <option value="">Locations</option>
                              <option value="Loc1">Locations1</option>
                              <option value="Loc2">Locations2</option>
                              <option value="Loc3">Locations3</option>
                              <option value="Loc4">Locations4</option>
                              <option value="Loc5">Locations5</option>
                              <option value="Loc6">Locations6</option>
                            </select></label>
                          </div>
                          <div className="col-lg-3">
                            <label><i className="ti ti-list"></i><select name="categories" aria-hidden="true" placeholder="Categories">
                              <option value="">Categories</option>
                              <option value="Ed1">Categories1</option>
                              <option value="Ed2">Categories2</option>
                              <option value="Ed3">Categories3</option>
                              <option value="Ed4">Categories4</option>
                              <option value="Ed5">Categories5</option>
                              <option value="Ed6">Categories6</option>
                            </select></label>
                          </div>
                          <div className="col-lg-3">
                            <label><button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Find Jobs</button></label>
                          </div>
                        </div>
                      </SearchForm>
                    </p>
                    <p data-animation="animate__fadeInDown" className="d-none d-md-block">
                      <span className="text-theme-WhiteColor">Popular Searches :  </span>Designer,  Developer,  Web,  IOS,  PHP,  Senior,  Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SlideContainer>
  );
};

export default SlideComponent;
