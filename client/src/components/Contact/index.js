import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <Form className='contactForm container' >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="Textarea">
        <Form.Label>Please Contact for any general questions:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Submit</Button>
      </Form>
  );
}

export default Contact;