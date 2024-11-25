import React from 'react'

export const Header = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm'>
        <nav className='container mx-auto px-6 py-4'>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent'>
                    <a href="#hero">JorgitoDev</a>
                </div>
                <div className='flex items-center gap-3 md:gap-6 '>
                    <a href="#skills" className='hover:text-purple-600 transition-colors'>Skills</a>
                    <a href="#projects" className='hover:text-purple-600 transition-colors'>Projects</a>
                    <a href="" className='hover:text-purple-600 transition-colors'>About</a>
                    <a href="" className='hover:text-purple-600 transition-colors'>Contact</a>
                </div>
            </div>
        </nav>

    </header>
  )
}
