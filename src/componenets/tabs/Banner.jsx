import React, { useState } from "react";
import { Copy, Trash2, X } from "lucide-react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "../../assets/Banner.png";
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

export default function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonName, setButtonName] = useState("Button #2");
  const [selectedSize, setSelectedSize] = useState("250×40");
  const [showDeleteModal, setshowDeleteModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sizes = [
    { label: "250×40", value: "250×40" },
    { label: "750×40", value: "750×40" },
    { label: "370×40", value: "370×40" },
  ];

  const iframeCode =
    '<iframe Src="" Style="Border:0px #f1f1f1 None;" Name="myiFrame" Scrolling="No" Frameborder="1" Marginheight="0px" Marginwidth="0px" Height="400px" Width="600px" Allowfullscreen></iframe>';

  const handleCopyCode = () => {
    const textarea = document.createElement("textarea");
    textarea.value = iframeCode;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      toast.success("Copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
    document.body.removeChild(textarea);
  };

  const handleDelete = () => {
    console.log("Widget deleted");
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-black rounded-3 p-3">
        <Row className="g-4">
          <Col xs={12} lg={6}>
            <Card className="bg-white rounded-3 border border-white">
              <Card.Body className="p-0 pt-3">
                <div className="px-3">
                  <Button
                    variant="dark"
                    className="w-full py-1 px-4 rounded-pill mb-3 fw-medium bg-black"
                    onClick={openModal}
                    style={{ maxWidth: "full  " }}
                  >
                    + Create New Banner
                  </Button>
                </div>

                <Modal show={isModalOpen} onHide={closeModal} centered>
                  <Modal.Body className="bg-white rounded-3 p-3 px-0 position-relative">
                    <div className="px-3">
                      <Button
                        onClick={closeModal}
                        className="position-absolute top-0 end-0 m-2 bg-black text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <X size={16} />
                      </Button>

                      <h2 className="text-center fw-bold text-dark mb-4">
                        Create Banner
                      </h2>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold text-dark small">
                          Banner Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={buttonName}
                          onChange={(e) => setButtonName(e.target.value)}
                          className="bg- rounded-pill border-0"
                          placeholder="Enter banner name"
                          style={{ backgroundColor: "#E2E2E2" }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold text-dark small">
                          Choose Size
                        </Form.Label>
                        <div className="d-flex gap-3">
                          {sizes.map((size) => (
                            <Form.Check
                              key={size.value}
                              type="radio"
                              id={`size-${size.value}`}
                              name="size"
                              label={size.label}
                              value={size.value}
                              checked={selectedSize === size.value}
                              onChange={(e) => setSelectedSize(e.target.value)}
                              className={`rounded-pill px-3 ${
                                selectedSize === size.value
                                  ? "bg-warning text-dark"
                                  : "bg-light"
                              }`}
                            />
                          ))}
                        </div>
                      </Form.Group>
                    </div>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold text-dark small px-3">
                        Preview
                      </Form.Label>
                      <div className="p-3 pb-1 w-100">
                        <img
                          src={banner}
                          alt="banner preview"
                          className="w-100 rounded-2"
                        />
                      </div>
                    </Form.Group>
                    <div className="px-3 w-100">
                      <Button
                        variant="dark"
                        className="w-100 rounded-pill bg-black"
                      >
                        Confirm
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>

                <Modal
                  show={showDeleteModal}
                  onHide={() => setshowDeleteModal(false)}
                  centered
                >
                  <Modal.Body className="bg-white p-3 rounded-3">
                    <h2 className="fs-5 fw-bold mb-3 pe-4">
                      Are You Sure You Want To Delete This Banner?
                    </h2>
                    <div className="d-flex justify-content-center gap-2">
                      <Button
                        variant="danger"
                        className="w-50 rounded-3 py-2"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="light"
                        className="w-50 rounded-3 py-2"
                        onClick={() => setshowDeleteModal(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>

                <div className="bg-black rounded-3 p-3">
                  <div className="d-flex align-items-center justify-content-between gap-10 text-white w-100 bg-white rounded-pill border border-white ps-4">
                    <AiOutlinePicture className="text-dark" size={28} />

                    <div className="d-flex align-items-center justify-content-between px-4 w-100 py-3 bg-black rounded-pill">
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="bg-warning rounded-circle"
                          style={{ width: "12px", height: "12px" }}
                        ></div>
                        <span className="text-warning">Banner #01</span>
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
            <Card className="bg-white rounded-3 border border-gray-700">
              <Card.Body className="pt-4">
                <div className="mb-4 px-3">
                  <h2 className="text-black fs-2 fw-bold mb-2">
                    Banner #01 (360x60)
                  </h2>
                  <p className="text-gray-500 small">
                    Use the code below to embed this banner into your website.
                  </p>
                </div>

                <div className="bg-black rounded-3 p-3">
                  <div className="border-2 border-secondary rounded-2 p-3 mb-4">
                    <code className="text-warning d-block text-break">
                      {iframeCode}
                    </code>
                    <Button
                      variant="outline-light"
                      className="rounded-pill mt-3 d-flex align-items-center gap-2 small"
                      onClick={handleCopyCode}
                    >
                      <span>Copy Code</span>
                      <Copy className="w-4 h-4 cursor-pointer" />
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      src={banner}
                      alt="banner preview"
                      className="w-100 rounded-2"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ToastContainer position="top-end" autoClose={3000} />
      </div>
    </>
  );
}
