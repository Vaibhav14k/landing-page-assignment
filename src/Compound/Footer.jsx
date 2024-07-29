import React from 'react'
import { FaVectorSquare } from "react-icons/fa";

function Footer() {
  return (
    <section className='w-full  bg-black px-8 py-6' >
            <div className='flex flex-row flex-wrap broder-2 mt-2   ' >
                    <div className=' w-full md:w-1/2 h-84  ' >
                        <div className=' flex flex-col gap-5  	 border-black   text-red-50 p-10  ' >
                            <FaVectorSquare className='text-2xl' />
                            <p className='text-3xl' >Sivatel Tower, 12th Floor, Sivatel Tower, Kolkata, India 10330, IN</p>
                            <div className='flex flex-wrap gap-2 text-3xl  items-center ' >
                                <input type="submit" value="Enter Your email address" className=' h-14 pl-2   w-456 ' ></input>
                                <button className='border-[#CF67CA] rounded-md    h-14 ' >SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2  pt-10 flex gap-3 text-red-50 flex-wrap' >
                        <div className='text-2xl pt-8 pl-4 ' >
                            <p>Products</p>
                            <p className='mt-6' >Agency Management</p>
                            <p>Direct to Consumer</p>
                        </div>
                        <div className='text-2xl pt-8 pl-4 ' >
                            <p>Developers</p>
                            <p className='mt-6' >Documentation</p>
                            <p>APIs & SDK</p>
                        </div>
                        <div className='text-2xl pt-8 pl-4 ' >
                            <p>Contact</p>
                            <p className='mt-6' >+91 9999999999</p>
                            <p>support@gmail.io</p>
                        </div>
                    </div>
                    
            </div>
    </section>
  )
}

export default Footer
