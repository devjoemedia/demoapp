import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { registerUser, setUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyfields, setEmptyFields] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  };

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      if (!fullName || !phone || !email || !password) {
        setEmptyFields(true);
        setTimeout(() => {
          setEmptyFields(false);
        }, 2000);
      } else {
        startLoading();

        const userInfo = {
          fullName: fullName,
          phone: phone,
        };

        const userData = await registerUser(email, password, userInfo);
        dispatch(setUser(userData));
        navigate("/my-campaigns", { replace: true });
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setLoading(false);
        setEmailError(true);
        setTimeout(() => {
          setEmailError(false);
        }, 2000);
      } else if (error.code === "auth/weak-password") {
        setLoading(false);
        setPasswordError(true);
        setTimeout(() => {
          setPasswordError(false);
        }, 2000);
      }

      console.log(error);
    }
  };

  return user ? (
    <Navigate to="/my-campaigns" replace={true} />
  ) : (
    <div>
      <Container
        className="py-5"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <div
          style={{
            width: "400px",
          }}
        >
          <p
            className="text-center mb-1"
            style={{
              fontSize: "2rem",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#004c46",
            }}
          >
            Sign up
          </p>

          <Form>
            {emptyfields && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Leave no input field empty
              </Alert>
            )}
            {emailError && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Email already in use
              </Alert>
            )}
            {passwordError && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Password should be at least 6 characters
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <p className="text-muted">
                  already have an account?
                  <Link
                    to="/login"
                    className="text-decoration-underline px-1 ms-1"
                    style={{ color: "#004c46" }}
                  >
                    Log in
                  </Link>
                </p>
              </Form.Label>
            </Form.Group>
            <Button
              type="submit"
              disabled={loading}
              onClick={handleSignUp}
              style={{
                backgroundColor: "#004c46",
                color: "#fff",
                width: "200px",
                outline: "none",
                padding: ".5rem 1rem",
                border: "none",
              }}
            >
              {loading ? (
                <i>
                  <Spinner
                    as="span"
                    animation="grow"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Signing up
                </i>
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
