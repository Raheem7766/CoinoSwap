import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="w-full min-vh-100 bg-black">
      <Navbar />

      <div className="d-none d-lg-block">
        <Header />
      </div>

      <div className="d-lg-none d-flex align-items-start pt-5 justify-content-start min-vh-100 bg-black position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(244,167,11,0.15) 0%, rgba(244,167,11,0) 70%)",
              top: "-200px",
              left: "-200px",
              filter: "blur(20px)",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "800px",
              height: "800px",
              background:
                "radial-gradient(circle, rgba(244,167,11,0.1) 0%, rgba(244,167,11,0) 70%)",
              bottom: "-400px",
              right: "-300px",
              filter: "blur(30px)",
            }}
          ></div>
        </div>

        <Container className="position-relative z-1">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center text-white p-4">
              <h2
                className="fw-bold mb-4 position-relative"
                style={{
                  fontSize: "clamp(28px, 8vw, 40px)",
                  lineHeight: "1.2",
                }}
              >
                <span className="position-relative z-1">Desktop </span>
                <span
                  className="position-relative z-1"
                  style={{
                    color: "#F4A70B",
                    textShadow: "0 0 10px rgba(244,167,11,0.5)",
                  }}
                >
                  Access Required!
                </span>
                <span
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(244,167,11,0.3) 0%, rgba(244,167,11,0) 70%)",
                    filter: "blur(10px)",
                    zIndex: 0,
                    transform: "translateY(20%)",
                  }}
                ></span>
              </h2>
              <p
                className="mb-4 fs-5 position-relative"
                style={{
                  color: "#BD770C",
                  textShadow: "0 0 8px rgba(189,119,12,0.3)",
                }}
              >
                <strong>Join Our Exchange Partner Network</strong> by listing
                your exchange with Coinoswap. Please access this dashboard from
                a desktop computer to manage your partnership.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
