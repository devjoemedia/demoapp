import React, { useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";
import Help from "../images/help.jpeg";
import { Navigate } from "react-router-dom";

const Edit = () => {
  const categories = [
    "Education",
    "Business",
    "Health & Medical",
    "Family",
    "Disaster",
    "Charity",
    "Funeral",
    "Others",
  ];
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(true);
  const [user, setUser] = useState(true);

  const selectCategory = (category) => {
    setCategory(category);
  };

  return (
    <Container style={{ maxWidth: "600px", padding: "20px 0" }}>
      {!user ? (
        <Navigate to="/login" replace={true} />
      ) : (
        // <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem 0" }}>
        <div>
          <h4>Edit Campaign</h4>
          <Form
          // className="d-flex"
          // style={{
          //   height: "300px",
          //   width: "500px",
          //   margin: "auto",
          // }}
          >
            <Form.Group className="mb-3">
              {imageUrl && (
                <Image
                  src={Help}
                  alt="banner"
                  style={{
                    height: "300px",
                    width: "500px",
                  }}
                  fluid
                />
              )}
              <Form.Label
                htmlFor="image"
                style={{
                  color: "#fff",
                  backgroundColor: "#004c46",
                  width: "200px",
                  outline: "none",
                  padding: ".4rem .5rem",
                  border: "1px solid #004c46",
                  marginTop: "10px",
                  textAlign: "center",
                  borderRadius: "3px",
                  cursor: "pointer",
                  display: "block",
                }}
              >
                {imageUrl ? "change file" : "upload file"}
              </Form.Label>
              <Form.Control id="image" type="file" hidden />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Title</Form.Label>
              <Form.Control type="text" placeholder="Feeding in Ukraine..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Category</Form.Label>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {categories.map((categoryItem, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #004c46",
                      borderRadius: "30px",
                      padding: "5px 15px",
                      display: "inline",
                      cursor: "pointer",
                      margin: "5px",
                      transition: "all 0.2s ease",
                      background:
                        category === categoryItem ? "#004c46" : "#fff",
                      color: category === categoryItem ? "#fff" : "#004c46",
                    }}
                    onClick={() => selectCategory(categoryItem)}
                    className="categoryItem"
                  >
                    {categoryItem}
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Target</Form.Label>
              <Form.Control type="number" placeholder="$55,000" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button
                variant="primary"
                style={{
                  color: "#fff",
                  backgroundColor: "#004c46",
                  width: "200px",
                  outline: "none",
                  padding: ".6rem .8rem",
                  border: "1px solid #004c46",
                }}
              >
                Publish
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </Container>
  );
};

export default Edit;
