"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard' 
import ProjectTag from './ProjectTag'

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
        gitUrl: "https://github.com/EugenioPedraza/VisionDoc",
        previewUrl: "",

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
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
        <h2 className = "text-center text-4xl font-bold text-white mt-4 py-10">
        Mis Proyectos
        </h2>
        <div className = "text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <ProjectTag onClick = {handleTagChange} name = "All" isSelected={tag === "All"}/>
            <ProjectTag onClick = {handleTagChange} name = "Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick = {handleTagChange} name = "App" isSelected={tag === "App"}/>
        </div>
        <div className = "grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
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