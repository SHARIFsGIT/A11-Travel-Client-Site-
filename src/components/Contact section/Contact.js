import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://cryptic-journey-83985.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Form>
      <h3>Drop Your FEEDBACK!</h3>
  <Form.Group className="mb-2 mt-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name" placeholder="Type Your Name" />
    <Form.Label className="mb-2 mt-2" >Email Address</Form.Label>
    <Form.Control type="email" placeholder="Type Your E-mail" />
  </Form.Group>
  <Form.Group className="mb-2 mt-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="We Appreciate Your Feedback!"/>
  </Form.Group>
</Form>
  );
};

export default ContactForm;