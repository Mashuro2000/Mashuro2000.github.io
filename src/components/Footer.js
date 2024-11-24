import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import gitHubIcon from '../assets/img/github-mark-white.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/martin-mashuro/" target="_blank"><img src={navIcon1} alt="Linked in link" /></a>
              <a href="https://github.com/Mashuro2000" target="_blank"><img src={gitHubIcon} alt="Git Hub Link" /></a>
              <a href="https://www.instagram.com/martinmashuro/" target="_blank"><img src={navIcon3} alt="Instagrm link" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
