import { Container, Row } from "react-bootstrap";
import CampaignCard from "../component/CampaignCard";

const Campaigns = () => {
  return (
    <div>
      <Container className="py-5">
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
      </Container>
    </div>
  );
};

export default Campaigns;
