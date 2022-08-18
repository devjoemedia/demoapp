import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "../images/help.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

function CampaignCard({ image, alt, children, url }) {
  return (
    <Col sm={12} md={6} lg={4} className="my-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Link
          to="/campaigns/123"
          style={{ textDecoration: "none" }}
          className="text-dark"
        >
          <Card
            style={{
              maxWidth: "345px",
              border: "1px solid #f1f1f1",
              background: "#fff",
            }}
          >
            <Card.Img variant="top" src={Help} />
            <Card.Body>
              <Row>
                <Col lg="12" className="mb-2">
                  <h4>Kidney Transplant</h4>
                  <Card.Text style={{ fontFamily: "Poppins" }}>
                    Some quick example text to build on the card
                  </Card.Text>

                  <ProgressBar
                    completed={50}
                    maxCompleted={100}
                    height="7px"
                    isLabelVisible={false}
                    bgColor="#004c46"
                  />

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
                </Col>
              </Row>
              <Button
                style={{
                  backgroundColor: "#004c46",
                  color: "#fff",
                  outline: "none",
                  fontSize: "14px",
                  border: "none",
                  width: "100%",
                }}
              >
                Donate now
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </motion.div>
    </Col>
  );
}

export default CampaignCard;
