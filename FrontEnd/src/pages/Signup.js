import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Auth.css'; // Import the combined CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      navigate('/login');
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="auth-page signup-page">  {/* Apply auth-page and signup-page classes */}
      <Container className="d-flex justify-content-center h-100">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>
                <h3 className="text-center">Sign Up</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square"></i></span>
                  <span><i className="fab fa-google-plus-square"></i></span>
                  <span><i className="fab fa-twitter-square"></i></span>
                </div>
              </Card.Header>
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="input-group form-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="input-group form-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="input-group form-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="signup_btn float-right">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center links">
                Already have an account?&nbsp;  <a href="/login">Sign In</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
// import './Auth.css';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null); // Added for error handling
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
//       navigate('/login');
//     } catch (error) {
//       setError('Failed to register. Please try again.'); // Set error message
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center h-100">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card>
//             <Card.Header>
//               <h3 className="text-center">Sign Up</h3>
//               <div className="d-flex justify-content-end social_icon">
//                 <span><i className="fab fa-facebook-square"></i></span>
//                 <span><i className="fab fa-google-plus-square"></i></span>
//                 <span><i className="fab fa-twitter-square"></i></span>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               {error && <Alert variant="danger">{error}</Alert>} {/* Error message */}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="input-group form-group mb-4">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text"><i className="fas fa-user"></i></span>
//                   </div>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="input-group form-group mb-4">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text"><i className="fas fa-envelope"></i></span>
//                   </div>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="input-group form-group mb-4">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text"><i className="fas fa-key"></i></span>
//                   </div>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="auth_btn float-right">
//                   Sign Up
//                 </Button>
//               </Form>
//             </Card.Body>
//             <Card.Footer className="d-flex justify-content-center links">
//               Already have an account? &nbsp; <a href="/login">Sign In</a>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;
