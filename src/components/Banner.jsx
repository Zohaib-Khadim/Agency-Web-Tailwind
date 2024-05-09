import React from 'react';
import Typed from 'react-typed';

const Banner = () => {
  return (
    <>
     <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1050px] my-[108px] mx-auto text-center font-bold '>
            <div className=' text-2xl'>
                Learn With Us
            </div>
            <div className='text-white text-3xl  md:text-6xl md:mt-4'>
                Growth With Us.
            </div>
            <div className='text-2xl md:text-4xl text-white md:mt-4'>
                Learn <Typed 
                    strings={['Web Development','Digital Marketing','Mobile Development']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
            </div>
            <button className="bg-black text-white md:w-[15%] p-2 mt-5   rounded">Get Started</button>
            
        </div>    
    </div> 
    </>
  )
}

export default Banner
