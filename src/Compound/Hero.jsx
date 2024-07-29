import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <section className=' w-full my-6  ' >
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start  gap-20 pt-10 w-full' >
            <div className='md:w-1/2 text-center md:text-left space-y-8   ' >
                <p className='mt-14 gap-y-4 text-5xl md:text-6xl  font-semibold ' >One Platform, <br className='hidden md:block' />Endless Capabilities</p>
                <p  className='pt-2 text-xl text-gray-600 font-semibold text-center md:text-left' >With hands-on experience transforming companies and brokers. We know how to create platforms that agents and customers will love.</p>
                <button className='flex mt-3 mx-auto items-center bg-[#592A78]   rounded-md h-8 p-6 gap-4 border-2 text-white ' >Book a free demo <FaLongArrowAltRight/> </button>
            </div>
            <div className=' w-1/2 flex justify-center items-center' >
              <img src='b065b3027dee9897db97f666a579ac46.png' className='bg-cover max-h-[400px]   ' />
            </div>
        </div>
    </section>
  )
}
export default Hero
