import React from "react";
import "./Home.css";
import bannerImage from "../../assets/images/banner-home.jpg";
import aboutImage from "../../assets/images/banner-home.jpg";
import hidroIcon from "../../assets/images/banner-home.jpg";
import eletricaIcon from "../../assets/images/banner-home.jpg";
import gasIcon from "../../assets/images/banner-home.jpg";
import mrvLogo from "../../assets/images/banner-home.jpg";
import preconLogo from "../../assets/images/banner-home.jpg";
import project1 from "../../assets/images/banner-home.jpg";
import project2 from "../../assets/images/banner-home.jpg";
import project3 from "../../assets/images/banner-home.jpg";
import project4 from "../../assets/images/banner-home.jpg";
import project5 from "../../assets/images/banner-home.jpg";
import project6 from "../../assets/images/banner-home.jpg";

const projects = [
    {
        image: project1,
        title: "Alto Sobradinho",
        owner: "Direcional Engenharia",
        location: "Sobradinho - DF",
        units: 344
    },
    {
        image: project2,
        title: "Gran Vic Gama",
        owner: "VIC",
        location: "Brasília - DF",
        units: 236
    },
    {
        image: project3,
        title: "Exclusive Montreal",
        owner: "Riva Incorporadora",
        location: "Belo Horizonte - MG",
        units: 208
    },
    {
        image: project4,
        title: "Exclusive Montreal",
        owner: "Riva Incorporadora",
        location: "Belo Horizonte - MG",
        units: 208
    },
    {
        image: project5,
        title: "Exclusive Montreal",
        owner: "Riva Incorporadora",
        location: "Belo Horizonte - MG",
        units: 208
    },
    {
        image: project6,
        title: "Exclusive Montreal",
        owner: "Riva Incorporadora",
        location: "Belo Horizonte - MG",
        units: 208
    }
];

const Home: React.FC = () => {
  return (
    <main className="home">
      {/** HERO (Banner) */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
          <div className="hero__overlay">
              <h1>Soluções de Engenharia</h1>
              <p>Infraestrutura e Meio Ambiente</p>
              <a href="/about" className="btn-hero">
                  Saiba Mais
              </a>
          </div>
      </section>

        {/** CARDS INICIAIS */}
      <section className="cards-intro container">
        <div className="card-intro">
          <h3>Quem somos</h3>
          <p>
            Excelência em construção, com inovação e qualidade. Conheça nossa
            história e valores.
          </p>
        </div>
        <div className="card-intro">
          <h3>Nossos projetos</h3>
          <p>
            Explore nossos projetos desenvolvidos, com projetos realizados de
            alta qualidade.
          </p>
        </div>
        <div className="card-intro">
          <h3>Nossos serviços</h3>
          <p>
            Soluções completas em construção civil, do planejamento à execução,
            com eficiência e qualidade.
          </p>
        </div>
      </section>

      {/** SOBRE NÓS */}
      <section className="about-home container">
        <h2>Sobre nós</h2>
        <div className="about-home__content">
          <div className="about-home__text">
            <p>
              A MRM Engenharia e Projetos é uma empresa jovem,
              especializada na área de projetos elétricos e hidrossanitários
              .Com foco em soluções de infraestrutura e meio ambiente,
              nossa equipe é formada por profissionais experientes.
            </p>
            <p>
              Nosso objetivo é entregar resultados que unam inovação e
              sustentabilidade, contribuindo para o desenvolvimento do país.
            </p>
            <a href="/about" className="btn-primary">
              Ver contexto
            </a>
          </div>
          <div className="about-home__image">
            <img src={aboutImage} alt="Sobre nós" />
          </div>
        </div>
      </section>

      {/** NOSSOS SERVIÇOS (com ícones) */}
      <section className="services-home container">
        <h2>Nossos Serviços</h2>
        <p>
          Construindo o futuro: soluções inteligentes em projetos de engenharia
        </p>
        <div className="services-list">
          <div className="service-item">
            <img src={hidroIcon} alt="Hidrossanitário" />
            <h4>Hidrossanitário</h4>
          </div>
          <div className="service-item">
            <img src={eletricaIcon} alt="Elétrica e Sistemas" />
            <h4>Elétrica e Sistemas</h4>
          </div>
          <div className="service-item">
            <img src={gasIcon} alt="Gás" />
            <h4>Gás</h4>
          </div>
        </div>
      </section>

      {/** PROJETOS EXECUTADOS */}
      <section className="projects-home full-width">
      <div className="projects-text">
        <h1>Projetos executados</h1>
        <p>Confira abaixo alguns de nossos projetos</p>
      </div>
        <div className="projects-list">
        {projects.map((project, index) => (
                    <div key={index} className="project__card">
                        <img src={project.image} alt={project.title} />
                        <div className="project__info">
                            <h3>EMPREENDIMENTO:</h3>
                            <h4>{project.title}</h4>
                            <p><strong>Proprietário:</strong> {project.owner}</p>
                            <p><strong>Localização:</strong> {project.location}</p>
                            <p><strong>Número de Unidades:</strong> {project.units}</p>
                        </div>
                    </div>
                ))}
        </div>
        <a href="/projects" className="btn-primary">
          Ver todos os projetos
        </a>
      </section>

      {/** NOSSOS CLIENTES */}
      <section className="clients-home container">
        <h2>Nossos Clientes</h2>
        <p>
          Grandes empresas já confiam em nosso trabalho. Confira alguns dos
          nossos clientes:
        </p>
        <div className="clients-list">
          <div className="client-card">
            <img src={mrvLogo} alt="MRV" />
          </div>
          <div className="client-card">
            <img src={preconLogo} alt="Precon" />
          </div>
        </div>
      </section>

      {/**VÍDEO*/}
      <section className="video-home container">
        <h2>Conheça mais sobre nosso trabalho</h2>
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_SEU_VIDEO_"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>

      {/**FINAL*/}
      <section className="cta-home container">
        <h2>Precisa de um projeto de engenharia?</h2>
        <p>Entre em contato e solicite um orçamento</p>
        <a href="/contact" className="btn-primary">
          Fale Conosco
        </a>
      </section>
    </main>
  );
};

export default Home;
