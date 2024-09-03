"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 via-green-500 to-yellow-500">Hi, I'm {""}</span>
                        <span className="inline-block relative">
                        <span className="invisible">Ingeniero de Tecnologias Computacionales</span>
                            <span className="absolute left-0 top-0">
                                <TypeAnimation
                                    sequence={[
                                        'Eugenio Pedraza',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'B.S. in Computer Science and Technology',
                                        1000,
                                        'Student @ Tec de Monterrey',
                                        1000,
                                        'App Developer',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </span>
                    </h1>
                    <p className="text-[#b0b0b0] text-base sm:text-lg mb-6">
                    Welcome to my digital portfolio. Here you will find a selection of my tech projects developed during my studies.                    </p>
                    <div>
                        <Link href = "#contact">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-400 via-green-500 to-yellow-500 hover:bg-slate-800 text-white">
                            Contact Me
                        </button>
                        </Link>

                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-400 via-green-500 to-yellow-500 hover:bg-slate-8 text-white">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV (WIP)</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className= "relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden bg-[#181818]">
                        <Image src = "/images/memoji.png" layout="fill" objectFit="cover" alt="Memoji" className="absolute top-0 left-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
