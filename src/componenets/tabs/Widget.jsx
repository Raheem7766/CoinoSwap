import React, { useState } from "react";
import { ChevronDown, RefreshCw, Copy, Trash2, Check } from "lucide-react";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { X } from "lucide-react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Widget() {
  const [sendAmount, setSendAmount] = useState("400");
  const [receiveAmount, setReceiveAmount] = useState("7324.49");
  const [sendCurrency, setSendCurrency] = useState("BTC");
  const [receiveCurrency, setReceiveCurrency] = useState("ETH");
  const [copied, setCopied] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [widgetName, setWidgetName] = useState("Widget #2");
  const [defaultAmount, setDefaultAmount] = useState("01");
  const [defaultSendCoin, setDefaultSendCoin] = useState("BTC");
  const [defaultReceiveCoin, setDefaultReceiveCoin] = useState("ETH");
  const [exchangePartners, setExchangePartners] = useState("All");
  const [enableLogo, setEnableLogo] = useState(true);
  const [shortFormat, setShortFormat] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const iframeCode =
    '<iframe Src="" Style="Border:0px #f1f1f1 None;" Name="myiFrame" Scrolling="No" Frameborder="1" Marginheight="0px" Marginwidth="0px" Height="400px" Width="600px" Allowfullscreen></iframe>';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(iframeCode);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDelete = () => {
    console.log("Widget deleted");
    setShowModal(false);
  };

  return (
    <div className="bg-black rounded-3xl p-3">
      <Row className="g-4">
        <Col xs={12} lg={6}>
          <Card className="bg-white rounded-3 border border-white">
            <Card.Body className="p-3 px-0 pb-0">
              <div className="px-3">
                <Button
                  variant="dark"
                  className="w-100 py-1 px-4 rounded-pill mb-3 fw-medium"
                  onClick={() => setShowCreateModal(true)}
                  style={{ backgroundColor: "black" }}
                >
                  + Create New Widget
                </Button>
              </div>

              <div className="bg-black rounded-3 p-4 py-3">
                <div className="d-flex align-items-center justify-content-between gap-10 text-white w-100 bg-white rounded-pill border border-white ps-4">
                  <BsSpeedometer2 className="text-dark" size={28} />

                  <div className="d-flex align-items-center justify-content-between px-4 w-100 py-3 bg-black rounded-pill">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="bg-warning rounded-circle"
                        style={{ width: "12px", height: "12px" }}
                      ></div>
                      <span className="text-warning">Widget #01</span>
                    </div>
                    <div>
                      <Button variant="link" className="p-2 rounded-circle">
                        <MdEdit className="text-white" size={16} />
                      </Button>
                      <Button
                        variant="link"
                        className="p-2 rounded-circle"
                        onClick={() => setshowDeleteModal(true)}
                      >
                        <Trash2 className="text-white" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>


        <Col xs={12} lg={6}>
          <Card className="bg-white rounded-3 border border-gray-700 px-0">
            <Card.Body className="pt-4">
              <div className="mb-4 px-2">
                <h2 className="text-dark fs-2 fw-bold mb-2">Widget #01</h2>
                <p className="text-gray-500 small">
                  Use The Code Below To Embed This Widget Into Your Website.
                </p>
              </div>

              <div className="bg-black rounded-3 p-3">
                <div className="border-2 border-secondary rounded-2 p-3 mb-4">
                  <code className="text-warning d-block text-break">
                    &lt;iframe Src="" Style="Border:0px #f1f1f1 None;"
                    Name="myiFrame" Scrolling="No" Frameborder="1"
                    Marginheight="0px" Marginwidth="0px" Height="400px"
                    Width="600px" Allowfullscreen&gt;&lt;/iframe&gt;
                  </code>
                  <Button
                    variant="outline-light"
                    onClick={handleCopyCode}
                    className="rounded-pill mt-3 d-flex align-items-center gap-2 small"
                  >
                    <span>Copy Code</span>
                    <Copy size={16} />
                  </Button>
                </div>

                <div className="w-100">
                  <div className="bg-white rounded-4 p-3 border border-gray-800">
                    <div className="px-3">
                      <div className="d-flex mb-4 rounded-3 bg-light">
                        <Button
                          variant="dark"
                          className="w-50 py-3 rounded-pill fw-semibold fs-5 bg-black"
                        >
                          Exchange Crypto
                        </Button>
                        <Button
                          variant="light"
                          className="w-50 py-3 rounded-pill fw-semibold fs-5 position-relative ps-5 d-flex align-items-center"
                        >
                          Buy/Sell Crypto 💳
                          <span className="bg-orange-500 w-max text-[12px] position-absolute top-0 start-55 translate-middle text-white px-2 py-1 rounded-pill d-flex align-items-center">
                            Available Soon
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-black rounded-3xl p-4">
                      <div className="">
                        <div className="rounded-3 p-4 border border-gray-700">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <div className="text-gray-500 small mb-2">
                                You Send:
                              </div>
                              <Form.Control
                                type="text"
                                value={sendAmount}
                                onChange={(e) => setSendAmount(e.target.value)}
                                className="bg-transparent text-white fs-3 fw-semibold border-0 shadow-none px-0"
                              />
                            </div>

                            <div className="d-flex align-items-center bg-[#1B1B1A] rounded-2 px-3 py-3 ms-3">
                              <div
                                className="bg-orange-500 rounded-circle d-flex align-items-center justify-content-center me-2"
                                style={{ width: "24px", height: "24px" }}
                              >
                                <span className="text-white small fw-bold">
                                  ₿
                                </span>
                              </div>
                              <span className="text-white fw-medium me-2">
                                {sendCurrency}
                              </span>
                              <span className="text-danger small border border-danger bg-opacity-20 px-2 py-1 rounded me-2">
                                TRX
                              </span>
                              <ChevronDown className="text-white" size={16} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                        <Button variant="light" className="p-3 rounded-circle">
                          <RefreshCw className="text-dark" size={20} />
                        </Button>
                      </div>

                      <div className="">
                        <div className="rounded-3 p-4 border border-gray-700">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <div className="text-gray-500 small mb-2">
                                You Receive:
                              </div>
                              <p className="text-white fs-3 fw-semibold">
                                {receiveAmount}
                              </p>
                            </div>

                            <div className="d-flex align-items-center bg-[#1B1B1A] rounded-2 px-3 py-1 ms-3">
                              <span className="text-white fs-3 fw-bold">♦</span>
                              <span className="text-white small px-2 py-1 rounded me-2">
                                {receiveCurrency}
                              </span>
                              <ChevronDown className="text-white" size={16} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-5 mt-4 mb-4">
                        <div className="d-flex align-items-center text-gray-500 small">
                          <span className="text-white me-2">♦</span>
                          <span>Min • Amount: 0.0032427</span>
                        </div>
                        <div className="d-flex align-items-center text-warning small">
                          <span className="text-warning me-2">♦</span>
                          <span>Estimated • 1 BTC ~ 18.849695 ETH</span>
                        </div>
                      </div>

                      <Button
                        variant="warning"
                        className="w-100 bg-gradient text-dark fw-bold py-3 rounded-3"
                      >
                        View Offers
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        show={showCreateModal}
        onHide={() => setShowCreateModal(false)}
        centered
        size="md"
      >
        <Modal.Body className="bg-white rounded-3 p-4 position-relative">
          <Button
            onClick={() => setShowCreateModal(false)}
            className="position-absolute top-0 end-0 m-2 bg-dark rounded-circle p-1"
          >
            <X className="text-white fw-bold" size={16} />
          </Button>

          <h2 className="text-center fw-bold text-dark mb-4">
            Create New Widget
          </h2>

          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Widget Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={widgetName}
                    onChange={(e) => setWidgetName(e.target.value)}
                    className="bg-[#E2E2E2] border-0 rounded-pill text-dark"
                    placeholder="Widget #2"
                    style={{ backgroundColor: "#E2E2E2" }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Default Amount
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={defaultAmount}
                    onChange={(e) => setDefaultAmount(e.target.value)}
                    className="bg- border-0 rounded-pill text-dark"
                    placeholder="01"
                    style={{ backgroundColor: "#E2E2E2" }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Set Default Send Coin
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Select
                      value={defaultSendCoin}
                      onChange={(e) => setDefaultSendCoin(e.target.value)}
                      className="bg- border-0 rounded-pill text-dark appearance-none"
                      style={{ backgroundColor: "#E2E2E2" }}
                    >
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="USDT">USDT</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Set Default Receive Coin
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Select
                      value={defaultReceiveCoin}
                      onChange={(e) => setDefaultReceiveCoin(e.target.value)}
                      className="bg- border-0 rounded-pill text-dark appearance-none"
                      style={{ backgroundColor: "#E2E2E2" }}
                    >
                      <option value="ETH">ETH</option>
                      <option value="BTC">BTC</option>
                      <option value="USDT">USDT</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Choose Exchange Partners
                  </Form.Label>
                  <div className="position-relative">
                    <Form.Select
                      value={exchangePartners}
                      onChange={(e) => setExchangePartners(e.target.value)}
                      className="bg- border-0 rounded-pill text-dark appearance-none"
                      style={{ backgroundColor: "#E2E2E2" }}
                    >
                      <option value="All">All</option>
                      <option value="Binance">Binance</option>
                      <option value="Coinbase">Coinbase</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold text-dark small">
                    Choose Color Theme
                  </Form.Label>
                  <div className="d-flex gap-2">
                    <div
                      className="bg-dark rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                    >
                      <Check className="text-warning small" />
                    </div>
                    <div
                      className="bg-white border border-gray-400 rounded-circle"
                      style={{ width: "32px", height: "32px" }}
                    ></div>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="switch"
                    id="enable-logo"
                    checked={enableLogo}
                    onChange={(e) => setEnableLogo(e.target.checked)}
                    className="me-0"
                  />
                  <Form.Label
                    htmlFor="enable-logo"
                    className="fw-bold text-dark small mb-0"
                  >
                    Enable CoinSwap Logo
                  </Form.Label>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="switch"
                    id="short-format"
                    checked={shortFormat}
                    onChange={(e) => setShortFormat(e.target.checked)}
                    className="me-0"
                  />
                  <Form.Label
                    htmlFor="short-format"
                    className="fw-bold text-dark small mb-0"
                  >
                    Short Widget Format
                  </Form.Label>
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="dark"
              onClick={() => setShowCreateModal(false)}
              className="w-100 fw-semibold py-3 rounded-pill mt-4 bg-black"
            >
              Confirm
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        show={showDeleteModal}
        onHide={() => setshowDeleteModal(false)}
        centered
      >
        <Modal.Body className="bg-white p-3 rounded-3xl">
          <h2 className="fs-5 fw-bold mb-3 pe-4">
            Are You Sure You Want To Delete This Widget?
          </h2>
          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="danger"
              className="w-50 rounded-3xl py-2"
              onClick={handleDelete}
              style={{ borderRadius: "40px",backgroundColor:'#ff0000' }}
            >
              Delete
            </Button>
            <Button
              variant="light"
              className="w-50 rounded-3xl py-2"
              onClick={() => setshowDeleteModal(false)}
              style={{ borderRadius: "40px", backgroundColor: "#E2E2E2" }}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
