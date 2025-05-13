import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logomrm.jpeg";


const Footer: React.FC = () => {
  return (
      <footer className="footer">
          <div className="footer-container">
              {/* Seção da logo e descrição */}
              <div className="footer-section">
                  <img src={logo} alt="Logo MRM" className="logo"/>
                  <p>Projeto inovador, eficiente e econômico, com atendimento personalizado e de alta qualidade.</p>
              </div>

              {/* Mapa do site */}
              <div className="footer-section">
                  <h3>Mapa do site</h3>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/services">Serviços</a></li>
                      <li><a href="/about">Quem Somos</a></li>
                      <li><a href="/projects">Projetos Realizados</a></li>
                  </ul>
              </div>

              {/* Contato */}
              <div className="footer-section">
                  <h3>Fale conosco</h3>
                  <ul>
                      <li>
                          📞 <a href="tel:+553733224422" target="_blank" rel="noopener noreferrer">(37) 3322-4422</a>
                      </li>

                      <li>
                          📱 <a href="https://wa.me/5531998572524" target="_blank" rel="noopener noreferrer">(31)
                          99857-2524</a>
                      </li>

                      <li>
                          📧 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rogerio@mrm.eng.br" target="_blank"
                               rel="noopener noreferrer">rogerio@mrm.eng.br
                      </a>
                      </li>
                  </ul>
              </div>


              {/* Localização */}
              <div className="footer-section">
                  <h3>Localização</h3>
                  <p>Rua Treze de Maio, 239, Centro </p>
                  <p>Formiga - MG.</p>
                  <p>CEP: 35570-182</p>
              </div>
          </div>

          {/* Direitos autorais */}
          <div className="footer-bottom">
              <p>Copyright © 2025 MRM Engenharia LTDA | CNPJ: 45.609.988/0001-29 | Todos os direitos reservados.</p>
          </div>
      </footer>
  );
};

export default Footer;
