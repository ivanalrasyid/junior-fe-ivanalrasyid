import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-primary">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "red" }}>
          Campflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className="d-flex" style={{ width: "30%", height: "75%" }}>
          <Form.Control
            type="search"
            placeholder="Ivan Alrasyid"
            className="me-2"
            aria-label="Search"
          />
          <Button
            variant="outline-success"
            style={{ width: "45%", height: "55%" }}
          >
            Ivan Alrasyid
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;

// DONE
