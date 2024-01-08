import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black-50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute mx-2 bottom-4 hover:scale-105 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black-50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black absolute mx-2 bottom-4 hover:scale-105 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black-50 rounded-xl text-white'>
                <p className='text-2xl font-bold px-2 pt-4'>We Deliver Desserts too!</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black absolute mx-2 bottom-4 hover:scale-105  '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
        </div>
    </div>
  )
}

export default HeadLineCards