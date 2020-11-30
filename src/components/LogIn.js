import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Login({}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cookieUser, setCookieUser] = useCookies(['email']);
  const [cookiePassword, setCookiePassword] = useCookies(['password']);
  function handleCookie() {
    setCookiePassword('password', password, { path: '/' });
    setCookieUser('email', email, { path: '/' });
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const backHome = useHistory();

  function handleCheckForm() {
    console.log(email, password);

    return email === 'team4' && password === 'team4'
      ? () => backHome.push('/Home')
      : () => {
          setEmail('');
          setPassword('');
        };
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
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
