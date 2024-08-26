import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';

const Careers = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(form);
    handleClose();
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Careers at MBC</Card.Title>
              <Card.Text>
                Join our team and help us build innovative solutions that make a difference. We are currently looking for talented individuals to fill the following positions:
              </Card.Text>
              <Card.Text>
                <ul>
                  <li>Software Developer</li>
                  <li>UI/UX Designer</li>
                  <li>Project Manager</li>
                  <li>QA Tester</li>
                </ul>
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Application</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                as="select"
                name="position"
                value={form.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a position</option>
                <option value="Software Developer">Software Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="QA Tester">QA Tester</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formResume">
              <Form.Label>Resume</Form.Label>
              <Form.Control
                type="file"
                name="resume"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" type="submit">Submit Application</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Careers;
