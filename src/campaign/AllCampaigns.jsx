import { useState } from "react";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";
import useGetCampaign from "../hooks/useGetCampaign";
import NoData from "../images/nodata.png";

const AllCampaigns = () => {
  const { campaigns } = useGetCampaign();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container className="py-5">
        {campaigns.length > 0 ? (
          <Row className="py-2">
            <Col xs={12} sm={6}>
              <Form.Group
                onSubmit={handleSearch}
                className="mb-3"
                controlId="formBasicEmail"
              >
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
            {campaigns?.map((campaign, index) => {
              return (
                <CampaignCard
                  key={campaign.id}
                  campaign={campaign}
                  index={index}
                />
              );
            })}
            <Pagination>
              <Pagination.First />
              <Pagination.Item>{1}</Pagination.Item>

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Last />
            </Pagination>
          </Row>
        ) : (
          <div
            style={{
              width: "100%",
              minHeight: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={NoData}
              alt="no data found"
              className="img-fluid"
              width="150"
              height="150"
            />
            <h1>No Campaigns Found!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllCampaigns;
