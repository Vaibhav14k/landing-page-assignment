
import React from 'react'
import Header from './Compound/Header';
import Hero from './Compound/Hero';
import Group from './Compound/Group';
import Reactangle from './Compound/Reactangle';
import Feature from './Compound/Feature';
import Footer from './Compound/Footer';
function App() {
  return (
    <div  className='md:mx-auto  w-full max-w-[1440px] flex flex-col items-center justify-center  ' >
      <Header />
      <Hero/>
      <div className='flex  items-start justify-center   mt-8  font-semibold ' >
        <p className='font-semibold text-xl	' >Trusted By Leading Insurance Brands</p>
      </div>
      <Group/>
      <div className='flex  items-start justify-center   mt-6  font-semibold ' >
        <p className='font-bold text-4xl	' >WHY US?</p>
      </div>
      <Reactangle/>
      <div className='flex  items-start justify-center mt-12 font-semibold ' >
        <p className='font-bold w-full border-2 text-4xl 	' >Streamline Your Agency Operations Today</p>
      </div>
      <Feature/>
      <Footer/>
    </div>

  );
}

export default App;
