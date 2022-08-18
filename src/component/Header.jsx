import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser, FaSeedling, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../redux/actions";

export default function Header() {
  let location = useLocation();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(setUser(null));
  };

  return (
    <Navbar
      variant="light"
      bg="#fff"
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        background: "#fff",
        // background: location.pathname === "/" ? "#e0ffd6" : "#fff",
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="logo d-flex align-items-center"
            style={{
              color: "#004c46",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <FaSeedling style={{ fontSize: "2rem" }} />
            <h4 className="m-0">FundFair</h4>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user && (
            <Nav
              className="mx-auto nav-item"
              style={{
                fonStyle: "normal",
                fontFamily: "poppins",
              }}
              activeKey={location.pathname}
            >
              <Nav.Link
                eventKey={1}
                as={Link}
                to="/campaigns"
                style={{ color: "#004c46" }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                as={Link}
                to="/my-campaigns"
                style={{ color: "#004c46" }}
              >
                My Campaigns
              </Nav.Link>
              <Nav.Link
                eventKey={3}
                as={Link}
                to="/campaigns/create"
                style={{ color: "#004c46" }}
              >
                Create Campaign
              </Nav.Link>
            </Nav>
          )}
          <Nav className="ms-auto nav-item" activeKey={location.pathname}>
            {user ? (
              <>
                <div
                  // as={Link}
                  // eventKey={4}
                  // to="/#logout"
                  onClick={handleLogout}
                  className="d-flex align-items-center text-decoration-none"
                >
                  <div style={{ cursor: "pointer", marginRight: "10px" }}>
                    <p className="m-0 text-dark">Logout</p>
                  </div>
                  <FaSignOutAlt />
                </div>

                <Nav.Link
                  as={Link}
                  eventKey={4}
                  to="/my-campaigns"
                  className="d-flex align-items-center text-decoration-none ms-3"
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <p className="m-0 text-dark">Jane Doe</p>
                  </div>
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      padding: "0px",
                    }}
                    className="ms-2 d-flex align-items-center justify-content-center"
                  >
                    <FaRegUser size={22} />
                  </div>
                  {/* <img
                    src={ProfileImage}
                    alt="profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#f1f1f1",
                      marginLeft: "10px",
                      fontSize: "14px",
                      overflow: "hidden",
                    }}
                  /> */}
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link eventKey={5} as={Link} to="/login">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      color: "#004c46",
                      minWidth: "130px",
                      outline: "none",
                      border: "1px solid #004c46",
                    }}
                  >
                    Log in
                  </Button>
                </Nav.Link>

                <Nav.Link eventKey={6} as={Link} to="/register">
                  <Button
                    style={{
                      backgroundColor: "#004c46",
                      color: "#fff",
                      minWidth: "130px",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    Sign up
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
