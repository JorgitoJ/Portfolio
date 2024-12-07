import React from 'react'

import { RiMailLine,
         RiPhoneLine,
         RiMapPinLine  } from "react-icons/ri";

export const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold mb-4'>Contácteme</h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>Siempre estoy abierto a hablar sobre nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            <div className='flex items-center gap-4 bg-gray-50 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600'>
                    <RiMailLine size={24}/>
                </div>
                <div>
                    <h3 className='font-semibold'>Correo</h3>
                    <p className='text-gray-600'>jorgeluisvallinas99@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-4 bg-gray-50 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600'>
                    <RiPhoneLine size={24}/>
                </div>
                <div>
                    <h3 className='font-semibold'>Teléfono</h3>
                    <p className='text-gray-600'>+53 55707946</p>
                </div>
            </div>
            <div className='flex items-center gap-4 bg-gray-50 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
                <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600'>
                    <RiMapPinLine size={24}/>
                </div>
                <div>
                    <h3 className='font-semibold'>Ubicación</h3>
                    <p className='text-gray-600'>La Habana, Cuba</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
