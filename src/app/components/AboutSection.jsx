"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className = "list-disc pl-12">
                <li>C++</li>
                <li>Python</li>
                <li>Swift</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Oracle Cloud Infraestructure (OCI)</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul className = "list-disc pl-12 mb-24">
                <li>B.S. in Computer Science and Technology</li>
                <li>Tecnológico de Monterrey</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className = "list-disc pl-12 mb-6">
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
                <Image src="/images/tecblanco.png" width={450} height={450} alt="TEC" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg">
                    I am a developer with experience in creating web and mobile applications, using Oracle cloud infraestructure, and development.
In my free time, I like to learn new technologies and work on personal projects.
I am currently studying at Tecnológico de Monterrey, pursuing a degree in Computer Technology Engineering.
                    </p>
                    <div className="mt-7">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
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
