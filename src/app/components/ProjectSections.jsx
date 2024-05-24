import React from 'react'
import ProjectCard from './ProjectCard' 


const projectsData = [
    {
        id: 1,
        title: "Website Next.JS",
        description: "Pagina de portafolio personal",
        image: "/images/tecblanco.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "VisionOS App",
        description: "Aplicacion para los VisionOS",
        image: "/images/tecblanco.png",
        tag:["All", "App"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
        id: 3,
        title: "Videjuego en Unity",
        description: "Juego de plataformas en 2D",
        image: "/images/tecblanco.png",
        tag: ["All", "App"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Website .NET",
        description: "Pagina para SorteoTec",
        image: "/images/tecblanco.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    }
]


const ProjectSections = () => {
  return (
    <>
        <h2 className = "text-center text-4xl font-bold text-white mt-4 py-10">
        Mis Proyectos
        </h2>
        <div className = "grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        ))}
        </div>
    </>
  );
};

export default ProjectSections