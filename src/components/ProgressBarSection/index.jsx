import React from 'react';
import styled from 'styled-components';
import Bg from "../../assets/img/row-bgimage-2.jpg";
import { MdOutlinePerson, MdManageSearch, MdOutlinePeopleAlt, MdCheck } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

// Styled components

const RowWrapperBgLayer = styled.div`
  background-color: var(--bs-dark);
`;

const SectionTitle = styled.div`
  .title-header {
    h3 {
      color: var(--bs-white);
      span {
        color: var(--bs-primary);
      }
    }
    .title {
      color: var(--bs-white);
      span {
        color: var(--bs-primary);
      }
    }
  }
`;

// Styled components
const Section = styled.section`
  padding: 0;
`;

const Container = styled.div`
  padding-top: 5px;
  background-color: var(--bs-primary);
  margin-top: 100px;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  background-color: var(--bs-white);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding-top: 40px;
  padding-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 0 15px;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  font-size: 60px; /* Increased size */
  margin-bottom: 15px;
  color: orange; /* Changed color */
`;

const Btn = styled.a`
  /* Define your button styles */
`;

const Fid = styled.div`
  /* Define your styles for fid */
`;

const ProgressWrapper = styled.div`
  /* Define your styles for progress bar wrapper */
`;

const ProgressBar = styled.div`
  /* Define your styles for progress bar */
`;

const ProgressBarRectWrapper = styled.div`
  /* Define your styles for progress bar rect wrapper */
`;

// React component
const ProgressBarSection = () => {
  return (
   <>
    <Section className="ttm-row about-section bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage:  `url(${Bg})` }} >
      <RowWrapperBgLayer className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></RowWrapperBgLayer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-4 col-md-12">
            <SectionTitle className="section-title">
              <div className="title-header">
                <h3>More than 50,000 <span>happy client</span></h3>
                <h2 className="title">The Most Trusted and Professional Recruitment <span> Agency</span></h2>
              </div>
            </SectionTitle>
            <Btn className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white mt-15" href="/react/hireco/candidate_list">Hiring Now!</Btn>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
            <Fid className="ttm-fid inside ttm-fid-view-topicon style1">
              <div className="ttm-fid-icon-wrapper">
              <BsFillPeopleFill />
              </div>
              <div className="ttm-fid-contents">
                <h4><span>2887</span></h4>
                <h3 className="ttm-fid-title">Happy Clients</h3>
              </div>
            </Fid>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-8 col-sm-7">
            <div className="pt-lg-20 pb-30">
              <p className="text-theme-WhiteColor">We have over 30 years experience of Financial, Musiness Solutions expertise, our goal imize your.</p>
            </div>
            <ProgressWrapper className="ttm-progress-bar style2 clearfix">
              <h3 className="progressbar-title">Consulting Experience</h3>
              <ProgressBar className="progress-bar">
                <ProgressBarRectWrapper className="progress-bar-rect-wrap-container">
                  <div className="progress-bar-rect-wrapper">
                    <div style={{ height: '100%' }}>
                      <div className="inner-rect-bar addRectAnimate" style={{ width: '0px', height: '100%', backgroundColor: 'var(--bs-success)', borderRadius: '0px', '--rectLevel': '90%' }}></div>
                    </div>
                  </div>
                </ProgressBarRectWrapper>
                <h2 className="rect-progress-bar-percent" style={{ display: 'flex', margin: '1em' }}>90%</h2>
              </ProgressBar>
            </ProgressWrapper>
            <ProgressWrapper className="ttm-progress-bar style2 clearfix">
              <h3 className="progressbar-title">Investment Plan</h3>
              <ProgressBar className="progress-bar">
                <ProgressBarRectWrapper className="progress-bar-rect-wrap-container">
                  <div className="progress-bar-rect-wrapper">
                    <div style={{ height: '100%' }}>
                      <div className="inner-rect-bar addRectAnimate" style={{ width: '0px', height: '100%', backgroundColor: 'var(--bs-success)', borderRadius: '0px', '--rectLevel': '85%' }}></div>
                    </div>
                  </div>
                </ProgressBarRectWrapper>
                <h2 className="rect-progress-bar-percent" style={{ display: 'flex', margin: '1em' }}>85%</h2>
              </ProgressBar>
            </ProgressWrapper>
          </div>
          <div className="col-lg-12">
            <div className="pt-100 pt-md-0"></div>
          </div>
        </div>
      </div>
    </Section>
    <Section className="ttm-row padding_zero-section clearfix">
    <Container className="container">
      <InnerContainer className="bg-theme-WhiteColor box-shadow pt-md-40 pb-md-30">
        <Row className="row g-0 ttm-vertical_sep">
          <Column className="col-lg-3 col-md-6 col-sm-6">
            <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
              <IconWrapper className="ttm-fid-icon-wrapper">
                <MdOutlinePerson />
              </IconWrapper>
              <div className="ttm-fid-contents">
                <h4><span>8705</span></h4>
                <h3 className="ttm-fid-title">Wealth Of Experiance</h3>
              </div>
            </Feature>
          </Column>
          <Column className="col-lg-3 col-md-6 col-sm-6">
            <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
              <IconWrapper className="ttm-fid-icon-wrapper">
              <MdManageSearch /> 
              </IconWrapper>
              <div className="ttm-fid-contents">
                <h4><span>480</span></h4>
                <h3 className="ttm-fid-title">Professional Recruiters</h3>
              </div>
            </Feature>
          </Column>
          <Column className="col-lg-3 col-md-6 col-sm-6">
            <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
              <IconWrapper className="ttm-fid-icon-wrapper">
              <MdCheck />
              </IconWrapper>
              <div className="ttm-fid-contents">
                <h4><span>6260</span></h4>
                <h3 className="ttm-fid-title">No. of Candidates Hired</h3>
              </div>
            </Feature>
          </Column>
          <Column className="col-lg-3 col-md-6 col-sm-6">
            <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
              <IconWrapper className="ttm-fid-icon-wrapper">
              <MdOutlinePeopleAlt />
              </IconWrapper>
              <div className="ttm-fid-contents">
                <h4><span>9774</span></h4>
                <h3 className="ttm-fid-title">Larger Community</h3>
              </div>
            </Feature>
          </Column>
        </Row>
      </InnerContainer>
    </Container>
  </Section>
   </>
  );
};

export default ProgressBarSection;
