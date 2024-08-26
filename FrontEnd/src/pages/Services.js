import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Website Development',
    description: 'We create professional and responsive websites tailored to your business needs. Our services include front-end and back-end development, e-commerce solutions, and content management systems.',
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Android Application Development',
    description: 'Our team develops high-quality Android applications that provide an excellent user experience. We handle everything from design and development to testing and deployment.',
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Desktop Application Development',
    description: 'We offer custom desktop application development services for various industries. Our solutions are robust, secure, and designed to meet your specific business requirements.',
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Digital Marketing',
    description: 'Our digital marketing services help you reach a larger audience and grow your business online. We offer SEO, social media marketing, email marketing, and more.',
    imgUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Cloud Solutions',
    description: 'We provide comprehensive cloud solutions including cloud migration, infrastructure management, and cloud-based application development to enhance your business agility and efficiency.',
    imgUrl: 'https://via.placeholder.com/150'
  }
];

const Services = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.imgUrl} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
