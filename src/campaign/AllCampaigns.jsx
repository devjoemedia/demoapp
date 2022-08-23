import { useState } from "react";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";
import { useSelector } from "react-redux";

const AllCampaigns = (props) => {
  const campaigns = useSelector((state) => state.campaigns);
  

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container className="py-5">
        <Col xs={12} sm={6}>
          <Form.Group onSubmit={handleSearch} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Search term"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        {campaigns.map((campaign, index) => {
          return (
            <CampaignCard key={campaign.id} campaign={campaign} index={index}/>
          );
        })}
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
