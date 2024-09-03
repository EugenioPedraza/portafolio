"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard' 
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: "Website Next.JS",
        description: "Web Portfolio",
        image: "/images/portafolioweb.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/EugenioPedraza/portafolio",
        previewUrl: "https://www.pedraza.me",
    },
    {
        id: 2,
        title: "VisionOS App",
        description: "VisionOS App for Med Students",
        image: "/images/visionDoc.png",
        tag:["All", "App"],
        gitUrl: "https://github.com/EugenioPedraza/VisionDoc",
        previewUrl: "https://www.youtube.com/watch?v=tR1tP5SS5fU",

    },
    {
        id: 3,
        title: "Unity Videgame",
        description: "2D Platform Videogame",
        image: "/images/sorteounity.png",
        tag: ["All", "App"],
        gitUrl: "https://github.com/EugenioPedraza/SorteoTec-UNITY",
        previewUrl: "https://drive.google.com/file/d/1bFZND2L_xJqu_cQD9t5h8DCUV1tAB9mj/view?usp=share_link",
    },
    {
        id: 4,
        title: "Website .NET",
        description: "Website Mockup of SorteoTec",
        image: "/images/sorteoweb.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/EugenioPedraza/SorteoTec-WEB",
        previewUrl: "https://drive.google.com/file/d/1R7423t3GRnrlNo41fvX73Mqx4HpCNE8z/view?usp=share_link",
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
    <section id="projects" className = "bg-[#121212]">
        <h2 className = "text-center text-4xl font-bold text-white mt-4 py-10">
        My Proyects
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
        </section>
    </>
  );
};

export default ProjectSections