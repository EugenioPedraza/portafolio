"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hola, soy {""}</span>
                    <TypeAnimation
                        sequence={[
                            
                            'Eugenio Pedraza',
                            1000, 
                            'Desarollador Web',
                            1000,
                            'Ingeniero de Tecnologias Computaciones',
                            1000,
                            'Estudiante del TEC',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}

                        repeat={Infinity}
                        />
                </h1>
                <p className="text-[#a1b69c] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipsisicing elit. Quisuips volpatim
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Contactame
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-pruple-500 to-pink-500 hover:bg-slate-8 text-white">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Descargar CV</span>
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className= "relative w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden bg-[#181818]">
                    <Image src = "/images/memoji.png" layout="fill" objectFit="cover" alt="Memoji" className="absolute top-0 left-0 w-full h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;