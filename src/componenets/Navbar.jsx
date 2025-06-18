import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Dropdown, Image, Button } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Logo from "../assets/Logo.png";
import usa from "../assets/usa.png";

export default function CustomNavbar() {
  const [activeItem, setActiveItem] = useState("Affiliate Program");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logout clicked");
    setIsOpen(false);
  };

  const navItems = [
    "How It Works",
    "Currencies",
    "FAQ",
    "Affiliate Program",
    "Blog",
    "About Us",
    "Order Tracker",
  ];

  return (
    <Navbar expand="lg" className=" py-3">
      <Container fluid className="px-4 text-white d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <Nav className="d-none d-lg-flex gap-3">
          {navItems.map((item) => (
            <Nav.Link
              key={item}
              onClick={() => setActiveItem(item)}
              className={`text-sm ${
                activeItem === item ? "fw-bold text-white" : "text-secondary"
              }`}
              style={{ cursor: "pointer" }}
            >
              {item === "Order Tracker" ? (
                <>
                <div className="flex gap-1">
                  {item} <MdKeyboardArrowDown />
                </div>
                </>
              ) : (
                item
              )}
            </Nav.Link>
          ))}
        </Nav>

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center">
            <Image src={usa} width={30} height={30} roundedCircle />
            <MdKeyboardArrowDown className="ms-1" />
          </div>

          <div ref={dropdownRef} className="position-relative">
            <Button
              variant={isOpen ? "light" : "dark"}
              onClick={() => setIsOpen(!isOpen)}
              className="d-flex align-items-center justify-content-center rounded-pill px-2 py-1 border"
              style={{ width: "44px", height: "28px" }}
            >
              <FaUserCircle className={`me-1 ${isOpen ? "text-dark" : "text-white"}`} />
              {isOpen ? (
                <MdKeyboardArrowUp className={isOpen ? "text-dark" : "text-white"} />
              ) : (
                <MdKeyboardArrowDown className={isOpen ? "text-dark" : "text-white"} />
              )}
            </Button>

            {isOpen && (
              <div className="position-absolute bg-white shadow rounded-pill mt-2" style={{ right: 0, minWidth: "110px", zIndex: 1000 }}>
                <Button
                  variant="light"
                  className="w-100 d-flex align-items-center gap-2 px-3 py-2 rounded-pill text-start"
                  onClick={handleLogout}
                >
                  <IoLogOut />
                  <span className="text-sm">Logout</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
