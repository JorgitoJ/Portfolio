import React from 'react'

const skills = [
    {
      category: 'Fronted',
      items: ['React', 'Java Script', 'HTML', 'CSS','Tailwind CSS']
    },
    {
      category: 'IA',
      items: ['Python', 'HuggingFace Transformers', 'Groq', 'TensorFlow', 'LangChain']
    },
    {
      category: 'Herramientas y Otros',
      items: ['Git','Github', 'Google Colab','Django' ]
    },
  ];



export const Skills = () => {
    return (
    <section id="skills" className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold mb-10'>
                    Habilidades y Herramientas
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                Mi enfoque es ser un desarrollador versátil, capacitado para trabajar con una variedad de
                 tecnologías y herramientas, siempre buscando formas de optimizar y mejorar mis procesos de desarrollo.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {skills.map((skillset, index) =>(
                    <div 
                        key={index}
                        className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col'
                    >
                        <h3 className='text-xl font-bold mb-4 text-purple-600'>
                            {skillset.category}
                        </h3>
                        <div>
                            {skillset.items.map((skill,skillIndex) =>(
                                <span 
                                    key={skillIndex}
                                    className='grid grid-cols-1 py-1 text-purple-600 rounded-lg text-sm '
                                >
                                    {skill}
                                </span>
                            ) )}
                        </div>
                        
                    </div>
                ) )}
            </div>
        </div>
    </section>
  )
}
