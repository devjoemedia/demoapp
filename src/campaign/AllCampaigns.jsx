import { useState } from "react";
import { Col, Container, Form, Pagination, Row } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";
import ScrollToTop from "../component/ScrollToTop";
import useGetCampaign from "../hooks/useGetCampaign";
import NoData from "../images/nodata.png";

const AllCampaigns = () => {
  let { campaigns } = useGetCampaign();

  const [search, setSearch] = useState("");
  let list = [...campaigns];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    // let text = e.target.value;
  };

  list = campaigns.filter((campaign) => {
    if (
      campaign.title.toLowerCase().includes(search.toLowerCase()) ||
      campaign.description.toLowerCase().includes(search.toLowerCase()) ||
      campaign.category.toLowerCase().includes(search.toLowerCase())
    ) {
      return campaign;
    }
  });

  return (
    <ScrollToTop>
      <Container className="py-5">
        <Col xs={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Search</Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter Search term"
              value={search}
              onChange={(e) => handleSearch(e)}
              style={{ fontSize: "18px" }}
            />
          </Form.Group>
        </Col>
        {list.length > 0 ? (
          <Row className="py-2">
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
            {list?.map((campaign, index) => {
              return (
                <CampaignCard
                  key={campaign?.id}
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
    </ScrollToTop>
  );
};

export default AllCampaigns;
