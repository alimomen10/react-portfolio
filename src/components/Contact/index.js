import React from "react";
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-4">
        <div>
            <h1>Contact</h1>
        </div>
        <div className="mt-3 ms-1">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
        </div>
    </Container>
  );
}

export default Contact;