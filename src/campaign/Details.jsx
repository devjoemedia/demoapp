import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Help from "../images/help.jpeg";
import { BsFillTagFill } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { usePaystackPayment } from "react-paystack";
import { useParams } from "react-router-dom";

const Details = () => {
  const [fullName, setFullName] = useState("Annanymouse");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const { id } = useParams("id");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    console.log(reference);
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

            <div className="d-flex align-items-center justify-content-between  my-3 mt-4">
              <h5 style={{ fontSize: "14px" }}>Last 5 donations</h5>
              <h5 style={{ fontSize: "14px" }}>2k donations</h5>
            </div>

            <div
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
                  <p className="m-0 p-0 text-dark">Jane Doe</p>
                  <p className="m-0 p-0 text-muted">28 min ago</p>
                </div>
              </div>

              <p>$40.00</p>
            </div>
            <div
              className="d-flex justify-content-between align-items-center my-3 "
              style={{ alignItems: "center", fontSize: "12px" }}
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
                  <p className="m-0 p-0 text-dark">Jane Doe</p>
                  <p className="m-0 p-0 text-muted">28 min ago</p>
                </div>
              </div>

              <p>$40.00</p>
            </div>
            <div
              className="d-flex justify-content-between align-items-center my-3 "
              style={{ alignItems: "center", fontSize: "12px" }}
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
                  <p className="m-0 p-0 text-dark">Jane Doe</p>
                  <p className="m-0 p-0 text-muted">28 min ago</p>
                </div>
              </div>

              <p>$40.00</p>
            </div>
            <div
              className="d-flex justify-content-between align-items-center my-3 "
              style={{ alignItems: "center", fontSize: "12px" }}
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
                  <p className="m-0 p-0 text-dark">Jane Doe</p>
                  <p className="m-0 p-0 text-muted">28 min ago</p>
                </div>
              </div>

              <p>$40.00</p>
            </div>
            <div
              className="d-flex justify-content-between align-items-center my-3 "
              style={{ alignItems: "center", fontSize: "12px" }}
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
                  <p className="m-0 p-0 text-dark">Jane Doe</p>
                  <p className="m-0 p-0 text-muted">28 min ago</p>
                </div>
              </div>

              <p>$40.00</p>
            </div>

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
              src={Help}
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
                  <p className="m-0 text-dark">Jane Doe</p>
                </div>
              </div>

              <div>
                <p className="m-0">created on may 24th, 2015</p>
                <p className="m-0">
                  <BsFillTagFill /> Family
                </p>
              </div>
            </div>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              sapiente a, exercitationem incidunt voluptatum molestiae obcaecati
              perferendis. Quidem voluptatum facere explicabo nostrum? A ipsam
              nisi dolorum delectus consequatur rerum numquam. Nam eum illum
              provident quod omnis eos totam ipsa at tempore! Reiciendis
              cupiditate debitis nam adipisci soluta a quas optio, quasi
              quisquam, in qui perferendis praesentium odio alias dignissimos
              nihil?
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
          </Col>
        </Row>

        {/* Modal section */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>make donation</Modal.Title>
          </Modal.Header>
          <div className="mx-3">
            <small>please email is required*</small>
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
