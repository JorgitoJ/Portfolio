import React from 'react'

import foto from '../assets/foto.png'

import { RiGithubLine,
         RiLinkedinLine,
         RiMailLine,
         RiFilePdf2Line  } from "react-icons/ri";

export const Hero = () => {
  return (
        <section id='hero' className='min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 lg:pt-20'>
            <div className='container mx-auto px-6 '>
                <div className='flex flex-col lg:flex-row items-center gap-12'>
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                            <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
                                Hola soy Jorge Luis !!!
                            </span>
                        </h1>
                        <p className='text-xl text-gray-600 mb-6'>
                            Desarrollador Frontend Junior con experiencia en el campo de la IA,
                            sobre todo en el uso de modelos LLM.
                        </p>
                        <div className='flex items-center gap-2 justify-center lg:justify-start'>
                            <a href="https://github.com/JorgitoJ" className='text-gray-600 hover:text-purple-600 transition-colors'><RiGithubLine size={25}/></a>
                            <a href="https://www.linkedin.com/" className='text-gray-600 hover:text-purple-600 transition-colors'><RiLinkedinLine size={25}/></a>
                            <a href="https://mail.google.com/jorgeluisvallinas99@gmail.com" className='text-gray-600 hover:text-purple-600 transition-colors'><RiMailLine size={25}/></a>
                            <a href="" className='text-gray-600 hover:text-purple-600 transition-colors'><RiFilePdf2Line size={25}/></a>
                        </div>
                    </div>
                        <img src={foto} alt="" className='rounded-full shadow-2xl w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] object-cover'/>
                </div>
            </div>
        </section>
  )
}
