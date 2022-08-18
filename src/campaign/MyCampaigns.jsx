import { Button, Row, Col, Card, Container, Pagination } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import Help from "../images/help.jpeg";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";

const MyCampaigns = () => {
  const data = [1, 2, 3];
  const user = useSelector((state) => state.user);

  return (
    <Container style={{ padding: "20px 0" }}>
      {!user ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <Container>
          <h4 style={{ color: "#004c46" }}>My Campaigns </h4>
          <Row className="py-2">
            {data.map((item, index) => (
              <Col sm={12} md={6} lg={4} className="my-2">
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
                    <Link
                      to="/campaigns/123"
                      style={{ textDecoration: "none" }}
                      className="text-dark"
                    >
                      <Card.Img variant="top" src={Help} />
                    </Link>
                    <Card.Body>
                      <Row>
                        <Col lg="12" className="mb-2">
                          <Link
                            to="/campaigns/123"
                            style={{ textDecoration: "none" }}
                            className="text-dark"
                          >
                            <h4>Kidney Transplant</h4>
                          </Link>
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
                            <Col
                              style={{ justifyContent: "end", display: "flex" }}
                            >
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
                        Withdraw Funds
                      </Button>
                      {/* <div className="d-flex justify-content-between">
                    <img src={WithdrawIcon} alt="withdraw" />
                    <img src={EditIcon} alt="edit" />
                  </div> */}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Last />
          </Pagination>
        </Container>
      )}
    </Container>
  );
};

export default MyCampaigns;
