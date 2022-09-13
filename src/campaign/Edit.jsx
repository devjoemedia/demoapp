import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import useGetCampaign from "../hooks/useGetCampaign";
import NumberFormat from "react-number-format";
import ScrollToTop from "../component/ScrollToTop";

const Edit = () => {
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

  const { id } = useParams("id");

  let campaignId = id;
  const { campaign } = useGetCampaign(campaignId);

  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadLink, setUploadLink] = useState(null);

  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (campaign) {
      setCategory(campaign.category);
      setPreviewUrl(campaign?.image);
      setUploadLink(campaign?.image);
      setTitle(campaign?.title);
      setDescription(campaign?.description);
      setAmount(campaign?.amount);
    }
  }, [campaign]);

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

    if (!title || !category || !amount || !description) {
      showError();
      return;
    } else {
      setLoading(true);

      const campaignRef = doc(firestore, "campaigns", campaign?.id);

      if (imageUrl) {
        let id = uuid();
        let imageRef = ref(storage, `images/${id}.jpg`);
        await uploadBytes(imageRef, imageUrl);

        await getDownloadURL(imageRef)
          .then(async (url) => {
            await updateDoc(campaignRef, {
              title,
              category,
              amount: amount * 1,
              description,
              image: url,
            });
          })
          .catch((err) => console.log(err.message));
      } else {
        await updateDoc(campaignRef, {
          title,
          category,
          amount: amount * 1,
          description,
          image: uploadLink,
        });
      }

      showSuccess();
      setLoading(false);
      setPreviewUrl(null);
      setTitle("");
      setCategory("");
      setAmount("");
      setDescription("");
      navigate(`/campaigns/${campaign?.id}`, { replace: true });
    }
  };

  return (
    <ScrollToTop>
      <Container style={{ maxWidth: '600px', padding: '20px 0' }}>
        {!user ? (
          <Navigate to="/login" replace={true} />
        ) : (
          <Container>
            <h4>Edit Campaign</h4>
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
                    console.log(
                      e.target.files[0],
                      URL.createObjectURL(e.target.files[0])
                    )
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

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Bill Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="₵55,000"
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
                  Campaign successfully updated
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
                      Updating..
                    </>
                  ) : (
                    'Update'
                  )}
                </Button>

                <Button
                  variant="primary"
                  style={{
                    color: '#fff',
                    backgroundColor: '#004c46',
                    width: '200px',
                    outline: 'none',
                    padding: '.6rem .8rem',
                    border: '1px solid #004c46',
                  }}
                  className="ms-sm-0 ms-md-3"
                >
                  Delete
                </Button>
              </Form.Group>
            </Form>
          </Container>
        )}
      </Container>
    </ScrollToTop>
  )
};

export default Edit;
