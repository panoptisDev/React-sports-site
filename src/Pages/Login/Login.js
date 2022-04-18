import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
    const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    

    // signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <div className="container  mx-auto">
      <h2 className="mt-2 text-primary text-center">Please login</h2>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary d-block mx-auto" type="submit">
          Login
        </Button>
      </Form>
      <p className="w-50 mx-auto my-2">
        New to genius car{" "}
        <Link
          to="/register"
          className="text-primary text-decoration-none "
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
