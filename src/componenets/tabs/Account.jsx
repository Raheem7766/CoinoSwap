import React, { useState } from "react";
import { Edit, Copy, Trash2, Eye, EyeOff, Plus, X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Modal,
  FormCheck,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Account() {
  const [showPassword, setShowPassword] = useState(false);
  const [websiteLinks, setWebsiteLinks] = useState([
    "https://docs.google.com/spreadsheets/U1js9Jt83&deje9h&3he*%B...",
    "https://docs.google.com/spreadsheets/U1js9Jt83&deje9h&3he*%B...",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState(null);
  const [deletingLink, setDeletingLink] = useState(null);
  const [rememberChoice, setRememberChoice] = useState(false);
  const [referralLinks, setReferralLinks] = useState([
    {
      id: 1,
      name: "Ref Link 01",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
    {
      id: 2,
      name: "Ref Link 02",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
    {
      id: 3,
      name: "Ref Link 03",
      url: "https://coinoswap.com?hs4+40sj48hsd938@h...",
    },
  ]);

  const addWebsiteLink = () => {
    setWebsiteLinks([...websiteLinks, ""]);
  };

  const removeWebsiteLink = (index) => {
    setWebsiteLinks(websiteLinks.filter((_, i) => i !== index));
  };

  const openEditModal = (link) => {
    setEditingLink(link);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingLink(null);
  };

  const openDeleteModal = (link) => {
    setDeletingLink(link);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingLink(null);
    setRememberChoice(false);
  };

  const confirmDelete = () => {
    if (deletingLink) {
      setReferralLinks(
        referralLinks.filter((link) => link.id !== deletingLink.id)
      );
      if (rememberChoice) {
        console.log("User chose to remember this choice");
      }
    }
    closeDeleteModal();
  };

  const handleSaveChanges = () => {
    setReferralLinks((prevLinks) =>
      prevLinks.map((link) => (link.id === editingLink.id ? editingLink : link))
    );
    closeModal();
  };

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy!");
      });
  };

  const handleDelete = (link) => {
    openDeleteModal(link);
  };
  return ( 
    <>
      <Container fluid className="rounded-3xl p-3 bg-black">
        <Row className="g-4">
          <Col lg={6}>
            <Card className="border border-light">
              <Card.Body className="p-4 px-0 pb-0">
                <div className="px-3">
                  <h2 className="h2 fw-bold text-dark mb-3">Referral Link</h2>
                  <p className="text-muted mb-4">
                    Earn By Recommending Crypto Swaps Through CoinoSwap. Share
                    Your Unique Affiliate Link, And Earn In Bitcoin For Every
                    Transaction Made Through It.
                  </p>
                  <Button
                    variant="dark"
                    className="rounded-pill px-4 py-2 d-flex align-items-center"
                  >
                    <Plus className="me-2" size={16} />
                    Create Ref Link
                  </Button>
                </div>

                <div className="mt-4">
                  <div className="mx-auto">
                    <div className="bg-dark p-3 rounded-3">
                      {referralLinks.map((link) => (
                        <div
                          key={link.id}
                          className="bg-light rounded-pill p-1 py-2 d-flex justify-content-between items-center mt-2"
                        >
                          <span className="bg-white px-3 py-1 rounded-pill small fw-medium text-dark">
                            {link.name}
                          </span>
                          <div className="bg-dark d-flex align-items-center justify-content-between py-2 gap-3 rounded-pill">
                            <div className="mx-3 flex-grow-1">
                              <span className="text-warning small">
                                {link.url}
                              </span>
                            </div>
                            <div className="d-flex gap-2">
                              <Button
                                variant="link"
                                onClick={() => openEditModal(link)}
                                className="p-1 rounded-circle"
                              >
                                <Edit className="text-white" size={16} />
                              </Button>
                              <Button
                                variant="link"
                                onClick={() => handleCopy(link.url)}
                                className="p-1 rounded-circle"
                              >
                                <Copy className="text-white" size={16} />
                              </Button>
                              <Button
                                variant="link"
                                onClick={() => handleDelete(link)}
                                className="p-1 rounded-circle"
                              >
                                <Trash2 className="text-white" size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border border-light">
              <Card.Body className="p-4 px-0 pb-0">
                <div className="px-4">
                  <h2 className="h2 fw-bold text-dark mb-3">API Keys</h2>
                  <p className="text-muted mb-4">
                    An API Key Is A Unique Identifier Used By Computer
                    Applications To Securely Access Our API Services. This Key
                    Grants You Access To CoinoSwap's API Functionality, Which
                    You Can Explain In Full Detail In Our{" "}
                    <span className="text-warning">API Documentation</span>.
                  </p>
                  <Button
                    variant="dark"
                    className="rounded-pill px-4 py-2 d-flex align-items-center"
                  >
                    <Plus className="me-2" size={16} />
                    Create Ref Link
                  </Button>
                </div>
                <div className="bg-dark p-3 pb-2 rounded-3 mt-4">
                  {[1, 2].map((num) => (
                    <div
                      key={num}
                      className="bg-light rounded-pill p-1 py-2 d-flex justify-content-between mb-3"
                    >
                      <span className="bg-white px-3 py-1 rounded-pill small fw-medium text-dark">
                        API Key 0{num}
                      </span>
                      <div className="bg-dark d-flex align-items-center justify-content-between py-2 gap-3 rounded-pill">
                        <div className="mx-3 flex-grow-1">
                          <span className="text-warning small">
                            7ushf78HWER-Hjqw8&4i4-bhaHJwhgj29
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          <Button variant="link" className="p-1 rounded-circle">
                            <Copy className="text-white" size={16} />
                          </Button>
                          <Button variant="link" className="p-1 rounded-circle">
                            <Trash2 className="text-white" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border border-light">
              <Card.Body className="p-4">
                <h2 className="h2 fw-bold text-dark mb-4">Account Settings</h2>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-dark mb-2">
                    Affiliate Email
                  </Form.Label>
                  <div className="bg-dark rounded-pill p-2 d-flex align-items-center">
                    <Form.Control
                      type="email"
                      value="draztik99@gmail.com"
                      className="bg-transparent border-0 text-warning small px-3 py-1 shadow-none"
                      readOnly
                    />
                    <Button variant="link" className="p-1 pe-3 rounded-circle">
                      <Edit className="text-white" size={16} />
                    </Button>
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-dark mb-2">
                    Affiliate Password
                  </Form.Label>
                  <div className="bg-dark rounded-pill p-2 d-flex align-items-center">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      value="••••••••••••••••••••••••••••"
                      className="bg-transparent border-0 text-warning small px-3 py-1 shadow-none"
                      readOnly
                    />
                    <div className="d-flex gap-2">
                      <Button
                        variant="link"
                        onClick={() => setShowPassword(!showPassword)}
                        className="p-1 rounded-circle"
                      >
                        {showPassword ? (
                          <EyeOff className="text-white" size={16} />
                        ) : (
                          <Eye className="text-white" size={16} />
                        )}
                      </Button>
                      <Button
                        variant="link"
                        className="p-1 pe-3 rounded-circle"
                      >
                        <Edit className="text-white" size={16} />
                      </Button>
                    </div>
                  </div>
                </Form.Group>

                <Form.Group>
                  <Form.Label className="fw-medium text-dark mb-2">
                    Links To Your Website Or Blog
                  </Form.Label>
                  <div className="mb-3">
                    {websiteLinks.map((link, index) => (
                      <div
                        key={index}
                        className="bg-dark rounded-pill p-2 d-flex align-items-center mb-2"
                      >
                        <Form.Control
                          type="text"
                          value={link}
                          className="bg-transparent border-0 text-warning small px-3 py-1 shadow-none"
                          placeholder="Enter website URL"
                        />
                        <Button
                          variant="link"
                          onClick={() => removeWebsiteLink(index)}
                          className="p-1 pe-3 rounded-circle"
                        >
                          <X className="text-white" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={addWebsiteLink}
                    variant="light"
                    className="rounded-circle p-0 d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Plus size={20} className="text-dark" />
                  </Button>
                  <Form.Text className="text-muted small">
                    Please Provide Links To Your Website Or Blog That You Will
                    Use To Direct Traffic And Earn Revenue In The CoinoSwap
                    Affiliate Program.
                  </Form.Text>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="bg-dark">
              <Card.Body className="p-4">
                <h2 className="h2 fw-bold text-warning mb-4">
                  Two-Factor Authentication
                </h2>
                <Button
                  variant="outline-light"
                  className="rounded-pill px-4 py-2"
                >
                  Enable Google Authentication
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {isModalOpen && (
          <Modal show={isModalOpen} onHide={closeModal} centered>
            <Modal.Body className="p-4 position-relative">
              <Button
                onClick={closeModal}
                className="position-absolute top-0 end-0 m-3 bg-dark border-none text-white d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              >
                <X size={16} />
              </Button>
              <h3 className="h4 fw-bold text-dark mb-3">Edit Referral Link</h3>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={editingLink?.name || ""}
                  onChange={(e) =>
                    setEditingLink({ ...editingLink, name: e.target.value })
                  }
                  className="w-100 px-3 py-2 rounded-pill border-0 focus-ring focus-ring-dark"
                  placeholder="Enter link name"
                  style={{ backgroundColor: "#E2E2E2" }}
                />
              </Form.Group>
              <Button
                variant="dark"
                onClick={handleSaveChanges}
                className="w-100 py-2 rounded-pill bg-black"
              >
                Save Changes
              </Button>
            </Modal.Body>
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal show={isDeleteModalOpen} onHide={closeDeleteModal} centered>
            <Modal.Body className="p-4">
              <h3 className="h3 fw-bolder text-dark mb-3">
                Are You Sure You Want To Delete This Referral Link?
              </h3>
              <p className="text-muted small mb-4">{deletingLink?.url}</p>
              <Form.Group className="mb-4">
                <FormCheck
                  type="checkbox"
                  id="remember"
                  checked={rememberChoice}
                  onChange={(e) => setRememberChoice(e.target.checked)}
                  label="Remember And Delete Without Confirmation"
                />
              </Form.Group>
              <div className="d-flex gap-3">
                <Button
                  variant="danger"
                  onClick={confirmDelete}
                  className="flex-grow-1 py-2 rounded-pill"
                  style={{ backgroundColor: "#ff0000" }}
                >
                  Delete
                </Button>
                <Button
                  variant="secondary"
                  onClick={closeDeleteModal}
                  className="flex-grow-1 py-2 rounded-pill"
                  style={{
                    backgroundColor: "#E2E2E2",
                    color: "black",
                    fontWeight: "500",
                    border: "none",
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        )}

        <ToastContainer position="top-end" autoClose={3000} />
      </Container>
    </>
  );
}
