// src/components/Projects.tsx
import React from "react";

const projects = [
  {
    title: "El Mirador Web",
    description: "Proyecto página WEB gestión hotelera.",
    img: "/images/project1.jpeg",
    link: "https://github.com/lovnelies/El-Mirador-WEB", // Enlace al proyecto o repositorio
  },
  {
    title: "Proyecto 2 Título",
    description: "Este proyecto trata de como el bl cambió al mundo.",
    img: "/images/project2.jpeg",
    link: "#",
  },
  {
    title: "Proyecto 3 Título",
    description: "Hola este es un proyecto que explora las características negativas del ser humano.",
    img: "/images/project3.jpeg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-[#7e6651] text-4xl font-semibold text-center mb-12">
          My Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}   className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#f6e2b3"}}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-[#7e6651]">{project.title}</h3>
                <p className="text-[#b49982] mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className=" hover:underline mt-4 inline-block"
                  style={{color: "#ff8daa"}}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
