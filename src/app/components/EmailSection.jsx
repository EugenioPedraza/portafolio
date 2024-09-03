"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import WhatsappIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/API/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log(resData);

      if (response.status === 200) {
        console.log("Mensaje Enviado");
        setEmailSubmitted(true);
      } else {
        console.log("Error al enviar el mensaje");
        console.log(response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id = "contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for new opportunities to learn and grow as a developer. If you have any questions or just want to say hello, feel free to contact me.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/EugenioPedraza">
            <Image src={GithubIcon} alt="GitHub Icon" width={47} height={50} />
          </Link>
          <Link href="https://www.instagram.com/pedrazaaaaaaa/">
            <Image src={InstagramIcon} alt="Instagram Icon" width={47} height={50} />
          </Link>
          <Link href="http://wa.me/8122097720">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" width={47} height={50} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block font-medium mb-2">Correo</label>
            <input
              className="bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="email"
              type="email"
              id="email"
              required
              placeholder="eugeniopedraza@live.com.mx"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block font-medium mb-2">Asunto</label>
            <input
              className="bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="¡Hola! ¿Cómo estás?"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border-[#33354F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hola Eugenio, me gustaría hablar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email sent correctly.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;