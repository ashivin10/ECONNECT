import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";
import Login from "./Login";
function BasicExample() {
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
  const [theme, setDarktheme] = useState("light");
  const light = () => {
    if (theme === "light") {
      setDarktheme("dark");
    } else {
      setDarktheme("light");
    }
  };
  // useEffect(() => {
  //   document.body.className = "App";
  // }, [theme]);
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
                href="#home"
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
                href="#skills"
                className={
                  activeState === "group" ? "active navbar-link" : "navbar-link"
                }
              >
                GROUP
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeState === "chat" ? "active navbar-link" : "navbar-link"
                }
              >
                CHAT
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2584/2584689.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://github.com">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt=""
                    className="social-git"
                  ></img>
                </a>
                <a href="https://discord.com/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2891/2891202.png"
                    alt=""
                  ></img>
                </a>
              </div>
              <a href="#contact">
                <button
                  className="button"
                  onClick={() => {
                    console.log("connnect");
                  }}
                >
                  <span>
                    <a href="#" onClick={() => <Login />}>
                      LOGIN
                    </a>
                  </span>
                </button>
              </a>
              {/* <DarkMode /> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
