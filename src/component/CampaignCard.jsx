import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import NumberFormat from "react-number-format";
import useGetCampaignTransactions from "../hooks/useGetCampaignTransactions";

function CampaignCard({ campaign }) {
  const { totalDonations } = useGetCampaignTransactions(campaign.id);

  const percentageDonated = ((totalDonations / campaign.amount) * 100).toFixed(
    2
  );

  return (
    <Col sm={12} md={6} lg={4} className="my-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Link
          to={'/campaigns/' + campaign.id}
          style={{ textDecoration: 'none' }}
          className="text-dark"
        >
          <Card
            style={{
              maxWidth: '345px',
              border: '1px solid #f1f1f1',
              background: '#fff',
            }}
          >
            <Card.Img
              variant="top"
              src={campaign?.image}
              style={{ height: 200 }}
            />
            
            <Card.Body>
              <Row>
                <Col lg="12" className="mb-2">
                  <h5 className="fw-bold">
                    {campaign?.title.length < 20
                      ? campaign.title
                      : campaign?.title.substr(0, 20) + '...'}
                  </h5>

                  <Card.Text style={{ fontFamily: 'Poppins' }}>
                    {campaign?.description.length < 50
                      ? campaign.description
                      : campaign?.description.substr(0, 50) + '...'}
                  </Card.Text>

                  <ProgressBar
                    completed={percentageDonated}
                    maxCompleted={100}
                    height="7px"
                    isLabelVisible={false}
                    bgColor="#004c46"
                  />

                  <Row className="mb-0 mt-2">
                    <Col className="mb-1">
                      <p className="m-0">
                        Target:
                        <span className="text-muted">
                          <NumberFormat
                            value={campaign.amount}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'₵'}
                          />
                        </span>
                      </p>
                    </Col>
                    <Col style={{ justifyContent: 'end', display: 'flex' }}>
                      <span className="text-muted">
                        <NumberFormat
                          value={totalDonations}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'₵'}
                        />
                      </span>
                      <p> ({percentageDonated}%)</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Button
                style={{
                  backgroundColor: '#004c46',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '14px',
                  border: 'none',
                  width: '100%',
                }}
              >
                Donate now
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </motion.div>
    </Col>
  )
}

export default CampaignCard;
