import React from "react";
import { ServiceCard } from "../../components";
import "./Services.css";

const Services: React.FC = () => {
  return (
    <main className="services container">
      <h2>Nossos Serviços</h2>
        <div className="services__form">
            <p>Somos especialistas em desenvolver projetos para instalações residenciais, comerciais e redes de infraestrutura urbana, utilizando tecnologias de ponta. Dos desenhos digitais 3D ao sistema BIM, garantimos representações detalhadas e integradas para execução, manutenção e gerenciamento de seus projetos.</p>
            <p>Com mais de 20 anos de experiência, acompanhamos a evolução tecnológica e a implementação de diversos projetos. Uma constante em todas as fases é a necessidade de informações técnicas detalhadas.</p>
        </div>
      <div className="services__list">
        <ServiceCard
          title="Serviço 1"
          description="Descrição do serviço 1"
          image="/assets/images/servicos1.jpg"
        />
        <ServiceCard
          title="Serviço 2"
          description="Descrição do serviço 2"
          image="/assets/images/servicos2.jpg"
        />
        <ServiceCard
          title="Serviço 3"
          description="Descrição do serviço 3"
          image="/assets/images/servicos3.jpg"
        />
      </div>
    </main>
  );
};

export default Services;
