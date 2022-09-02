import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import useGetCampaignTransactions from "../hooks/useGetCampaignTransactions";
import axios from "axios";
import Gift from "../images/giftbox.png";
import { MdModeEditOutline } from "react-icons/md";

const MyCampaignCard = ({ campaign }) => {
  const [message, setMessage] = useState(
    "please confirm the destination account for your funds transfer! +23355545555"
  );
  const [btnMsg, setBtnMsg] = useState("Confirm");
  const [processPayment, setProcessPayment] = useState(false);

  const [withdrawn, setWithdrawn] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const { totalDonations } = useGetCampaignTransactions(campaign.id);

  const percentageDonated = ((totalDonations / campaign.amount) * 100).toFixed(
    2
  );

  // show withdrawn
  const closeWithdrawn = () => setWithdrawn(false);

  const closeForm = () => {
    setShowForm(false);
    setMessage(
      "please confirm the destination account for your funds transfer! +23355545555"
    );
    setBtnMsg("Confirm");
  };
  const openForm = () => setShowForm(true);

  // handle Payment
  const handleWithrawal = async () => {
    setProcessPayment(true);
    setMessage("proccessing your funds this may take a few minutes...");
    setBtnMsg("Proccessing...");

    // Test using Flutterwave
    const details = {
      account_bank: "MTN",
      account_number: "233540539205",
      amount: 100,
      currency: "GHS",
      beneficiary_name: "Joseph Nartey",
      naration: "making withdrawal for campaign" + campaign.id,
      reference: "121323_PMCKDU_1", //DU_1 is time to change status
      meta: {
        sender: "FundFair GH",
        sender_country: "GH",
        mobile_number: "233547558595",
      },
    };

    // initiate transfer
    try {
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

      console.log({ res });
      setShowForm(false);
      setWithdrawn(true);
      setProcessPayment(false);
    } catch (err) {
      console.log(err);
      setProcessPayment(false);
      setMessage(err.message);
      setBtnMsg("Retry");
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
            to={"/campaigns/edit/" + campaign?.id}
            style={{
              textDecoration: "none",
              position: "absolute",
              right: "5px",
              top: "5px",
              backgroundColor: "rgba(0, 76, 70, .81)",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
            className="text-white d-flex align-items-center justify-content-center"
          >
            <MdModeEditOutline />
          </Link>
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
              // onClick={handleWithrawal}
              onClick={openForm}
            >
              Withdraw Funds
            </Button>
          </Card.Body>
        </Card>
      </motion.div>

      {/* Withdrawal Form */}
      <Modal show={showForm} onHide={closeForm}>
        <Modal.Body className="text-center d-flex justify-content-between align-items-center flex-column">
          {/* <h1>Please wait while we transfer your funds</h1> */}
          <p>{message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{
              color: "#fff",
              backgroundColor: "#004c46",
              width: "200px",
              outline: "none",
              padding: ".6rem .8rem",
              border: "1px solid #004c46",
              marginLeft: "10px",
            }}
            disabled={processPayment}
            onClick={handleWithrawal}
          >
            {processPayment ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  variant="secondary"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                {btnMsg}
              </>
            ) : (
              <>{btnMsg}</>
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Successful Withdrawal */}
      <Modal show={withdrawn} onHide={closeWithdrawn}>
        <Modal.Body className="text-center d-flex justify-content-between align-items-center flex-column">
          <img src={Gift} alt="thank you" className="img-fluid" />
          <h2>Funds Transfered Successfully</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            style={{
              color: "#fff",
              backgroundColor: "#004c46",
              width: "200px",
              outline: "none",
              padding: ".6rem .8rem",
              border: "1px solid #004c46",
              marginLeft: "10px",
            }}
            onClick={closeWithdrawn}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default MyCampaignCard;
