import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        background: "#004c46",
        paddingY: "2rem",
        borderTop: "1px solid #e0ffd6",
      }}
    >
      <Container>
        <Row className="py-4">
          <Col sm={12} md={6}>
            <Navbar.Brand>
              <Link
                to="/"
                className="logo d-flex align-items-center"
                style={{
                  color: "#00e472",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <FaSeedling style={{ fontSize: "2rem" }} />
                <h4 className="m-0">FundFair</h4>
              </Link>
            </Navbar.Brand>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              labore distinctio. Aspernatur eos sequi beatae, consequuntur
              architecto natus voluptas. Voluptatem.
            </p>
            <p className="text-white">
              &copy; 2022 Fund Fair. All Right Reserved
            </p>
          </Col>

          <Col sm={12} md={6}>
            <Row className="text-align-left">
              <Col sm={12} md={4}>
                <p className="fw-bold text-white mb-4">Company</p>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  FAQ
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  Jobs
                </Nav.Link>
              </Col>
              <Col sm={12} md={4}>
                <p className="fw-bold text-white mb-4">Legal</p>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  Terms of Service
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  Privacy Policy
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  Cookie Policy
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="p-0 mb-3 text-white">
                  Contact Us
                </Nav.Link>
              </Col>
              <Col sm={12} md={4}>
                <p className="fw-bold text-white">Follow us</p>
                <div className="d-flex align-items-center justify-content-between ">
                  <Link to="/" style={{ fontSize: "20px", color: "#00e472" }}>
                    <FaFacebookF />
                  </Link>
                  <Link to="/" style={{ fontSize: "20px", color: "#00e472" }}>
                    <FaTwitter />
                  </Link>
                  <Link to="/" style={{ fontSize: "20px", color: "#00e472" }}>
                    <FaLinkedinIn />
                  </Link>
                  <Link to="/" style={{ fontSize: "20px", color: "#00e472" }}>
                    <FaInstagram />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
