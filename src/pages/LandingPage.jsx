import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";

import Help from "../images/help.jpeg";
import Coinbase from "../images/coinbase.png";
import Paypal from "../images/paypal.png";
import Vodafone from "../images/vodafone.png";
import Stripe from "../images/stripelogo.png";
import Airtel from "../images/airtel.png";
import { IoMdSchool } from "react-icons/io";
import { FaHandsHelping, FaStethoscope } from "react-icons/fa";
import {
  MdBusinessCenter,
  MdFamilyRestroom,
  MdReportProblem,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <>
      <Container fluid style={{ background: "#e0ffd6" }}>
        <Container
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3rem 0",
            }}
          >
            <Col sm={12} lg={7} className="py-3">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
              >
                <h1
                  style={{
                    fontSize: "3rem",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    color: "#004c46",
                  }}
                >
                  Connecting issues that matter with people who care
                </h1>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  omnis praesentium perferendis fugit ex provident deserunt
                  asperiores nisi, exercitationem accusantium?
                </p>
                <Button
                  style={{
                    backgroundColor: "#116149",
                    // backgroundColor: "#31bc2e",
                    color: "#fff",
                    width: "200px",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "none",
                  }}
                >
                  <Link
                    to="/campaigns/create"
                    className="text-white text-decoration-none"
                  >
                    Start a Campaign
                  </Link>
                </Button>
                <Button
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "transparent",
                    color: "#212329",
                    width: "200px",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "2px solid #116149",
                  }}
                >
                  <Link
                    to="/campaigns"
                    style={{ textDecoration: "none", color: "#004c46" }}
                  >
                    Explore Campaigns
                  </Link>
                </Button>
              </motion.div>
            </Col>

            <Col sm={12} lg={5}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
              >
                <Image
                  className="img-fluid"
                  fluid
                  src={Help}
                  alt="help img"
                  style={{ width: "100%" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* How it works */}
      <Container
        fluid
        style={{
          background: "#e0ffd6",
          padding: 0,
          margin: 0,
        }}
      >
        <Container
          id="how-it-works"
          fluid
          className=" text-white"
          style={{
            padding: "8rem 0",
            clipPath: "polygon(0 15%,100% 0,100% 100%,0 100%)",
            background: "linear-gradient(180deg,#004c46,#004c46 43.75%)",
          }}
        >
          <Container>
            <Row
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                padding: "3rem 0",
              }}
            >
              <Col sm={8} lg={7}>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    paddingTop: "3rem",
                  }}
                >
                  Raising Funds on FundFair takes just a few clicks
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  omnis praesentium perferendis fugit ex provident deserunt
                </p>
              </Col>
            </Row>

            <Row
              style={{
                padding: "3rem 0",
                textAlign: "center",
              }}
            >
              <Col sm={12} md={4}>
                <div
                  style={{
                    background: "#00e472",
                    borderRadius: "999px",
                    color: "#fff",
                    display: "block",
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "18px",
                    fontWeight: "bold",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "auto",
                    marginBottom: "20px",
                    textAlign: "center",
                    width: "50px",
                  }}
                >
                  01
                </div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Poppins",
                    color: "#00e472",
                    fontWeight: "bold",
                  }}
                >
                  Create an account
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  omnis praesentium perferendis fugit ex provident deserunt
                </p>
              </Col>

              <Col sm={12} md={4}>
                <div
                  style={{
                    background: "#00e472",
                    borderRadius: "999px",
                    color: "#fff",
                    display: "block",
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "18px",
                    fontWeight: "bold",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "auto",
                    marginBottom: "20px",
                    textAlign: "center",
                    width: "50px",
                  }}
                >
                  02
                </div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Poppins",
                    color: "#00e472",
                    fontWeight: "bold",
                  }}
                >
                  Prep your Campaign
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  omnis praesentium perferendis fugit ex provident deserunt
                </p>
              </Col>

              <Col sm={12} md={4}>
                <div
                  style={{
                    background: "#00e472",
                    borderRadius: "999px",
                    color: "#fff",
                    display: "block",
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "18px",
                    fontWeight: "bold",
                    height: "50px",
                    lineHeight: "50px",
                    margin: "auto",
                    marginBottom: "20px",
                    textAlign: "center",
                    width: "50px",
                  }}
                >
                  03
                </div>

                <h1
                  style={{
                    fontSize: "1.5rem",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    color: "#00e472",
                  }}
                >
                  Promote your Campaign
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  omnis praesentium perferendis fugit ex provident deserunt
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>

      <Container className="py-5">
        <h1
          className="mb-3"
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "#004c46",
          }}
        >
          Trending Campaigns
        </h1>
        <Row className="py-2">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Row>
      </Container>

      {/* Get Started Area */}
      <Container
        fluid
        style={{ backgroundColor: "#004c46", color: "#fff" }}
        id="about"
      >
        <Container
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "3rem 0",
            }}
          >
            <Col sm={12} lg={7}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Get started with FundFair
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
                asperiores nisi, exercitationem accusantium?
              </p>
              <Link to="/register" style={{ fontSize: "20px", color: "#fff" }}>
                <Button
                  style={{
                    // backgroundColor: "#366862",
                    backgroundColor: "#00e472",
                    color: "#fff",
                    width: "200px",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "none",
                  }}
                >
                  Sign up
                </Button>
              </Link>
              <Link to="/login" style={{ fontSize: "20px", color: "#fff" }}>
                <Button
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "transparent",
                    color: "#00e472",
                    width: "200px",
                    outline: "none",
                    padding: ".8rem 1rem",
                    // border: "1px solid #212329",
                    border: "1px solid #00e472",
                  }}
                >
                  Log in
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Trusted Area */}
      <Container fluid className="py-5" style={{ background: "#fff" }}>
        <Container>
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "Poppins",
              color: "#004c46",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            Trusted Partners
          </h1>

          <Row className="justify-content-center">
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Coinbase} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Stripe} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Vodafone} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Airtel} />
            </Col>
            <Col
              sm={12}
              md={6}
              lg={2}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Image fluid style={{ width: "200px" }} src={Paypal} />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* what can i campaign for */}
      <Container
        fluid
        style={{ backgroundColor: "#004c46", color: "#fff" }}
        id="about"
      >
        <Container
          style={{
            padding: "3rem 0",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontFamily: "Poppins",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            What can i Campaign for?
          </h1>
          <Row
            style={{
              padding: "3rem 0",
            }}
          >
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <IoMdSchool />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Education
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <FaStethoscope />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Medical & Health
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdFamilyRestroom />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Family
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <FaHandsHelping />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Charity
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdBusinessCenter />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Business
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div
                style={{
                  background: "#00e472",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "block",
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "25px",
                  fontWeight: "bold",
                  height: "50px",
                  lineHeight: "50px",
                  margin: "auto",
                  marginBottom: "20px",
                  textAlign: "center",
                  width: "50px",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <MdReportProblem />
              </div>

              <h1
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  color: "#00e472",
                }}
              >
                Disaster Relief
              </h1>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                omnis praesentium perferendis fugit ex provident deserunt
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default LandingPage;
