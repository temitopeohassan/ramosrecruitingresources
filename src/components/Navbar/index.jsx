







import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import img from '../../assets/img/logo-img.png';
import { FaBars } from 'react-icons/fa'; 

const TopBar = styled.div`
    width: 100%;
    z-index: 3;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.topBarBackgroundColor};
    color: ${({ theme }) => theme.topBarTextColor};

    .top_bar_contact_item {
        font-size: 13px;
        line-height: 18px;
        position: relative;
        margin-right: 30px;

        &:not(:last-child):after {
            content: "";
            height: 17px;
            width: 1px;
            background-color: rgba(0, 0, 0, 0.1);
            position: absolute;
            right: -15px;
            top: 0;
            bottom: 0;
        }

        .top_bar_icon {
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;

            i {
                color: #ff8d00;
                font-size: 15px;
            }
        }
    }

    @media (max-width: 768px) {
        // Adjust styles for smaller screens
        height: auto;
        line-height: normal;
      }
`;

const SiteHeaderMenu = styled.div`
    position: ${props => (props.isSticky ? 'fixed' : 'sticky')};
    top: 0;
    background-color: #fff;
    width: 100%;
    z-index: 1000;

    &.is-Sticky {
        position: fixed;
    }

    @media (max-width: 768px) {
        // Adjust styles for smaller screens
        position: sticky;
        top: 0;
      }
`;


const SiteNavigation = styled.div`
    // Add your styles for site navigation here

    .menu {
        li {
            a {
                color: #000; /* Set the text color to black */

                &:hover {
                    text-decoration: none; /* Remove the underline on hover */
                }
            }
        }
    }

    @media (max-width: 768px) {
        // Adjust styles for smaller screens
        .site-navigation {
            flex-direction: column;
        }

        .site-branding {
            margin-bottom: 20px;
        }

        .menu {
            li {
                a {
                    color: ${({ theme }) => theme.topBarTextColor};
                    text-decoration: none;

                    &:hover {
                        text-decoration: none; /* Remove the underline on hover */
                    }
                }
            }
        }
    }
`;

const MobileMenuIcon = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1001; /* Ensure it's above the menu */
    }
`;


const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    @media (max-width: 768px) {
        display: ${props => (props.isOpen ? 'flex' : 'none')};
    }

    ul {
        padding: 15px;
        list-style: none;
        margin: 0;

        li {
            margin-bottom: 10px;

            a {
                color: ${({ theme }) => theme.topBarTextColor};
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setIsSticky(offset > 0);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="masthead" className="header ttm-header-style-01">
            <TopBar className="top_bar bg-theme-DarkColor text-center clearfix">
                {/* Top bar content goes here */}
            </TopBar>
            <SiteHeaderMenu id="site-header-menu"
                className={`site-header-menu ttm-bgcolor-white ${isSticky ? 'is-Sticky' : ''}`}
                isSticky={isSticky}
                >
                <SiteNavigation className="site-header-menu-inner ttm-stickable-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-navigation d-flex align-items-center justify-content-between">
                                    <div className="site-branding">
                                        <Link className="home-link" to="/" title="Ramos Recruit" rel="home">
                                            <img id="logo-img" height="42" width="170" className="img-fluid auto_size" src={img} alt="logo-img" />
                                        </Link>
                                    </div>
                                    <MobileMenuIcon onClick={toggleMobileMenu}>
                        <FaBars />
                    </MobileMenuIcon>
                                    <div className="border-box-block">
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <nav className="main-menu">
                                                <ul className="menu">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About Us</Link></li>
                                                    <li><Link to="/services">Our Services</Link></li>
                                                    <li><Link to="/job_listing">Job Listings</Link></li>
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/contact">Contact Us</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="header_btn">
                                        <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" to="/contact">Get A Quotes!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MobileMenu isOpen={isMobileMenuOpen}>
                    <ul>
                        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMobileMenu}>About Us</Link></li>
                        <li><Link to="/services" onClick={toggleMobileMenu}>Our Services</Link></li>
                        <li><Link to="/job_listing" onClick={toggleMobileMenu}>Job Listings</Link></li>
                        <li><Link to="/login" onClick={toggleMobileMenu}>Login</Link></li>
                        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link></li>
                    </ul>
                </MobileMenu>
                </SiteNavigation>
            </SiteHeaderMenu>
        </header>
    );
};

export default Navbar;
