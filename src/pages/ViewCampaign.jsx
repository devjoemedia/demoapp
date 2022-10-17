import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillTagFill } from "react-icons/bs";
import Help from "../images/help.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useParams } from "react-router-dom";
import useGetCampaign from '../hooks/useGetCampaign';
import NumberFormat from 'react-number-format';
import useGetCampaignTransactions from '../hooks/useGetCampaignTransactions';
import moment from 'moment';

const ViewCampaign = () => {
 const { id } = useParams("id");

 const { transactions, totalDonations } = useGetCampaignTransactions(id);

  let campaignId = id;
  const { campaign } = useGetCampaign(campaignId);

  const percentageDonated = ((totalDonations / campaign?.amount) * 100).toFixed(
    2
  );
  return (
    <Container>
      <div>
        <h2>{campaign?.title}</h2>

        <img
          src={campaign?.image}
          alt="banner"
          style={{ height: "350px", width: "100%", borderRadius: "10px" }}
        />

        <Row
          className="mt-1 py-3 "
          style={{ borderBottom: "2px solid #f1f1f1" }}
        >
          <Col sm={12} md={8}>
            <Row className="mb-0 mt-2">
              <Col className="mb-1">
                <p className="m-0">
                  Target:
                  <span className="text-muted">
                    <NumberFormat
                        value={campaign?.amount}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₵'}
                      />
                  </span>
                </p>
              </Col>
              <Col style={{ justifyContent: "end", display: "flex" }}>
                <span className="text-muted">
                <NumberFormat
                  value={totalDonations}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₵'}
                />
                </span>
                <p>({percentageDonated})</p>
              </Col>
            </Row>
            <ProgressBar
              completed={percentageDonated}
              maxCompleted={100}
              height="7px"
              isLabelVisible={false}
              bgColor="#004c46"
            />
          </Col>
          <Col sm={12} md={4} className="mt-1 align-items-end">
            <p className="m-0 fw-bold">{moment(campaign?.date).format('MMMM D,YYYY')}</p>
            <p className="m-0 fw-bold">
              <BsFillTagFill /> {campaign?.category}
            </p>
          </Col>
        </Row>

        <p className="py-3">
          {campaign?.description}
        </p>

        <div className="d-flex justify-content-between">
          <Button
            style={{
              backgroundColor: "#004c46",
              color: "#fff",
              width: "45%",
              outline: "none",
              padding: ".8rem 1rem",
              border: "none",
            }}
            // onClick={handleShow}
          >
            Withdraw Funds
          </Button>
          <Button
            as={Link}
            to={`/profile/campaigns/edit/${campaign?.id}`}
            variant="primary"
            style={{
              backgroundColor: "#fff",
              color: "#004c46",
              width: "45%",
              outline: "none",
              padding: ".8rem 1rem",
              border: "1px solid #004c46",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ViewCampaign;
