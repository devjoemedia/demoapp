import { Container, Table } from "react-bootstrap";

const DashboardDonations = () => {
  return (
    <div>
      <h4 style={{ color: "#004c46" }}>Donations </h4>
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
    </div>
  );
};

export default DashboardDonations;
