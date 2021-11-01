import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label className="ms-5">Name:</label>
        <input className="ms-4" type="text" id="name" required />
      </div>
      <div className="mt-3 mb-3">
        <label className="ms-5">Email:</label>
        <input className="ms-4" type="email" id="email" required />
      </div>
      <div>
        <label className="ms-5">Message:</label>
        <textarea className="ms-2" id="message" required />
      </div>
      <button className="button ms-5 mt-3" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;