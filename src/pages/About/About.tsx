import React from "react";
import "./About.css";
import bannerImage from "../../assets/images/banner-home.jpg";

const About: React.FC = () => {
  return (
    <main className="about container">
      <h2>Quem Somos</h2>
      <div className="about__content">
        <img src={bannerImage} alt="Sobre a empresa" />
        <div>
          <p>
            Somos uma empresa de engenharia focada em soluções de infraestrutura
            e meio ambiente. Nossa equipe conta com profissionais altamente
            capacitados, prontos para atender às demandas do mercado com
            qualidade e eficiência.
          </p>
          <p>
            Nosso compromisso é entregar resultados que além inovação e
            sustentabilidade, contribuindo para o desenvolvimento do país.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
