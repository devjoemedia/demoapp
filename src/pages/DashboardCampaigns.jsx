import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Help from "../images/help.jpeg";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import useGetMyCampaigns from '../hooks/useGetMyCampaigns';
import { MdModeEditOutline } from 'react-icons/md';

const DashboardCampaign = () => {
  const user = useSelector((state) => state.user);

  let userId = user?.uid;
  const { campaigns } = useGetMyCampaigns(userId);

  return (
    <div>
      <h4 style={{ color: "#004c46" }}>Campaigns </h4>
      <Row className="py-2">
        {campaigns.map((campaign, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="my-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Card
                style={{
                  maxWidth: "345px",
                  border: "1px solid #f1f1f1",
                  background: "#fff",
                }}
              >
                <div style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={campaign?.image} />

                  <Link
                    to={'edit/' + campaign?.id}
                    style={{
                      textDecoration: 'none',
                      position: 'absolute',
                      right: '5px',
                      top: '5px',
                      backgroundColor: 'rgba(0, 76, 70, .81)',
                      height: '40px',
                      width: '40px',
                      borderRadius: '50%',
                    }}
                    className="text-white d-flex align-items-center justify-content-center"
                  >
                    <MdModeEditOutline />
                  </Link>
                </div>
                <Card.Body>
                  <Row>
                    <Col lg="12" className="mb-2">
                      {/* <h5 className="fw-bold">{campaign?.title}</h5> */}
                      <h5>
                        {campaign?.title.length < 20
                          ? campaign.title
                          : campaign?.title.substr(0, 20) + '...'}
                      </h5>
                      <Card.Text style={{ fontFamily: "Poppins" }}>
                        {campaign?.description.length < 50
                        ? campaign.description
                        : campaign?.description.substr(0, 50) + '...'}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Button
                    as={Link}
                    to={campaign?.id}
                    style={{
                      backgroundColor: "#004c46",
                      color: "#fff",
                      outline: "none",
                      fontSize: "14px",
                      border: "none",
                      width: "100%",
                    }}
                    className="text-white mt-2"
                  >
                    view
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashboardCampaign;
