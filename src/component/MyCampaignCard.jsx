import ProgressBar from "@ramonak/react-progress-bar";
import moment from "moment";
import { motion } from "framer-motion";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import useGetCampaignTransactions from "../hooks/useGetCampaignTransactions";
import Help from "../images/help.jpeg";

const MyCampaignCard = ({ campaign }) => {
  const { totalDonations } = useGetCampaignTransactions(campaign.id);

  const percentageDonated = ((totalDonations / campaign.amount) * 100).toFixed(
    2
  );
  return (
    <Col sm={12} md={6} lg={4} className="my-2" key={campaign?.id}>
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
            to={"/campaigns/" + campaign?.id}
            style={{ textDecoration: "none" }}
            className="text-dark"
          >
            <Card.Img variant="top" src={Help} />
          </Link>
          <Card.Body>
            <Row>
              <Col lg="12" className="mb-2">
                <Link
                  to={"/campaigns/" + campaign?.id}
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  <h4>
                    {campaign?.title.length < 20
                      ? campaign.title
                      : campaign?.title.substr(0, 20) + "..."}
                  </h4>
                </Link>
                <div className="d-flex justify-content-between">
                  <Card.Text style={{ fontFamily: "Poppins" }}>
                    {campaign?.category}
                  </Card.Text>
                  <Card.Text style={{ fontFamily: "Poppins" }}>
                    {moment(campaign?.date).format("MMMM D,YYYY")}
                  </Card.Text>
                </div>
                <Card.Text style={{ fontFamily: "Poppins" }}>
                  {campaign?.description.length < 50
                    ? campaign.description
                    : campaign?.description.substr(0, 50) + "..."}
                </Card.Text>

                <ProgressBar
                  completed={percentageDonated | 0}
                  maxCompleted={100}
                  height="7px"
                  isLabelVisible={false}
                  bgColor="#004c46"
                />

                <Row className="mb-0 mt-2">
                  <Col className="mb-1">
                    <p className="m-0">
                      <span className="text-muted">
                        <NumberFormat
                          value={campaign.amount}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      justifyContent: "end",
                      display: "flex",
                    }}
                  >
                    <span className="text-muted">
                      <NumberFormat
                        value={totalDonations}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </span>
                    <p>({percentageDonated | 0}%)</p>
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
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

export default MyCampaignCard;