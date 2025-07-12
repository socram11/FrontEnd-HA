import React from "react";
import "./AboutThisProyect.css";
import granjaImg from "./granja.png";
import wendyImg from "./wendy.jpg";
import tomasImg from "./tomas.jpg";
import tatianaImg from "./tatiana.jpg";
import marcosImg from "./marcos.jpg";
import erwinImg from "./erwin.jpg";

const teamMembers = [
  {
    name: "Federico Petrone",
    image: "",
    github: "https://github.com/fedepetrone",
    linkedin: "https://www.linkedin.com/in/federico-petrone-31a479337/",
  },
  {
    name: "Tomas Felisberto",
    image: tomasImg,
    github: "https://github.com/Tomas17-c",
    linkedin: "https://www.linkedin.com/in/tom%C3%A1s-felisberto-cohen-8a8084358/",
  },
  {
    name: "Wendy Piriz",
    image: wendyImg,
    github: "https://github.com/Wendypirizz",
    linkedin: "https://www.linkedin.com/in/wendy-piriz-1b3aa8312/",
  },
  {
    name: "Marcos Lopez",
    image: marcosImg,
    github: "https://github.com/socram11",
    linkedin: "https://www.linkedin.com/in/marcos-l%C3%B3pez-540458222/",
  },
  {
    name: "Erwin Caballero",
    image: erwinImg,
    github: "https://github.com/ecrawbian",
    linkedin: "https://www.linkedin.com/in/erwin-caballero-041a69335/",
  },
  {
    name: "Tatiana Gonzalez",
    image: tatianaImg,
    github: "https://github.com/AlejandraTatianaGP",
    linkedin: "https://www.linkedin.com/in/tatiana-gonz%C3%A1lez-65438a291/",
  },
  {
    name: "Pablo Mendez",
    image: "",
    github: "https://github.com/Pablo-m22",
    linkedin: "https://linkedin.com/in/pablomendez",
  },
];

const AboutThisProject = () => {
  return (
    <div className="about-container">
      <div className="about-description-container">
        <img src={granjaImg} alt="Ilustración granja" className="about-image" />
        <div className="text-section">
          <h2 className="section-titlee">Sobre este proyecto</h2>
          <p className="section-description">
            Este sitio web fue creado como parte de nuestro proyecto final de curso. Se trata de una tienda en línea donde vendemos frutas, verduras y productos naturales, con el objetivo de promover una alimentación saludable y un estilo de vida sostenible.
            <br /><br />
            Nos inspira la idea de volver a lo esencial: alimentos frescos, locales y responsables con el medio ambiente. Además de vender productos, compartimos recetas y formas simples de cuidar el planeta desde lo cotidiano.
            <br /><br />
            Este proyecto refleja nuestros valores y nuestro compromiso con un futuro más verde, saludable y consciente.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2 className="section-title">Conocé a nuestro equipo</h2>
        <div className="team-carousel">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="team-image"
              />
              <h5 className="team-name">{member.name}</h5>
              <div className="team-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <button className="github-btn">GitHub</button>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <button className="linkedin-btn">LinkedIn</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutThisProject;




