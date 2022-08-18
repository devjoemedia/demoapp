import React, { useState } from "react";
import { Button, Container, Form, Alert, Spinner } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { login, setUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyfields, setEmptyFields] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();

      if (!email && !password) {
        setEmptyFields(true);
        setTimeout(() => {
          setEmptyFields(false);
        }, 2000);
      } else {
        startLoading();

        const userData = await login(email, password);

        dispatch(setUser(userData));
        navigate("/profile", { replace: true });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setLoading(false);
        setInvalidEmail(true);
        setTimeout(() => {
          setInvalidEmail(false);
        }, 2000);
      } else if (error.code === "auth/wrong-password") {
        setLoading(false);
        setWrongPassword(true);
        setTimeout(() => {
          setWrongPassword(false);
        }, 2000);
      }

      console.log(error);
    }
  };

  return user ? (
    <Navigate to="/profile" replace={true} />
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
            className="text-center mb-4"
            style={{
              fontSize: "2rem",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#004c46",
            }}
          >
            Log in
          </p>
          <Form>
            {emptyfields && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Enter email and password
              </Alert>
            )}
            {invalidEmail && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Invalid email address
              </Alert>
            )}
            {wrongPassword && (
              <Alert variant="danger" className="text-center mt-1 mb-3">
                Wrong password
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
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
                  don't have an account?
                  <Link
                    to="/register"
                    className="text-decoration-underline px-1 ms-1"
                    style={{ color: "#004c46" }}
                  >
                    Sign up
                  </Link>
                </p>
              </Form.Label>
            </Form.Group>

            <Button
              variant="outline-dark"
              type="submit"
              disabled={loading}
              onClick={handleSignIn}
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
                  Logging in
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

export default Login;
