import React from 'react';
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png"

import "./header.css";

const nav_links = [
    { path: "/home", display: 'Home' },
    { path: "/about", display: 'About' },
    { path: "/tours", display: 'Tours' },
];

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">

                        {/* ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ Logo ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ */}
                        <div className="logo">
                            <img src={logo} alt="Advenza" />
                        </div>
                        {/* ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ logo end ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ */}

                        {/* ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ menu start ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ */}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5 ">
                                {
                                    nav_links.map((item, index) => {
                                        return (<li className="nav-item" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? "active-link" : ""}>
                                                {item.display}
                                            </NavLink>
                                        </li>)
                                    })
                                }
                            </ul>
                        </div>
                        {/* ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ menu end ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ */}


                        <div className="nav-right d-flex align-items-center gap-4">
                            <div className="nav-btn d-flex align-items-center gap-4">
                                <Link to={"/login"} className='text-decoration-none btn btn-outline-success'>Login</Link>
                                <Link to={"/register"} className='btn btn-success text-decoration-none'>Register</Link>
                            </div>
                            <span className="mobile-menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;