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
                    <Image src={GithubIcon} alt = "GitHub Icon" />
                </Link>
                <Link href = "https://www.instagram.com/pedrazaaaaaaa/">
                    <Image src={InstagramIcon} alt = "Instagram Icon" />
                </Link>
            </div>
        </div>
        <div>
            <form className = "flex flex-col gap-4">
                <label htmlFor = "email" className = "text-white">Correo</label>
                <input type = "email" id = "email" required placeholder = "eugeniopedraza@live.com.mx"/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection