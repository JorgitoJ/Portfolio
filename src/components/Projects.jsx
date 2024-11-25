import React from 'react'

import { RiGithubLine,
         RiExternalLinkLine} from "react-icons/ri";

import food from '../assets/GourmetStore.png'
import store from '../assets/NikeStore.png'
import gif from '../assets/GifApp.png'
import sistem from '../assets/SGDE.png'
import pdf from '../assets/ChatPDF.png'
import url from '../assets/ChatURL.png'

const projects = [
  {
    name:'Food Store',
    description:'Este proyecto desarrolla una interfaz moderna y responsiva para una tienda de un restaurante, utilizando las tecnologías populares React y Tailwind CSS.',
    foto: food,
    skills:['React','Tailwind CSS'],
    coding:'https://github.com/JorgitoJ/Gourmet-Store',
    demo:'https://gourmet-store.vercel.app'
  },
  {
    name:'Nike Store',
    description:'Una sencilla Store creada con React.',
    foto: store,
    skills:['React','CSS'],
    coding:'https://github.com/JorgitoJ/Nike-s-Store',
    demo:'https://nike-s-store.vercel.app'
  },
  {
    name:'Gif App',
    description:'Sitio para mostrar gifs, consumbles de una API',
    foto: gif,
    skills:['React','CSS'],
    coding:'https://github.com/JorgitoJ/react-Gif-Expert',
    demo:'https://react-gif-expert-six.vercel.app'
  },
  {
    name:'Covid System',
    description:'Este proyecto desarrolla un sistema para gestionar y analizar datos estadísticos relacionados con el COVID-19 en entornos hospitalarios. El sistema ofrece varias funcionalidades cruciales para la gestión eficiente de la pandemia.',
    foto: sistem,
    skills:['Django','Python','CSS'],
    coding:'https://github.com/JorgitoJ/Sistema-Gestor-de-Datos-Estad-sticos',
    demo:'https://sistema-gestor-de-datos-estad-sticos.vercel.app'
  },
  {
    name:'Chat PDF',
    description:'Chatbot interactivo con PDF: Asistente conversacional que analiza y responde preguntas basadas en el contenido de documentos PDF. Utiliza técnicas de procesamiento de lenguaje natural para ofrecer respuestas precisas y relevantes.',
    foto: pdf,
    skills:['Python','Langchain'],
    coding:'https://github.com/JorgitoJ/ChatPDF',
    demo:'https://colab.research.google.com/drive/13-pj0tMZRwKv02qMtr0YMzEpd2_mdkbI'
  },
  {
    name:'Chat URL',
    description:'Chatbot interactivo con URL: Asistente conversacional que analiza y responde preguntas basadas en el contenido de una página web. Utiliza técnicas de procesamiento de lenguaje natural para ofrecer respuestas precisas y relevantes, extrayendo información de una URL proporcionada.',
    foto: url,
    skills:['Python','Langchain'],
    coding:'https://github.com/JorgitoJ/ChatURL',
    demo:'https://colab.research.google.com/drive/1h4qRa4WmcWzxbIVCTNCxFG8C3IS94FTn'
  }

]

export const Projects = () => {
  return (
    <section id='projects' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-4'>Proyectos</h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                Estos son algunos de los proyectos que he desarrollado donde muestran mis habilidades y experiencia
                en el desarrollo web y el campo de la IA.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((proyect) =>(
                <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                  <div className='relative h-48 overflow-hidden'>
                    <img src={proyect.foto} 
                         alt={proyect.name} 
                         className='transition-transform hover:scale-110'/>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2'>{proyect.name}</h3>
                    <p className='text-gray-600 mb-4'>{proyect.description}</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {proyect.skills.map((skill)=>(
                        <span className='px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm'>
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className='flex gap-4'>
                      <a href={proyect.coding} className='flex items-center text-gray-600 hover:text-purple-600 transition-colors'><RiGithubLine size={20}/> Código</a>
                      <a href={proyect.demo} className='flex items-center text-gray-600 hover:text-purple-600 transition-colors'><RiExternalLinkLine size={20}/>Demo</a>
                    </div>
                  </div>  
                </div>
              ))}
            </div>

        </div>
    </section>
  )
}
