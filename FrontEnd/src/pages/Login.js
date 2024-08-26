import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import './Auth.css'; // Import the combined CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-page login-page">  {/* Apply auth-page and login-page classes */}
      <Container className="d-flex justify-content-center h-100">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header>
                <h3 className="text-center">Sign In</h3>
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
                  <div className="row align-items-center remember mb-4">
                    <Form.Check label="Remember Me" />
                  </div>
                  <Button variant="primary" type="submit" className="login_btn float-right">
                    Login
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center links">
                Don't have an account?&nbsp; <a href="/signup">Sign Up</a>
              </Card.Footer>
              <Card.Footer className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
// import './Auth.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null); // Added for error handling
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       navigate('/');
//     } catch (error) {
//       setError('Invalid email or password'); // Set error message
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center h-100">
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card>
//             <Card.Header>
//               <h3 className="text-center">Sign In</h3>
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
//                 <div className="row align-items-center remember mb-4">
//                   <Form.Check label="Remember Me" />
//                 </div>
//                 <Button variant="primary" type="submit" className="auth_btn float-right">
//                   Login
//                 </Button>
//               </Form>
//             </Card.Body>
//             <Card.Footer className="d-flex justify-content-center links">
//             Don't have an account? &nbsp;<a href="/signup"> Sign Up</a>
//             </Card.Footer>
//             <Card.Footer className="d-flex justify-content-center">
//               <a href="#">Forgot your password?</a>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;





// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
// // import axios from 'axios';
// // import './Login.css';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
// //       localStorage.setItem('token', response.data.token);  // Store the token
// //       navigate('/');  // Redirect to home page
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //     }
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
// //       <Row className="w-100">
// //         <Col md={{ span: 6, offset: 3 }}>
// //           <Card>
// //             <Card.Body>
// //               <Card.Title className="text-center">Login</Card.Title>
// //               <Form onSubmit={handleSubmit}>
// //                 <Form.Group controlId="formBasicEmail">
// //                   <Form.Label>Email address</Form.Label>
// //                   <Form.Control 
// //                     type="email" 
// //                     placeholder="Enter email" 
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required 
// //                   />
// //                 </Form.Group>

// //                 <Form.Group controlId="formBasicPassword" className="mt-3">
// //                   <Form.Label>Password</Form.Label>
// //                   <Form.Control 
// //                     type="password" 
// //                     placeholder="Password" 
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required 
// //                   />
// //                 </Form.Group>

// //                 <Button variant="primary" type="submit" className="w-100 mt-4">
// //                   Login
// //                 </Button>
// //               </Form>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Login;
