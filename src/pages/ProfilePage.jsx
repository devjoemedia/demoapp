import React from "react";
import { Button, Col, Container, Row, Table, Card } from "react-bootstrap";
import Help from "../images/help.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const data = [1, 2, 3];

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div style={{ flex: 1 }}>
          <h4>Campaign</h4>
          <p>Let's create you first campaign</p>
        </div>
        <div>
          <Button
            style={{
              maxWidth: "200px",
              outline: "none",
              background: "#00e472",
              border: "none",
              display: "inline-block",
            }}
          >
            <Link
              to="campaigns/create"
              className="text-white text-decoration-none"
            >
              + create campaign
            </Link>
          </Button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Campaign</th>
            <th>Created at</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
        </tbody>
      </Table>

      <div style={{ padding: "20px 0" }}>
        <h4>Recent Campaigns</h4>
        <p>History of your recent campaigns</p>

        <Row>
          {data.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="my-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
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
                        <h5 className="fw-bold">Feeding in Russia</h5>
                        <Card.Text style={{ fontFamily: "Poppins" }}>
                          Some quick example text to build on the card
                        </Card.Text>
                      </Col>
                    </Row>
                    <Button
                      as={Link}
                      to="/profile/campaigns/123"
                      style={{
                        backgroundColor: "#004c46",
                        color: "#fff",
                        outline: "none",
                        fontSize: "14px",
                        border: "none",
                        width: "100%",
                      }}
                      className="text-white mt-2"
                    >
                      view
                    </Button>
                    <Button
                      as={Link}
                      to="/profile/campaigns/123/edit"
                      style={{
                        backgroundColor: "#004c46",
                        color: "#fff",
                        outline: "none",
                        fontSize: "14px",
                        border: "none",
                        width: "100%",
                      }}
                      className="text-white mt-2"
                    >
                      edit
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProfilePage;
