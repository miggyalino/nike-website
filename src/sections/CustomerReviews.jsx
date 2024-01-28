import React from 'react'
import Customer from '../components/Customer'
import { customer1 } from '../assets/images'
import { customer2 } from '../assets/images'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col'>

      <div className='flex flex-col'>
        <h2 className='text-center font-palanquin text-4xl font-bold'>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
        <p className='text-slate-gray text-md mt-3 text-center max-w-lg m-auto'>Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      </div>

      <div className='flex justify-evenly items-center mt-20 flex-col gap-20 sm:flex-row'>

        <div className='flex flex-col'>
          <Customer
            imgURL={customer1}
            testimonial='The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
            name='Morich Brown'
          />
        </div>

        <div className='flex flex-col'>
          <Customer
            imgURL={customer2}
            testimonial='The product not only met but exceeded my expectations. Ill definitely be a returning customer!'
            name='Lota Mongeskar'
          />
        </div>

      </div>



    </section>
  )
}

export default CustomerReviews