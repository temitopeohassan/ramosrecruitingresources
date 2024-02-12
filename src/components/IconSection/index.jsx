





import React from 'react';
import styled from 'styled-components';

// Styled components
const Section = styled.section`
  padding: 0;
`;

const Container = styled.div`
  padding-top: 5px;
  background-color: var(--theme-SkinColor);
  margin-top: 100px;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  background-color: var(--theme-WhiteColor);
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
  font-size: 40px;
  margin-bottom: 15px;
`;

// React component
const IconSection = () => {
  return (
    <Section className="ttm-row padding_zero-section clearfix">
      <Container className="container">
        <InnerContainer className="bg-theme-WhiteColor box-shadow pt-md-40 pb-md-30">
          <Row className="row g-0 ttm-vertical_sep">
            <Column className="col-lg-3 col-md-6 col-sm-6">
              <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
                <IconWrapper className="ttm-fid-icon-wrapper">
                  <i className="flaticon flaticon-headhunting"></i>
                </IconWrapper>
                <div className="ttm-fid-contents">
                  <h4><span>8705</span></h4>
                  <h3 className="ttm-fid-title">Welath Of Experiance</h3>
                </div>
              </Feature>
            </Column>
            <Column className="col-lg-3 col-md-6 col-sm-6">
              <Feature className="ttm-fid inside ttm-fid-view-topicon style2">
                <IconWrapper className="ttm-fid-icon-wrapper">
                  <i className="flaticon flaticon-technical-support"></i>
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
                  <i className="flaticon flaticon-recruitment-4"></i>
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
                  <i className="flaticon flaticon-recruitment-3"></i>
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
  );
};

export default IconSection;
