import React from 'react'
import { star } from '../assets/icons'

const Customer = ({imgURL,testimonial,name}) => {
  return (
    <section className='flex flex-col gap-2'>

        <div className='flex justify-center'>
            <img
                src={imgURL}
                alt='picture'
                className='rounded-full object-contain'
                height={150}
                width={150}
            />
        </div>
        
        <p className='mt-5 text-center text-slate-gray max-w-md'>
            {testimonial}
        </p>

        <div className='flex justify-center'>
            <img 
                src={star}
                alt='rating'
                height={24}
                width={24}
            />

            <p className='ml-2 text-slate-gray text-xl'>(4.5)</p>

        </div>

        <h2 className='text-center font-bold font-montserrat text-2xl mt-2'>{name}</h2>


    </section>
  )
}

export default Customer