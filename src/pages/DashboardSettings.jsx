import React from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import ProfileImage from "../images/profile.jpg";

const DashboardSettings = () => {
  return (
    <Container>
      <div className="p-2">
        <Row
          className="mb-3 py-4 align-items-center"
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <Col md={3}>
            <div>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#f1f1f1",
                  margin: "auto",
                }}
              >
                <img
                  src={ProfileImage}
                  alt="profile"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#f1f1f1",
                    marginRight: "10px",
                    fontSize: "14px",
                    overflow: "hidden",
                  }}
                />
              </div>
              <div className="text-center">
                <Form.Group>
                  <Form.Label
                    htmlFor="image"
                    style={{
                      color: "#004c46",
                      textAlign: "center",
                      borderRadius: "3px",
                      cursor: "pointer",
                      fontSize: "12px",
                      textDecoration: "underline",
                    }}
                  >
                    change photo
                  </Form.Label>
                  <Form.Control id="image" type="file" hidden />
                </Form.Group>
                <p className="m-0 text-dark">Jane Doe</p>
                <p className="m-0 text-muted">jane@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <form>
              <Row>
                <Col xs={12} sm={6}>
                  <p marginBottom={"5px"} fontSize={"14px"}>
                    Old Password
                  </p>
                  <input
                    type="password"
                    placeholder="Old Password"
                    // value="First Name"
                    style={{
                      border: "1.5px solid #ccc",
                      borderRadius: "3.5px",
                      width: "100%",
                      outline: "none",
                      padding: "10px 10px",
                    }}
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <p marginBottom={"5px"} fontSize={"14px"}>
                    New Password
                  </p>
                  <input
                    type="password"
                    placeholder=" New Password"
                    // value="Last Name"
                    style={{
                      border: "1.5px solid #ccc",
                      borderRadius: "3.5px",
                      width: "100%",
                      outline: "none",
                      padding: "10px 10px",
                    }}
                  />
                </Col>
              </Row>
              {/* <Button
                variant="outline-dark"
                type="submit"
                style={{
                  backgroundColor: "#004c46",
                  color: "#fff",
                  width: "200px",
                  outline: "none",
                  padding: ".5rem 1rem",
                  border: "none",
                  marginTop: "10px",
                }}
              >
                Update
              </Button> */}
            </form>
          </Col>
        </Row>
      </div>

      <div
        sx={{
          divShadow: { md: "0px 0px 3px 0px rgba(0,0,0,0.2)" },
          padding: 2,
        }}
      >
        <h5 style={{ color: "#004c46" }}>Profile details </h5>
        <Row>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              First Name
            </p>
            <input
              placeholder="First Name"
              // value="First Name"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              Last Name
            </p>
            <input
              placeholder="Last Name"
              // value="Last Name"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              Phone Number
            </p>
            <input
              placeholder="Phone Number"
              // value="Phone Number"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              Email address
            </p>
            <input
              placeholder="Email address"
              // value="Email address"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              City
            </p>
            <input
              placeholder="City"
              // value="City"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              State/Region
            </p>
            <input
              placeholder="State/Region"
              // value="State/City"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              Post Code
            </p>
            <input
              placeholder="Post Code"
              // value="Post Code"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
          <Col xs={12} sm={6}>
            <p marginBottom={"5px"} fontSize={"14px"}>
              Country
            </p>
            <input
              placeholder="Country"
              // value="Country"
              style={{
                border: "1.5px solid #ccc",
                borderRadius: "3.5px",
                width: "100%",
                outline: "none",
                padding: "10px 10px",
              }}
            />
          </Col>
        </Row>
        <Button
          variant="outline-dark"
          type="submit"
          style={{
            backgroundColor: "#004c46",
            color: "#fff",
            width: "200px",
            outline: "none",
            padding: ".5rem 1rem",
            border: "none",
            marginTop: "10px",
          }}
        >
          Save
        </Button>
      </div>
    </Container>
  );
};

export default DashboardSettings;
