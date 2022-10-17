import React from "react";
import { Button, Col, Container, Row, Table, Card } from "react-bootstrap";
import Help from "../images/help.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import useGetMyCampaigns from '../hooks/useGetMyCampaigns';
import { MdModeEditOutline } from 'react-icons/md';

const ProfilePage = () => {
  const user = useSelector((state) => state.user);

  let userId = user?.uid;
  const { campaigns } = useGetMyCampaigns(userId);

  return (
    <div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div style={{ flex: 1 }}>
          <h4>Campaign</h4>
          <p>Let's create your first campaign</p>
        </div>
        <div>
          <Button
            style={{
              maxWidth: "200px",
              outline: "none",
              background: "#00e472",
              border: "none",
              display: "inline-block",
            }}
          >
            <Link
              to="campaigns/create"
              className="text-white text-decoration-none"
            >
              + create campaign
            </Link>
          </Button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Campaign</th>
            <th>Created at</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>pending</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Car accident at Adenta</td>
            <td>24th June, 2022</td>
            <td>$18,455 / $35,000</td>
            <td>success</td>
          </tr>
        </tbody>
      </Table>

      <div style={{ padding: "20px 0" }}>
        <h4>Recent Campaigns</h4>
        <p>History of your recent campaigns</p>

        <Row className="py-2">
        {campaigns.slice(0,3).map((campaign, index) => (
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
    </div>
  );
};

export default ProfilePage;
