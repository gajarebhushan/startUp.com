import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={10}>
              <h1>Your Partner in Digital Success</h1>
              <p>
                At MBC, we specialize in crafting tailored digital solutions that drive growth and success for small businesses. From stunning websites to comprehensive social media strategies, we help you stand out in the digital landscape.
              </p>
              <Button variant="light" className="hero-btn" href="/services">Explore Our Services</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="services-section">
        <h2 className="text-center">What We Do</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="\images\website-development.jpeg" alt="Website Development"/>
              <Card.Body>
                <Card.Title>Website Development</Card.Title>
                <Card.Text>
                  We create custom, responsive websites that enhance your online presence and engage your customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="/images/mobile-application.jpeg" alt="Mobile Applications"/>
              <Card.Body>
                <Card.Title>Mobile Applications</Card.Title>
                <Card.Text>
                  Our Android applications are designed to provide seamless user experiences, helping your business reach more customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Img variant="top" src="/images/social-media-strategy.jpeg" alt="Social Media Strategy"/>
              <Card.Body>
                <Card.Title>Social Media Strategy</Card.Title>
                <Card.Text>
                  We help you boost your business with targeted strategies on Instagram, Facebook, and more, driving sales and customer engagement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="contact-section">
        <Row>
          <Col className="text-center">
            <h2>Get in Touch</h2>
            <p>
              Ready to take your business to the next level? Contact us today and let's discuss how we can help you achieve your goals.
            </p>
            <Button variant="primary" href="/contact">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
