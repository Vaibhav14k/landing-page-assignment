import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";
import { BiSolidRectangle } from "react-icons/bi";

function Reactangle() {
  return (
    <section className=' w-full ' >
            <div className='flex flex-wrap gap-2 items-center justify-evenly my-10 ' >
                <div className=' pl-4 w-52 text-2xl	 flex flex-col justify-evenly gap-8	 h-44 bg-zinc-100 rounded-lg' >
                    <p><IoMdSettings className='text-3xl' /></p>
                    <p className='font-semibold	 '>Improve  Efficiency</p>
                </div>
                <div className='w-52 pl-4 text-2xl	 flex flex-col justify-evenly gap-8	 h-44 bg-zinc-100 rounded-lg' >
                    <p><BiSolidRectangle className='text-3xl' /></p>
                    <p className='font-semibold	 '>Enable  Digitization</p>
                </div>
                <div className='w-52 pl-4 text-2xl	 flex flex-col justify-evenly gap-8	 h-44 bg-zinc-100 rounded-lg ' >
                    <p><IoEllipse  className='text-3xl' /></p>
                    <p className='font-semibold	 '>Engaging  </p>
                </div>
                <div className='w-52 text-2xl pl-4	 flex flex-col justify-evenly gap-8	 h-44 bg-zinc-100 rounded-lg' >
                    <p><IoMdSettings className='text-3xl' /></p>
                    <p className='font-semibold	 '>Kickass  Team</p>
                </div>
            </div>

    </section>
  )
}

export default Reactangle
