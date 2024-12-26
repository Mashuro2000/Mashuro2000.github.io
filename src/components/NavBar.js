import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import gitHubIcon from '../assets/img/github-mark-white.png';
import React from 'react';
import { Link } from "react-scroll";
import { useNavigate, useLocation } from 'react-router-dom';
import headerImg from "../assets/img/header-img.png";
import { scrollToSection } from '../components/scrollToSection';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const handleNavigation = (sectionName) => {
    if (location.pathname !== '/') {
      // Navigate to the home page first, then scroll
      navigate('/');
      setTimeout(() => scrollToSection(sectionName), 100); // Delay to ensure page loads
    } else {
      // Directly scroll to the section
      scrollToSection(sectionName);
    }
  };

  return (
    <Navbar id="nav-bar" expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="logo" href="/">
          <img src={headerImg} alt="Logo" />
          <p>Martin Mashuro</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <span className='navbar-link' onClick={() => handleNavigation('home')}>Home</span>
            <span className='navbar-link' onClick={() => handleNavigation('skills')}>Skills</span>
            <span className='navbar-link' onClick={() => handleNavigation('aboutMe')}>About Me</span>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/martin-mashuro/" target="_blank"><img src={navIcon1} alt="Linked in link" /></a>
              <a href="https://github.com/Mashuro2000" target="_blank"><img src={gitHubIcon} alt="Git Hub Link" /></a>
              <a href="https://www.instagram.com/martinmashuro/" target="_blank"><img src={navIcon3} alt="Instagrm link" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
