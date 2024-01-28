import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id='about us' className='max-container max-sm:mt-12 flex justify-between items-center max-lg:flex-col gap-10'>

      <div className="flex flex-1 flex-col">
        <div>
          <h2 className="font-paliquin text-4xl font-bold lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
          <p className="font-palanquin text-slate-gray mt-2 lg:max-w-lg">Ensuring premium comfort and style, out meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="font-palanquin text-slate-gray mt-4 mb-8 lg:max-w-lg">Our dedication to detail and excellence ensures you satisfaction</p>

          <Button
            label='View Details'
            iconURL={arrowRight}
          />
        </div>
      </div>

      <div>
          <img
            src={shoe8}
            height={570}
            width={522}
          />
        </div>
      
      
    </section>
  )
}

export default SuperQuality