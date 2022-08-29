import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { BsFillTagFill } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { usePaystackPayment } from "react-paystack";
import { useParams } from "react-router-dom";
import moment from "moment";
import millify from "millify";
import { saveTransactionToFirebase, setUser } from "../redux/actions";
import useGetCampaignTransactions from "../hooks/useGetCampaignTransactions";
import NumberFormat from "react-number-format";
import useGetCampaign from "../hooks/useGetCampaign";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/config";

const Details = () => {
  const [fullName, setFullName] = useState("Annonymos");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const { id } = useParams("id");

  const { transactions, totalDonations } = useGetCampaignTransactions(id);

  let campaignId = id;
  const { campaign } = useGetCampaign(campaignId);

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100,
    currency: "GHS",
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    metadata: {
      campaignId: id,
      fullName,
      phone,
      message,
    },
  };

  const onSuccess = (reference) => {
    const transactionDetails = {
      reference: reference.reference,
      status: reference.status,
      amount: amount * 100,
      campaignId: id,
      fullName,
      phone,
      message,
      createdAt: Date.now(),
    };

    saveTransactionToFirebase(transactionDetails);
    setShow(false);
  };

  const onClose = () => {
    console.log("closed");
    setShow(true);
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = () => {
    if (email === "") {
      return;
    }
    if (amount <= 0) {
      return;
    }

    initializePayment(onSuccess, onClose);
  };

  const handleWithrawal = async () => {
    // create transfer recipient
    // let recipientCode = null;

    // if (!user.recipientCode) {
    //   let { data } = await axios.post(
    //     "https://api.paystack.co/transferrecipient",
    //     {
    //       type: "mobile_money",
    //       name: "Abina Nana",
    //       account_number: "0551234987", //user.phone
    //       bank_code: "MTN",
    //       currency: "GHS",
    //     },
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   recipientCode = data.data.recipient_code;

    //   if (!recipientCode) return console.log("no recipient code");

    //   const userRef = doc(firestore, "users", user.uid);

    //   let userId = user.uid;

    //   await updateDoc(userRef, {
    //     recipientCode,
    //   });

    //   const unsub = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
    //     dispatch(
    //       setUser({
    //         ...doc.data(),
    //         uid: userId,
    //       })
    //     );
    //   });
    // }

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
          "Content-Type": "application/json",
          Accept: "*",
          Authorization: "Bearer " + process.env.REACT_APP_PAYSTACK_SECRET_KEY,
        },
      });
      console.log("ending trans");

      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const percentageDonated = ((totalDonations / campaign?.amount) * 100).toFixed(
    2
  );

  return (
    <>
      <Container>
        <Row className="justify-content-between py-4">
          <Col
            sm={12}
            md={4}
            style={{
              padding: "20px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Row className="mb-0 mt-2">
              <Col className="mb-1">
                <p className="m-0" onClick={handleWithrawal}>
                  Target:
                  <span className="text-muted">
                    <NumberFormat
                      value={campaign?.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </span>
                </p>
              </Col>
              <Col style={{ justifyContent: "end", display: "flex" }}>
                <span className="text-muted">
                  <NumberFormat
                    value={totalDonations}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </span>
                <p> ({percentageDonated | 0}%)</p>
              </Col>
            </Row>
            <ProgressBar
              completed={percentageDonated}
              maxCompleted={100}
              height="7px"
              isLabelVisible={false}
              bgColor="#004c46"
            />

            {campaign?.userId === user?.uid ? (
              <div className=" mt-3">
                <Button
                  style={{
                    backgroundColor: "#004c46",
                    color: "#fff",
                    width: "100%",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "none",
                    margin: "10px 0",
                  }}
                  className="d-block"
                  onClick={handleShow}
                >
                  Withdraw Funds
                </Button>
              </div>
            ) : (
              <div className=" mt-3">
                <Button
                  style={{
                    backgroundColor: "#004c46",
                    color: "#fff",
                    width: "100%",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "none",
                    margin: "10px 0",
                  }}
                  className="d-block"
                  onClick={handleShow}
                >
                  Donate Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#004c46",
                    width: "100%",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "1px solid #004c46",
                    margin: "10px 0",
                  }}
                  className="d-block"
                  onClick={handleShow}
                >
                  Flag Campaign as Fraud
                </Button>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-between  my-3 mt-4">
              <h5 style={{ fontSize: "14px" }}>Last 5 donations</h5>
              <h5 style={{ fontSize: "14px" }}>
                {millify(transactions?.length)} donations
              </h5>
            </div>

            {transactions?.length > 0 &&
              transactions?.slice(0, 5).map((transaction) => (
                <div
                  key={transaction.reference}
                  className="d-flex justify-content-between align-items-center my-3 "
                  style={{ fontSize: "12px" }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#f1f1f1",
                        padding: "0px",
                      }}
                      className="me-2 d-flex align-items-center justify-content-center"
                    >
                      <FaRegUser size={22} />
                    </div>
                    <div>
                      <p className="m-0 p-0 text-dark">
                        {transaction.fullName}
                      </p>
                      <p className="m-0 p-0 text-muted">
                        {moment(transaction.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>

                  <p>
                    <NumberFormat
                      value={(transaction.amount / 100).toFixed(2)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </p>
                </div>
              ))}

            <Button
              style={{
                backgroundColor: "#004c46",
                color: "#fff",
                width: "100%",
                outline: "none",
                padding: ".8rem 1rem",
                border: "none",
                margin: "10px 0",
              }}
              className="d-block mt-4"
            >
              Share
            </Button>
          </Col>

          <Col sm={12} md={7}>
            <img
              src={campaign?.image}
              alt="banner"
              style={{ height: "350px", width: "100%", borderRadius: "10px" }}
            />

            <div
              className="mt-3 d-flex justify-content-between align-items-center"
              style={{ borderBottom: "1px solid #f1f1f1" }}
            >
              <div className="my-3 d-flex align-items-center">
                {/* <img
                  src={ProfileImage}
                  alt="profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#f1f1f1",
                    marginRight: "10px",
                    fontSize: "14px",
                    overflow: "hidden",
                  }}
                /> */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#f1f1f1",
                    padding: "0px",
                  }}
                  className="me-2 d-flex align-items-center justify-content-center"
                >
                  <FaRegUser size={22} />
                </div>
                <div>
                  <p className="m-0 text-dark">{campaign?.creatorName}</p>
                </div>
              </div>

              <div>
                <p className="m-0">
                  created on {moment(campaign?.date).format("MMMM D,YYYY")}
                </p>
                <p className="m-0">
                  <BsFillTagFill /> {campaign?.category}
                </p>
              </div>
            </div>
            <p className="py-3">{campaign?.description}</p>

            {campaign?.userId === user?.uid ? (
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
                  onClick={handleShow}
                >
                  Withdraw Funds
                </Button>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#004c46",
                    width: "45%",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "1px solid #004c46",
                    marginLeft: "10px",
                  }}
                >
                  Share
                </Button>
              </div>
            ) : (
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
                  onClick={handleShow}
                >
                  Donate Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "#fff",
                    color: "#004c46",
                    width: "45%",
                    outline: "none",
                    padding: ".8rem 1rem",
                    border: "1px solid #004c46",
                    marginLeft: "10px",
                  }}
                >
                  Share
                </Button>
              </div>
            )}
          </Col>
        </Row>

        {/* Modal section */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>make donation</Modal.Title>
          </Modal.Header>
          <div className="mx-3">
            <small>please email & amount are required*</small>
          </div>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  autoFocus
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email* </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0546655665"
                  autoFocus
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Amount* </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="100"
                  autoFocus
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{
                backgroundColor: "#fff",
                color: "#004c46",
                width: "200px",
                outline: "none",
                padding: ".6rem .8rem",
                border: "1px solid #004c46",
                marginLeft: "10px",
              }}
            >
              Cancel
            </Button>
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
              onClick={handlePayment}
            >
              Donate
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Details;
