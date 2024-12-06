import React from 'react'

import { RiBookMarkedLine,
         RiClipboardLine,
         RiFileUserLine,
         RiAccountCircleLine } from "react-icons/ri";


export const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'>
        <nav className='container mx-auto px-6 py-4'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
                    <a href="#hero">JorgitoDev</a>
                </div>
                <div className='flex items-center gap-3 md:gap-6 '>
                    <a href="#skills" className='hover:text-purple-600 transition-colors'>
                    <span className="md:hidden text-purple-600"><RiBookMarkedLine size={24}/></span>
                    <span className="hidden sm:inline  hover:text-purple-600 transition-colors">Habilidades</span>
                    </a>
                    <a href="#projects" className='hover:text-purple-600 transition-colors'>
                    <span className="md:hidden text-purple-600"><RiClipboardLine size={24}/></span>
                    <span className="hidden sm:inline  hover:text-purple-600 transition-colors">Proyectos</span>
                    </a>
                    <a href="#about" className='hover:text-purple-600 transition-colors'>
                    <span className="md:hidden text-purple-600"><RiFileUserLine  size={24}/></span>
                    <span className="hidden sm:inline  hover:text-purple-600 transition-colors">Acerca de mi</span>
                    </a>
                    <a href="#contact" className='hover:text-purple-600 transition-colors'>
                    <span className="md:hidden  text-purple-600"><RiAccountCircleLine  size={24}/></span>
                    <span className="hidden sm:inline  hover:text-purple-600 transition-colors">Contacto</span>
                    </a>
                </div>
            </div>
        </nav>

    </header>
  )
}
