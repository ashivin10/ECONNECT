import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Avatar,IconButton } from '@mui/material'
import Navbar from "react-bootstrap/Navbar";
import './navbar.css';
import { useState, useEffect } from "react";

function Navbar_2() {
  
  const [activeState, setState] = useState("home");
  const [scrolled, seScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
  });
  
  const user_name = localStorage.getItem("user");


  return (
    <div className="navbar">
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="brand">ECONNECT</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className={
                  activeState === "home" ? "active navbar-link" : "navbar-link"
                }
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeState === "meet" ? "active navbar-link" : "navbar-link"
                }
              >
                MEET
              </Nav.Link>
              <Nav.Link
                href="group"
                className={
                  activeState === "group" ? "active navbar-link" : "navbar-link"
                }
              >
                GROUP
              </Nav.Link>
              <Nav.Link
                href="#"
                className={
                  activeState === "chat" ? "active navbar-link" : "navbar-link"
                }
              >
                CHAT
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              

              <a href="#contact">
              <div className="avatar">
                <Avatar/>
                <h2>{user_name}</h2>
              </div>

              </a>
            </span>
          </Navbar.Collapse>
        </Container>
  
                  
      </Navbar>
    </div>
  );
}

export default Navbar_2;
