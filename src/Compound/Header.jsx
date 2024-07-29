import React from 'react'
import { FaVectorSquare } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

function Header() {
  return (
    <header className='w-full flex justify-center items-center font-Metropolis px-8 py-4 ' >
    <nav className='w-full flex items-center  justify-between  ' >
        <FaVectorSquare className='text-xl' />
        <div className='text-xs   font-medium gap-8 justify-evenly md:flex hidden' >
            <div>PRODUCTS</div>
            <div>NEWS</div>
            <div>ABOUT</div>
        </div>
        <div className='md:flex text-xs font-medium gap-3 hidden ' >
            <button className='w-32 flex items-center gap-2 h-8 justify-center ' >REFER US <FaLongArrowAltRight /> </button>
            <button className='bg-black text-xs h-8 w-36  gap-2 rounded-md text-white flex items-center justify-center' >CONTACT US <FaLongArrowAltRight/> </button>
        </div>
        <div className='md:hidden'>
        <IoMenuOutline />
        </div>
    </nav>
    </header>
  )
}

export default Header
