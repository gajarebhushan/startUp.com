import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>About MBC</Card.Title>
              <Card.Text>
                Welcome to MBC, a leading provider of innovative software solutions. We specialize in creating high-quality websites, Android applications, and desktop applications that meet the diverse needs of our clients.
              </Card.Text>
              <Card.Text>
                <strong>Our Mission:</strong> To deliver exceptional software solutions that empower businesses to achieve their goals.
              </Card.Text>
              <Card.Text>
                <strong>Our Vision:</strong> To be recognized as a global leader in software development, known for our innovation, quality, and customer-centric approach.
              </Card.Text>
              <Card.Text>
                <strong>Our Values:</strong>
                <ul>
                  <li><strong>Innovation:</strong> We embrace creativity and strive to introduce new ideas and solutions.</li>
                  <li><strong>Quality:</strong> We are committed to delivering top-notch products and services.</li>
                  <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                  <li><strong>Customer Satisfaction:</strong> Our clients are at the heart of everything we do.</li>
                </ul>
              </Card.Text>
              <Card.Text>
                At MBC, our team of skilled professionals is dedicated to helping businesses succeed in the digital age. We combine technical expertise with a deep understanding of industry trends to deliver solutions that drive growth and efficiency.
              </Card.Text>
              <Card.Text>
                Contact us today to learn more about how we can help your business thrive.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
