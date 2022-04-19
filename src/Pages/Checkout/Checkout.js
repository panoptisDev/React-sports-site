import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thankyou')
  };

 

  return (
    <div className="container">
      <h2 className="my-4 text-center text-info">Please Checkout</h2>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Number" required />
        </Form.Group>

        <Button  variant="primary" type="submit">
          Checkout
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
