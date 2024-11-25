import React from 'react'

import { RiGithubLine,
         RiLinkedinLine,
         RiMailLine} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
        <div className='container mx-auto px-6'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='text-2xl font-bold mb-4 md:mb-0'>
                    <span className='bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
                        <a href="#hero">JorgitoDEV</a>
                    </span>
                </div>
                <div className='flex items-center gap-6 mb-4 md:mb-0'>
                    <a href="#skills" className='hover:text-purple-600 transition-colors'>Skills</a>
                    <a href="#projects" className='hover:text-purple-600 transition-colors'>Projects</a>
                    <a href="" className='hover:text-purple-600 transition-colors'>About</a>
                    <a href="" className='hover:text-purple-600 transition-colors'>Contact</a>
                </div>
                <div className='flex items-center gap-4'>
                    <a href="https://github.com/JorgitoJ" className='hover:text-purple-600 transition-colors'><RiGithubLine size={20}/></a>
                    <a href="https://www.linkedin.com/" className='hover:text-purple-600 transition-colors'><RiLinkedinLine size={20}/></a>
                    <a href="" className='hover:text-purple-600 transition-colors'><RiMailLine size={20}/></a>
                </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 '>
                <p>
                    © {new Date().getFullYear()} Jorge Luis Vallinas Tamayo. <br className='lg:hidden'/> Todos los derechos reservados
                </p>
            </div>
        </div>
    </footer>
  )
}
