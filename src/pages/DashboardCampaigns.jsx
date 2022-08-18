import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "../images/help.jpeg";
import { motion } from "framer-motion";

const DashboardCampaign = () => {
  const data = [1, 2, 3];
  return (
    <div>
      <h4 style={{ color: "#004c46" }}>Campaigns </h4>
      <Row className="py-2">
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
                    to="123"
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
                    to="123/edit"
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
        {/* <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard /> */}
      </Row>
    </div>
  );
};

export default DashboardCampaign;
