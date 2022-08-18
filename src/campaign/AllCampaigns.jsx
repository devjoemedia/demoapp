import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";

const AllCampaigns = () => {
  return (
    <div>
      <Container className="py-5">
        <Col xs={12} sm={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Search term"
              value=""
              // onChange={(e) => setEmail(e.target.value)}
              style={{ fontSize: "18px" }}
            />
          </Form.Group>
        </Col>
        <h1
          className="mb-3"
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Campaigns
        </h1>
        <Row className="py-2">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </Row>
        <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </Container>
    </div>
  );
};

export default AllCampaigns;
