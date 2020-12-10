import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Login({}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const backHome = useHistory();

  function handleCheckForm() {

    return email === 'team4' && password === 'team4'
      ? () => { backHome.push('/Home')}
      : () => {
          setEmail('');
          setPassword('');
        };
  }
  // la password e l'username sono team4
  return ( 
    <div className="Login d-flex justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="col-lg-12 mb-4 mt-4">
          <Form.Label className="text-login">Username</Form.Label>
          <Form.Control
            className="shadow"
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" col-lg-12 mb-4 mt-4">
          <Form.Label className="text-login">Password</Form.Label>
          <Form.Control
          className="shadow"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          className="Btn-login shadow col-lg-12 mb-4 mt-4"
          type="submit"
          disabled={!validateForm()}
          onClick={handleCheckForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
