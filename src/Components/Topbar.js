import React from "react";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Image, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Route, Router, Link, Switch } from "react-router-dom";
import "../Components/Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Topbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image
                src={require("./Routes/assets/logo.png")}
                style={{ height: "auto", objectFit: "cover", width: "90%" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                style={{ borderRadius: "30px" }}
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav className="my-2 my-lg-0 py-3">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="HIT" className="nav-link">
                How It Work
              </Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Link to="About" className="nav-link">
                Browse Jobs
              </Link>
              <Link to="About" className="nav-link">
                User
              </Link>
              <Link to="About" className="nav-link">
                pages
              </Link>
              <Link to="About" className="nav-link">
                <button
                  className="btn button bg-danger text-white"
                  style={{ fontSize: "15px" }}
                >
                  Sign In
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
