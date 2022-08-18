import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Col, Container, Row } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1900, 200, 3500, 444, 578, 1000, 700],
      backgroundColor: "#004c46",
    },
  ],
};

const DashboardAnalytics = () => {
  return (
    <Container>
      <h4 style={{ color: "#004c46" }}>Analytics </h4>
      <div>
        <Row className="justify-content-between mb-5">
          <Col
            sm={12}
            md={6}
            style={{
              padding: "20px",
              maxWidth: "350px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <p className="m-0">Total Donations Received</p>
            <h4>$25,000</h4>
          </Col>
          <Col
            sm={12}
            md={6}
            style={{
              padding: "20px",
              maxWidth: "350px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <p className="m-0">Total Donations Made</p>
            <h4>$490</h4>
          </Col>
        </Row>
      </div>
      <Bar options={options} data={data} />
      {/* <Line
        datasetIdKey="donations"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      /> */}
    </Container>
  );
};

export default DashboardAnalytics;
