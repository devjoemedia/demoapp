import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addCampaign } from "../redux/actions";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import NumberFormat from "react-number-format";
import ScrollToTop from "../component/ScrollToTop";

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
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadLink, setUploadLink] = useState(null);

  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("Life Saving Surgery");
  const [amount, setAmount] = useState("25000");
  const [description, setDescription] = useState("Nii Amartey is an elderly man who resides in Achimota with an extremely rare illness called Vein of Galen Malformation (VOGM), a rare blood vessel abnormality inside the brain. He was diagnosed some months ago. VOGM is a congenital malformation of a particular vein in the brain that steals blood flow from the body to feed itself and poses significant stress to the heart and brain. Several surgeries are needed to help cure Dada Yaw. we need help to pay for his medical bills ");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectCategory = (category) => {
    setCategory(category);
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
    }, 3000);
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    let id = uuid();
    await uploadImage(id);

    if (!title || !category || !amount || !description || !uploadLink) {
      showError();
      return;
    } else {
      setLoading(true);

      let newCampaign = {
        id,
        userId: user.uid,
        creatorName: user.fullName,
        date: Date.now(),
        title: title,
        category: category,
        amount: amount * 1,
        description: description,
        image: uploadLink,
        withdrawn: false,
        recipientCode: null, //will be created through paystack
      };

      await addCampaign(newCampaign);

      showSuccess();
      setLoading(false);
      setPreviewUrl(null);
      setTitle("");
      setCategory("");
      setAmount("");
      setDescription("");
    }
  };

  const uploadImage = async (id) => {
    if (!imageUrl) return;

    let imageRef = ref(storage, `images/${id}.jpg`);
    await uploadBytes(imageRef, imageUrl).then();

    await getDownloadURL(imageRef)
      .then((url) => {
        setUploadLink(url);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <ScrollToTop>
      <Container style={{ maxWidth: '600px', padding: '20px 0' }}>
        {!user ? (
          <Navigate to="/login" replace={true} />
        ) : (
          <Container>
            <h4>Create Campaign</h4>
            <Form>
              <Form.Group className="mb-3">
                {previewUrl && (
                  <Image
                    src={previewUrl}
                    alt="banner"
                    style={{
                      height: '300px',
                      width: '500px',
                    }}
                    fluid
                  />
                )}

                <Form.Label
                  htmlFor="image"
                  style={{
                    color: '#fff',
                    backgroundColor: '#004c46',
                    width: '200px',
                    outline: 'none',
                    padding: '.4rem .5rem',
                    border: '1px solid #004c46',
                    marginTop: '10px',
                    textAlign: 'center',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  {previewUrl ? 'change file' : 'upload file'}
                </Form.Label>
                <Form.Control
                  id="image"
                  type="file"
                  hidden
                  onChange={(e) => {
                    setImageUrl(e.target.files[0])
                    setPreviewUrl(URL.createObjectURL(e.target.files[0]))
                    console.log(imageUrl, e.target.files[0])
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Feeding in Ukraine..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Category</Form.Label>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {categories.map((categoryItem, index) => (
                    <div
                      key={index}
                      style={{
                        border: '1px solid #004c46',
                        borderRadius: '30px',
                        padding: '5px 15px',
                        display: 'inline',
                        cursor: 'pointer',
                        margin: '5px',
                        transition: 'all 0.2s ease',
                        background:
                          category === categoryItem ? '#004c46' : '#fff',
                        color: category === categoryItem ? '#fff' : '#004c46',
                      }}
                      onClick={() => selectCategory(categoryItem)}
                      className="categoryItem"
                    >
                      {categoryItem}
                    </div>
                  ))}
                </div>
              </Form.Group>

              {/* {category === "Others" && (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => selectCategory(e.target.value)}
                />
              </Form.Group>
            )} */}

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Bill Amount</Form.Label>
                
                <Form.Control
                  type="number"
                  placeholder="₵55,000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  placeholder="Summarize your story"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              {error && (
                <Alert variant="danger" className="text-center mt-1 mb-3">
                  please choose an image and fill all fields
                </Alert>
              )}
              {success && (
                <Alert variant="success" className="text-center mt-1 mb-3">
                  Campaign successfully created
                </Alert>
              )}
              <Form.Group className="mb-3">
                <Button
                  disabled={loading}
                  onClick={handlePublish}
                  variant="primary"
                  style={{
                    color: '#fff',
                    backgroundColor: '#004c46',
                    width: '200px',
                    outline: 'none',
                    padding: '.6rem .8rem',
                    border: '1px solid #004c46',
                  }}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        variant="secondary"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{' '}
                      Please wait..
                    </>
                  ) : (
                    'Publish'
                  )}
                </Button>
              </Form.Group>
            </Form>
          </Container>
        )}
      </Container>
    </ScrollToTop>
  )
};

export default Create;
