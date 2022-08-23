import { Row, Container, Pagination } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetMyCampaigns from "../hooks/useGetMyCampaigns";
import MyCampaignCard from "../component/MyCampaignCard";

const MyCampaigns = () => {
  const user = useSelector((state) => state.user);

  let userId = user.uid;
  const { campaigns } = useGetMyCampaigns(userId);

  return (
    <Container style={{ padding: "20px 0" }}>
      {!user ? (
        <Navigate to="/login" replace={true} />
      ) : (
        <Container>
          <h4 style={{ color: "#004c46" }}>My Campaigns </h4>

          {campaigns.length > 0 ? (
            <Row className="py-2">
              {campaigns?.map((campaign, index) => (
                <MyCampaignCard key={campaign.id} campaign={campaign} />
              ))}
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
            <div>
              <h1>You don't have not created a campaign</h1>
            </div>
          )}
        </Container>
      )}
    </Container>
  );
};

export default MyCampaigns;
