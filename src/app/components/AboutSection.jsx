"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>React.js</li>
                <li>C++</li>
                <li>Python</li>
                <li>Swift</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul>
                <li>Ing. en Tecnologías Computacionales</li>
                <li>Tecnológico de Monterrey</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Swift</li>
                <li>C++</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();   

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/tecblanco.png" width={500} height={500} alt="TEC" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                        Soy un desarrollador web con experiencia en el desarrollo de aplicaciones web y móviles.
                        En mi tiempo libre me gusta aprender nuevas tecnologías y trabajar en proyectos personales.
                        Actualmente estoy estudiando en el Tecnológico de Monterrey.
                        En la carrera de Ingeniería en Tecnologías Computacionales.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
