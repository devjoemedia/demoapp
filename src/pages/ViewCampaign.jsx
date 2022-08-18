import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillTagFill } from "react-icons/bs";
import Help from "../images/help.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const ViewCampaign = () => {
  return (
    <Container>
      <div>
        <h2>Feeding in Russia</h2>

        <img
          src={Help}
          alt="banner"
          style={{ height: "350px", width: "100%", borderRadius: "10px" }}
        />

        <Row
          className="mt-1 py-3 "
          style={{ borderBottom: "2px solid #f1f1f1" }}
        >
          <Col sm={12} md={8}>
            <Row className="mb-0 mt-2">
              <Col className="mb-1">
                <p className="m-0">
                  Target:
                  <span className="text-muted"> $50,000</span>
                </p>
              </Col>
              <Col style={{ justifyContent: "end", display: "flex" }}>
                <span className="text-muted">$42,000</span>
                <p>(82%)</p>
              </Col>
            </Row>
            <ProgressBar
              completed={50}
              maxCompleted={100}
              height="7px"
              isLabelVisible={false}
              bgColor="#004c46"
            />
          </Col>
          <Col sm={12} md={4} className="mt-1 align-items-end">
            <p className="m-0 fw-bold">may 24th, 2015</p>
            <p className="m-0 fw-bold">
              <BsFillTagFill /> Family
            </p>
          </Col>
        </Row>

        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente
          a, exercitationem incidunt voluptatum molestiae obcaecati perferendis.
          Quidem voluptatum facere explicabo nostrum? A ipsam nisi dolorum
          delectus consequatur rerum numquam. Nam eum illum provident quod omnis
          eos totam ipsa at tempore! Reiciendis cupiditate debitis nam adipisci
          soluta a quas optio, quasi quisquam, in qui perferendis praesentium
          odio alias dignissimos nihil?
        </p>

        <div className="d-flex justify-content-between">
          <Button
            style={{
              backgroundColor: "#004c46",
              color: "#fff",
              width: "45%",
              outline: "none",
              padding: ".8rem 1rem",
              border: "none",
            }}
            // onClick={handleShow}
          >
            Withdraw Funds
          </Button>
          <Button
            as={Link}
            to="/profile/campaigns/123/edit"
            variant="primary"
            style={{
              backgroundColor: "#fff",
              color: "#004c46",
              width: "45%",
              outline: "none",
              padding: ".8rem 1rem",
              border: "1px solid #004c46",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ViewCampaign;
