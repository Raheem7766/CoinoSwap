import React from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Exchange() {
  return (
    <div className="">
      <div className="bg-black rounded-[20px] p-2">
        <div className="bg-white p-3 rounded-2">
          <h2 className="fs-3 fw-bold mb-3 text-black">Exchanges History</h2>

          <div className="table-responsive">
            <Table borderless className="mb-0">
              <thead>
                <tr className="d-flex justify-content-between">
                  <th className="fw-semibold text-black">Status</th>
                  <th className="fw-semibold text-black">Date</th>
                  <th className="fw-semibold text-black">Order ID</th>
                  <th className="fw-semibold text-black">Sell Amount</th>
                  <th className="fw-semibold text-black">Get Amount</th>
                  <th className="fw-semibold text-black">Profit</th>
                  <th className="fw-semibold text-black">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="7" className="py-5 pb-20 text-center text-muted">
                    <div className="fs-5">No exchange history found</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
