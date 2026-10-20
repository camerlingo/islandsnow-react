"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

import {
  Facebook,
  Twitter,
  Pinterest,
  Instagram,
  HouseFill,
  Search,
  PersonFill,
  Cart,
} from "react-bootstrap-icons";

// 1. Top menu
const TopMenu = () => (
  <Navbar bg="light" className="top-menu">
    <Container fluid>
      <Nav className="me-auto">
        <Nav.Link href="#"><Facebook /></Nav.Link>
        <Nav.Link href="#"><Twitter /></Nav.Link>
        <Nav.Link href="#"><Pinterest /></Nav.Link>
        <Nav.Link href="#"><Instagram /></Nav.Link>
      </Nav>

      <Nav className="ms-auto">
        <Nav.Link href="#"><HouseFill /></Nav.Link>
        <Nav.Link href="#"><Search /></Nav.Link>
        <Nav.Link href="#"><PersonFill /></Nav.Link>

        <NavDropdown title={<Cart />} id="cart-dropdown">
          <NavDropdown.ItemText>
            Your cart is currently empty.
          </NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

// 2. Centered logo
const IslandSnowLogo = () => (
  <Row className="justify-content-center">
    <Col className="text-center">
      <img
        src="islandsnow-bootstrap-logo.png"
        alt="Island Snow Logo"
        className="img-fluid rounded mx-auto d-block py-1 island-logo"
      />
    </Col>
  </Row>
);

// 3. Middle navigation menu
const MiddleMenu = () => (
  <Row className="justify-content-center pt-4 middle-menu">
    <Col xs="auto">
      <a href="#">MEN⌄</a>
    </Col>
    <Col xs="auto">
      <a href="#">WOMEN⌄</a>
    </Col>
    <Col xs="auto">
      <a href="#">KIDS⌄</a>
    </Col>
    <Col xs="auto">
      <a href="#">BRANDS⌄</a>
    </Col>
    <Col xs="auto">
      <a href="#">SEARCH</a>
    </Col>
  </Row>
);

// 4. Full-width bridge picture
const FullWidthImage = () => (
  <Row className="justify-content-center">
    <Col>
      <img
        src="/islandsnow-bootstrap-main.png"
        alt="Island Snow bridge"
        className="img-fluid w-100 bridge-image"
      />
    </Col>
  </Row>
);

// 5. Three-column footer
const FooterMenu = () => (
  <footer className="footer">
    <Container fluid>
      <Row>
        <Col md={4}>
          <h6>NAVIGATION</h6>
          <hr />
          <p><a href="#">About Us</a></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">Store Locations</a></p>
        </Col>

        <Col md={4}>
          <h6>MAIN MENU</h6>
          <hr />
          <p><a href="#">Men</a></p>
          <p><a href="#">Women</a></p>
          <p><a href="#">Kids</a></p>
          <p><a href="#">Brands</a></p>
        </Col>

        <Col md={4}>
          <h6>CONNECT</h6>
          <hr />
          <p>Sign up for the latest updates.</p>
          <Form className="d-flex">
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
            />
            <Button variant="dark" className="ms-2">
              Join
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Main Island Snow component
const IslandSnow = () => (
  <Container fluid className="island-page">
    <TopMenu />
    <IslandSnowLogo />
    <MiddleMenu />
    <FullWidthImage />
    <FooterMenu />
  </Container>
);

export default function Home() {
  return <IslandSnow />;
}