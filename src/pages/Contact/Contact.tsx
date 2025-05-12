import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <main className="contact container">
      <h2>Contato</h2>
      <p>
        Entre em contato conosco para solicitar orçamentos ou esclarecer
        dúvidas.
      </p>
      <form className="contact__form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" rows={5} required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default Contact;
