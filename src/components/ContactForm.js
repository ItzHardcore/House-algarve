import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform actions with form data, such as sending it to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");

    // Send the form data to the API endpoint
    try {
      const response = await axios.post("http://localhost:3001/send-email", {
        name,
        email,
        message,
      });
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pb-3 pb-lg-4">
      <div className="d-grid">
        <input
          className="border border-1 border-dark mb-3 p-2"
          placeholder="Nome"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="border border-1 border-dark mb-3 p-2"
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className="border border-1 border-dark mb-3 p-2"
          rows={7}
          placeholder="Digite a sua mensagem..."
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-end">
        <button className="contactar2 " type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
