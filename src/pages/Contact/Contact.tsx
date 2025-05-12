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
        <div className="contact_1">
            <div>
      <form className="contact__form">
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" rows={5} required></textarea>
        <button type="submit">Enviar</button>
      </form>
            </div>
            <div className="contact-mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3203064641552!2d-45.42606864994724!3d-20.473808421890674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4ef00110a7143%3A0x6f3bbac85f6ce1c9!2sMRM%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1747088166637!5m2!1spt-BR!2sbr"
                    width="400" height="300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </main>
  );
};

export default Contact;
