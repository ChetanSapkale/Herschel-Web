import React, { useState } from 'react';
import '../styles/Accountpage.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Accountpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [registeremail, setRegisteremail] = useState('');
  const [registerpassword, setRegisterpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      firstname,
      lastname,
      registeremail,
      registerpassword,
      confirmpassword,
    };
    console.log(userData);
  };

  return (
    <Container className="account-page mt-5">
      <h5>Account</h5>
      <Row className="auth-container">
        <Col md={6} className="auth-box">
          <h5>Log In</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Control 
                type="email" 
                placeholder="Email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>
            <a href="#" className="forgot-password">Forgot your password?</a><br /><br />
            <Button variant="dark" type="submit">Sign In</Button>
          </Form>
        </Col>
        <Col md={6} className="auth-box">
          <h5>Register</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Control 
                type="text" 
                placeholder="First Name" 
                value={firstname} 
                onChange={(e) => setFirstname(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Control 
                type="text" 
                placeholder="Last Name" 
                value={lastname} 
                onChange={(e) => setLastname(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Control 
                type="email" 
                placeholder="Email address" 
                value={registeremail} 
                onChange={(e) => setRegisteremail(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={registerpassword} 
                onChange={(e) => setRegisterpassword(e.target.value)} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmpassword} 
                onChange={(e) => setConfirmpassword(e.target.value)} 
              />
            </Form.Group>
            <Button variant="dark" type="submit">Next</Button>
          </Form>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Accountpage;
