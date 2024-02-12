import React from 'react';
import styled from 'styled-components';
import { 
    FaCalendarDays,
    FaUserGroup, 
    FaFolderOpen,
    FaClock
} from "react-icons/fa6";


const StyledAside = styled.aside`
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, hsla(0, 0%, 100%, 0.15), hsla(0, 0%, 100%, 0));
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  color: #919191;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 26px;
  font-size: 14px;
  letter-spacing: .2px;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
  padding: 0 30px 30px;
  border: 0;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column; /* Adjusting to column layout */
  align-items: flex-start; /* Align items to start of column */
`;

const WidgetTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  h3 {
    color: orange; /* Change color to orange */
  }

  svg {
    margin-right: 0.5rem;
    color: orange; /* Change icon color to orange */
  }
`;

const ListFilter = styled.form`
  .radio {
    margin-bottom: 0.5rem;
    display: block;
  }
`;

const JobWidget = () => {
  return (
    <>
      <StyledAside className="widget job-widget">
        <WidgetTitle>
          <FaCalendarDays />
          <h6>Date Posted</h6>
        </WidgetTitle> 
        <ListFilter id="list1" className="list-filter">
          <div>
            <label className="radio"><input type="radio" name="post_date" value="Today" />Today</label>
            <label className="radio"><input type="radio" name="post_date" value="Last 7 days" />Last 7 days</label>
            <label className="radio"><input type="radio" name="post_date" value="Last 14 days" />Last 14 days</label>
            <label className="radio"><input type="radio" name="post_date" value="Last 21 days" />Last 21 days</label>
            <label className="radio"><input type="radio" name="post_date" value="Last 30 days" />Last 30 days</label>
          </div>
        </ListFilter>
      </StyledAside>
      <StyledAside className="widget job-widget">
      <WidgetTitle>
      <FaFolderOpen />
        <h6>Categories</h6>
      </WidgetTitle>
      <ListFilter id="list2" className="list-filter">
        <div>
          <label className="radio"><input type="radio" name="categories" value="Digital Marketing" checked />Digital Marketing</label>
          <label className="radio"><input type="radio" name="categories" value="Charity & Voluntary" />Charity & Voluntary</label>
          <label className="radio"><input type="radio" name="categories" value="IT Contractor" />IT Contractor</label>
          <label className="radio"><input type="radio" name="categories" value="Estate Agency" />Estate Agency</label>
          <label className="radio"><input type="radio" name="categories" value="Graduate" />Graduate</label>
        </div>
      </ListFilter>
    </StyledAside>
    <StyledAside className="widget job-widget">
      <WidgetTitle>
      <FaClock />
        <h6>Experience</h6>
      </WidgetTitle>
      <ListFilter id="list3" className="list-filter">
        <div>
          <label className="radio"><input type="radio" name="ex_year" value="0Year to 1Year" />0Year to 1Year</label>
          <label className="radio"><input type="radio" name="ex_year" value="1Year to 2Year" />1Year to 2Year</label>
          <label className="radio"><input type="radio" name="ex_year" value="2Year to 3Year" />2Year to 3Year</label>
          <label className="radio"><input type="radio" name="ex_year" value="3Year or more" checked />3Year or more</label>
        </div>
      </ListFilter>
    </StyledAside>
    <StyledAside className="widget job-widget">
      <WidgetTitle>
      <FaUserGroup />
        <h6>Gender</h6>
      </WidgetTitle>
      <ListFilter id="list4" className="list-filter">
        <div>
          <label className="radio"><input type="radio" name="gender" value="male" checked />Male</label>
          <label className="radio"><input type="radio" name="gender" value="female" />Female</label>
        </div>
      </ListFilter>
    </StyledAside>

    </>
  );
};

export default JobWidget;
