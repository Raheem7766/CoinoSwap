import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Payout() {
  const [amount, setAmount] = useState("0.00");
  const [btcAddress, setBtcAddress] = useState("");

  return (
    <div className="bg-black rounded-3 p-3" style={{ '--bs-bg-opacity': 1 }}>
  <div className="bg-white p-3 rounded-2 mb-4">
    <h2 className="fs-4 fw-bold mb-4 text-black">Request A Payout</h2>

    <Row className="mb-4 g-4">
      <Col md={6} lg={3}>
        <div className="bg-black text-white px-3 py-2 rounded-top-4 small fw-medium">
          Available Balance
        </div>
        <div className="bg-black rounded-bottom-4">
          <div className="bg-white border-2 border-black rounded-4 px-3 py-3">
            <span className="text-warning fw-bold fs-3">
              0.004 BTC
            </span>
          </div>
        </div>
      </Col>

      <Col md={6} lg={3}>
        <div className="bg-[#E2E2E2] text-black px-3 py-2 rounded-top-4 small fw-medium">
          Minimum Withdrawal Amount
        </div>
        <div className="bg-[#E2E2E2] pb-1 px-1 rounded-bottom-4">
          <div className="bg-white rounded-4 px-3 py-3">
            <span className="text-black fw-bold fs-3">
              0.001 BTC
            </span>
          </div>
        </div>
      </Col>
    </Row>

    <Form.Group className="mb-4">
      <Form.Label className="fw-bold text-black small ps-3">Amount</Form.Label>
      <Form.Control
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-[#E2E2E2] rounded-pill border-0 py-2 fs-5 "
        placeholder="0.00"
        style={{backgroundColor:"#E2E2E2"}}
      />
    </Form.Group>

    <Form.Group className="mb-4">
      <Form.Label className="fw-bold text-black small ps-3">BTC Address</Form.Label>
      <Form.Control
        type="text"
        value={btcAddress}
        onChange={(e) => setBtcAddress(e.target.value)}
        className="bg- rounded-pill border-0 py-2"
        placeholder="Enter BTC Address"
        style={{backgroundColor:"#E2E2E2"}}
      />
      <Form.Text className="text-muted small ps-3">
        Our Withdrawal Requests Are Made Within 2-3 Business Days
      </Form.Text>
    </Form.Group>
    
    <Button variant="black" className="rounded-pill px-4 py-2 w-[15%] fw-medium bg-black text-white">
      Payout
    </Button>
  </div>

  <div className="bg-white rounded-3 border-4 border-black p-3">
    <h2 className="fs-4 fw-bold mb-4 text-black">Payout History</h2>

    <div className="table-responsive">
      <Table borderless className="mb-0">
        <thead>
          <tr className="d-flex justify-content-between">
            <th className="fw-semibold text-black">Status</th>
            <th className="fw-semibold text-black">Created Date</th>
            <th className="fw-semibold text-black">Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="py-5 text-center text-muted">
              <div className="fs-5">No payout history found</div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</div>
  );
}
