import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col'>
        <img 
            src={imgURL}
            alt='popular product'
            width={280}
            height={280}
        />

        <div className='mt-8 flex justify-start gap-2.5'>
            <img 
                src={star}
                alt='rating'
                height={24}
                width={24}
            />
            <p className='text-slate-gray text-md font-montserrat leading-normal'>(4.5)</p>
        </div>

        <h3 className='mt-2 font-semibold font-palanquin'>
            {name}
        </h3>

        <p className='text-coral-red font-bold font-montserrat'>
            {price}
        </p>

    </div>
  )
}

export default PopularProductCard