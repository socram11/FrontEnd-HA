import React from "react";
import "./AboutThisProyect.css";

const teamMembers = [
  {
    name: "Federico Petrone",
    image: "/images/federico.jpg",
    github: "https://github.com/fedepetrone",
    linkedin: "https://www.linkedin.com/in/federicopetrone",
  },
  {
    name: "Tomas Felisberto",
    image: "/images/tomas.jpg",
    github: "https://github.com/Tomas17-c",
    linkedin: "https://www.linkedin.com/in/tomasfelisberto",
  },
  {
    name: "Wendy Piriz",
    image: "/images/wendy.jpg",
    github: "https://github.com/Wendypirizz",
    linkedin: "https://www.linkedin.com/in/wendypiriz",
  },
  {
    name: "Marcos Lopez",
    image: "/images/marcos.jpg",
    github: "https://github.com/socram11",
    linkedin: "https://www.linkedin.com/in/marcoslopez",
  },
  {
    name: "Erwin Caballero",
    image: "/images/erwin.jpg",
    github: "https://github.com/ecrawbian",
    linkedin: "https://www.linkedin.com/in/erwin-caballero-041a69335/",
  },
  {
    name: "Pablo Mendez",
    image: "/images/pablo.jpg",
    github: "https://github.com/Pablo-m22",
    linkedin: "https://www.linkedin.com/in/pablomendez",
  },
  {
    name: "Tatiana Gonzalez",
    image: "/images/tatiana.jpg",
    github: "https://github.com/tatianagonzalez",
    linkedin: "https://www.linkedin.com/in/tatianagonzalez",
  },
];

const AboutThisProject = () => {
  return (
    <div className="about-container">
      <h2 className="project-title">Sobre este proyecto</h2>
      <p className="project-description">
        Este sitio web fue creado como parte de nuestro proyecto final de curso. Se trata de una tienda en línea donde vendemos frutas, verduras y productos naturales, con el objetivo de promover una alimentación saludable y un estilo de vida sostenible.

Nos inspira la idea de volver a lo esencial: alimentos frescos, locales y responsables con el medio ambiente. Además de vender productos, compartimos recetas, consejos ecológicos y formas simples de cuidar el planeta desde lo cotidiano.

Este proyecto refleja nuestros valores y nuestro compromiso con un futuro más verde, saludable y consciente.
      </p>

      <h3 className="team-title">Conoce nuestro equipo</h3>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h4 className="team-name">{member.name}</h4>
            <a
              href={member.github}
              className="team-link github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
            <a
              href={member.linkedin}
              className="team-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutThisProject;


