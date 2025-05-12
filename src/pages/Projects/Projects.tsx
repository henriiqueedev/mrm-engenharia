import React from "react";
import "./Projects.css";
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

const Projects: React.FC = () => {
    return (
        <main className="projects container">
            <h2>Confira alguns dos nossos projetos executados</h2>
            <div className="projects__gallery">
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
        </main>
    );
};

export default Projects;
