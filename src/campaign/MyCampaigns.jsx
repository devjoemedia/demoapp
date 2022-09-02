import { Row, Container, Pagination } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetMyCampaigns from "../hooks/useGetMyCampaigns";
import MyCampaignCard from "../component/MyCampaignCard";
import NoData from "../images/nodata.png";
import ScrollToTop from "../component/ScrollToTop";

const MyCampaigns = () => {
  const user = useSelector((state) => state.user);

  let userId = user?.uid;
  const { campaigns } = useGetMyCampaigns(userId);

  return (
    <ScrollToTop>
      <Container style={{ padding: "20px 0" }}>
        {!user ? (
          <Navigate to="/login" replace={true} />
        ) : (
          <Container>
            {campaigns.length > 0 ? (
              <Row className="py-2">
                <h4 style={{ color: "#004c46" }}>My Campaigns </h4>
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
        )}
      </Container>
    </ScrollToTop>
  );
};

export default MyCampaigns;
