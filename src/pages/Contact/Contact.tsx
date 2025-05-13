import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
    return (
        <main className="contact container">
            <div className="contact__grid">
                {/* Coluna Esquerda */}
                <div className="contact__info">
                    <h2>Entre em contato conosco</h2>
                    <p>
                        Para entrar em contato, utilize as informações abaixo ou preencha o
                        formulário ao lado.
                    </p>
                    <ul>

                        <li>📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rogerio@mrm.eng.br" target="_blank"
                                 rel="noopener noreferrer">rogerio@mrm.eng.br</a></li>
                        <li>📞 <a href="tel:+553733224422" target="_blank" rel="noopener noreferrer">(37) 3322-4422</a>
                        </li>
                        <li>📱 (31) 99857-2524</li>
                        <li>
                        📍 Rua Para de Minas, nº 341
                            CEP:35.570-182, Formiga - MG
                        </li>
                    </ul>
                    <div className="contact__mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3203064641552!2d-45.42606864994724!3d-20.473808421890674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4ef00110a7143%3A0x6f3bbac85f6ce1c9!2sMRM%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1747088166637!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="250"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Coluna Direita */}
                <div className="contact__form-container">
                    <form className="contact__form">
                        <label>Nome *</label>
                        <input type="text" placeholder="Digite seu nome" required />

                        <label>E-mail *</label>
                        <input type="email" placeholder="Digite seu e-mail" required />

                        <label>Telefone *</label>
                        <input type="tel" placeholder="Digite seu telefone" required />

                        <label>Fale conosco *</label>
                        <textarea placeholder="Digite sua mensagem" rows={5} required></textarea>

                        <button type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;
