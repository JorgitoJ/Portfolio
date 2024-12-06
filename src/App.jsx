import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <div className='min-h-screen bg-white'>
        <Header/>
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

