import React from 'react'

export const About_me = () => {
  return (
    <section id='about' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold mb-4'>
                    Acerca de mi
                </h2>
            </div>
            <div className='text-gray-700 rounded-lg shadow-xl p-6 bg-gray-100 lg:mx-20'>
                <p className='text-lg'>
                Mi nombre es Jorge Luis Vallinas Tamayo. Soy ingeniero en Ciencias Informáticas de 25 años, graduado de la Universidad de las Ciencias Informáticas de Cuba y actualmente resido en La Habana.
                <br/>
                Trabajo en la Universidad de las Ciencias Informáticas, específicamente en el Centro de Desarrollo CIGED, donde me desempeño como desarrollador Frontend. A lo largo de mi carrera, he tenido la oportunidad de trabajar en el campo de la inteligencia artificial, con un enfoque particular en el desarrollo de sistemas conversacionales utilizando modelos grandes de lenguaje (LLM).
                <br/>
                Mi pasión por la tecnología y la programación me ha llevado a desarrollar una sólida base en la creación de interfaces de usuario atractivas y funcionales. Además, mi experiencia en inteligencia artificial me ha permitido contribuir a proyectos innovadores que buscan mejorar la interacción entre humanos y máquinas.
                </p>
            </div>
        </div>
        
    </section>
  )
}
