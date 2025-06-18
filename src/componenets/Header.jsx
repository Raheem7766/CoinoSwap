import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import {
  Container,
  Row,
  Col,
  Card,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import Account from "./tabs/Account";
import Widget from "./tabs/Widget";
import ButtonTab from "./tabs/Button"; 
import Banner from "./tabs/Banner";
import Exchange from "./tabs/Exchange";
import Stats from "./tabs/Stats";
import Payout from "./tabs/Payout";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Payouts");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return <Account />;
      case "Widget":
        return <Widget />;
      case "Button":
        return <ButtonTab />;
      case "Banner":
        return <Banner />;
      case "Exchanges":
        return <Exchange />;
      case "Daily Stats":
        return <Stats />;
      case "Payouts":
        return <Payout />;
      default:
        return null;
    }
  };

  const cardData = [
    "Total Turnover",
    "Total Profit",
    "Ready to Payout",
    "Completed Exchanges",
  ];

  return (
    <div className="bg-black text-white py-4 ">
      <h2 className="text-center fw-bold" style={{ fontSize: "40px" }}>
        Partner <span style={{ color: "#F4A70B" }}>Account</span>
      </h2>

      <Container fluid className="mt-5 px-4">
        <Row className="g-4 justify-content-center">
          {cardData.map((title, idx) => (
            <Col md={6} lg={3} key={idx}>
              <Card
                style={{ backgroundColor: "#1A1918", borderRadius: "20px" }}
              >
                <Card.Body className="px-3 pt-3 pb-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5
                      className="text-white fw-semibold"
                      style={{ fontSize: "22px" }}
                    >
                      {title}
                    </h5>
                    <IoMdEye color="gray" size={22} />
                  </div>
                  <div
                    className="bg-white mt-3 px-3 py-2 d-flex flex-column justify-content-center"
                    style={{ borderRadius: "20px", height: "100px" }}
                  >
                    <h3
                      className="fw-bold"
                      style={{ fontSize: "34px", color: "#F4A70B" }}
                    >
                      0.004 ₿
                    </h3>
                    <p
                      className="mb-0 fw-medium text-dark"
                      style={{ fontSize: "16px" }}
                    >
                      ~6542,25 USD
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <p className="mt-3 ms-3 fw-medium" style={{ fontSize: "16px" }}>
          Partner Share 0.5%
        </p>
      </Container>

      <Container fluid className="mt-5 px-4">
        <div
          className="p-0 pt-3"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "20px",
            border: "1px solid white",
          }}
        >
          <ButtonGroup className="d-flex flex-wrap gap-4 mb-3">
            {[
              "Account",
              "Widget",
              "Button",
              "Banner",
              "Exchanges",
              "Daily Stats",
              "Payouts",
            ].map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(tab)}
                variant="link"
                style={{
                  backgroundColor: activeTab === tab ? "black" : "transparent",
                  color: activeTab === tab ? "white" : "black",
                  fontWeight: activeTab === tab ? "500" : "700",
                  borderRadius: activeTab === tab ? "999px" : "999px",
                  padding: activeTab === tab ? "0.5rem 1rem" : "0",
                  textDecoration: "none",
                }}
              >
                {tab}
              </Button>
            ))}
          </ButtonGroup>

          <div>{renderTabContent()}</div>
        </div>
      </Container>
    </div>
  );
}
