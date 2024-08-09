import React from 'react'
import myphoto from '../../public/new book.png'

function Banner() {
  return (
    <>
    <div className='  mx-auto ms-8 flex flex-col md:flex-row '  >
    <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-12 mt'  >
<div className="space-y-12">
     <h1 className='text-4xl font-bold text-white mt-20'>Hello this is my book store  <span className='text-red-300'>Every day is new day</span></h1>
    <p className='text-xl '>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, vel quidem recusandae id hic sunt vero similique illo molestiae magni pariatur cupiditate aut rem delectus est dignissimos nihil repudiandae iure.
    </p>

{/* email input */}
    <label className="input input-bordered flex items-center gap-2  ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn mt-2 btn-secondary ">Secondary</button>
</div>
   
    </div>
    <div className=' order-1 w-full md:w-1/2 mt-14'>
    <img src={myphoto} className='md-7' alt="" />
    </div>
    </div>
    </>
  )
}

export default Banner
