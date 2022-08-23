import React, { useState } from "react";
import { Button, Container, Form, Image, Alert, Spinner } from "react-bootstrap";
import Help from "../images/help.jpeg";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {v4 as uuid } from "uuid";
import { addCampaign } from "../redux/actions";

const Create = () => {
  const categories = [
    "Cancer",
    "Child Labour",
    "Diabetes",
    "High blood pressure",
    "High cholesterol",
    "Obesity",
    "Osteoporosis",
    "Stroke",
    "Diarrhea",
    "Asthma attack",
    "Burn",
    "Bronchitis",
    "Broken bone",
    "Respiratory infection",
    "Others",
  ];
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const selectCategory = (category) => {
    setCategory(category);
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const showSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const handlePublish = (e) => {
    e.preventDefault();

    if(!title || !category || !amount || !description) {
      showError();
    } else {
      startLoading();

      let newCampaign = {
        id: uuid(),
        userId: user.uid,
        date: Date.now(),
        title: title,
        category: category,
        amount: amount,
        description: description,
      };

      showSuccess();

      dispatch(addCampaign(newCampaign));

      setTitle("");
      setCategory("");
      setAmount("");
      setDescription("");
    }
  };

  return (
    <Container style={{ maxWidth: "600px", padding: "20px 0" }}>
      {!user ? (
        <Navigate to="/login" replace={true} />
      ) : (
        // <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem 0" }}>
        <Container>
          <h4>Create Campaign</h4>
          <Form>
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
                }}
              >
                {imageUrl ? "change file" : "upload file"}
              </Form.Label>
              <Form.Control id="image" type="file" hidden />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Title</Form.Label>
              <Form.Control type="text" placeholder="Feeding in Ukraine..." value={title} onChange={(e) => setTitle(e.target.value)}/>
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
              <Form.Label className="fw-bold">Bill Amount</Form.Label>
              <Form.Control type="number" placeholder="$55,000" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control as="textarea" rows={7} placeholder="Summarize your story" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            {error && (<Alert variant="danger" className="text-center mt-1 mb-3">Leave no field empty / select a category </Alert>)}
            {success && (<Alert variant="success" className="text-center mt-1 mb-3"> Campaign successfully created </Alert>)}
            <Form.Group className="mb-3">
              <Button
                disabled={loading}
                onClick={handlePublish}
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
              {loading ? (
                <i>
                  <Spinner
                    as="span"
                    animation="border"
                    variant="secondary"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{" "}
                  Please wait..
                </i>
              ) : (
                "Publish"
              )}
              </Button>
            </Form.Group>
          </Form>
        </Container>
      )}
    </Container>
  );
};

export default Create;
