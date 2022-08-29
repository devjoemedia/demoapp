import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import useGetCampaignTransactions from "../hooks/useGetCampaignTransactions";
import axios from "axios";

const MyCampaignCard = ({ campaign }) => {
  const { totalDonations } = useGetCampaignTransactions(campaign.id);

  const percentageDonated = ((totalDonations / campaign.amount) * 100).toFixed(
    2
  );

  const handleWithrawal = async (id) => {
    // Test using Flutterwave
    const details = {
      account_bank: "MTN",
      account_number: "233540539205",
      amount: 100,
      currency: "GHS",
      beneficiary_name: "Joseph Nartey",
      naration: "making withdrawal for campaign" + id,
      reference: "121323_PMCKDU_1", //DU_1 is time to change status
      meta: {
        sender: "FundFair GH",
        sender_country: "GH",
        mobile_number: "233547558595",
      },
    };

    // initiate transfer
    try {
      console.log("starting trans");
      const url = "https://api.flutterwave.com/v3/transfers";
      const res = await axios({
        url,
        method: "get",
        details,
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
          "Content-Type": "application/json",
          Accept: "*",
        },
      });
      console.log("ending trans");

      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  };
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
            <Card.Img
              variant="top"
              src={campaign?.image}
              style={{ height: 200 }}
            />
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
              onClick={handleWithrawal}
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
