import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import InstagramIcon from '../../../public/instagram-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className = "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>   
            <h5 className = "text-xl font-bold text-white my-2">
                ¡Contáctame!
            </h5>
            <p className = "text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Estoy actualmente buscando por nuevas oportunidades para aprender 
                y crecer como desarrollador. 
                Si tienes alguna pregunta o simplemente quieres saludar, 
                no dudes en contactarme.
            </p>
            <div className = "socials flex flex-row gap-2">
                <Link href = "https://github.com/EugenioPedraza">
                    <Image src={GithubIcon} alt = "GitHub Icon" width={47} height={50}/>
                </Link>
                <Link href="https://www.instagram.com/pedrazaaaaaaa/">
                <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
            </div>
        </div>
        <div>
            <form className = "flex flex-col">
                <div className = "mb-6">
                <label htmlFor = "email" className = "text-white block font-medium mb-2">Correo</label>
                <input className = "bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  " 
                type = "email" 
                id = "email" 
                required 
                placeholder = "eugeniopedraza@live.com.mx"/>
                </div>
                <div className = "mb-6">
                <label htmlFor = "subject" className = "text-white block font-medium mb-2">Asunto</label>
                <input className = "bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  " 
                type = "subject" 
                id = "subject" 
                required 
                placeholder = "¡Hola! ¿Comó estas?"/>
                </div>
                <div className = "mb-6">
                    <label htmlFor = "message" className = "text-white block text-sm mb-2 font-medium">
                        Message
                    </label>
                    <textarea 
                        name = "message"
                        id = "message"
                        className = "bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder = "Hola Eugenio, me gustaría hablar sobre..."
                    />
                </div>
                <button 
                type = "submit"
                className = "bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Enviar Mensje
                </button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection