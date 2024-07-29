import React from 'react'

function Feature() {
  return (
    <section className=' w-full flex flex-col justify-center items-center my-12' >
        
            <div className=' w-full px-6 py-4 flex  flex-col md:flex-row justify-center items-center gap-6 mt-2  ' >
                <div className=' gap-6 w-full  md:w-1/2  '>
                    <h3 className='text-2xl font-bold mb-2  ' >Improved Agent Activation </h3>
                    <p className='font-normal gap-y-6 text-lg ' >80% of agents are opportunistic and have no tools or platforms to help them sell. With a tool, even a small % of extra activation would result in a large sales increase.</p>
                </div>
                <div className='md:w-1/2 md:px-14 md:py-6'>
                    <img src='woman.jpeg' className='object-cover aspect-video rounded-md  ' />
                </div>
            </div>
            <div className=' w-full px-6 py-4 flex  flex-col md:flex-row-reverse justify-center items-center gap-6 mt-2  ' >
                <div className=' gap-6 w-full  md:w-1/2  '>
                    <h3 className='text-2xl font-bold mb-2  ' >Foster Competition via Gamification </h3>
                    <p className='font-normal gap-y-6 text-lg ' >Our platform enhances sales performance via competition and campaign creation based on variables such as GWP, commissions, products, time frame, renewal rate, and more..</p>
                </div>
                <div className='md:w-1/2 md:px-14 md:py-6'>
                    <img src='woman1.png' className='object-cover aspect-video rounded-md  ' />
                </div>
            </div>
            <div className=' w-full px-6 py-4 flex  flex-col md:flex-row justify-center items-center gap-6 mt-2  ' >
                <div className=' gap-6 w-full  md:w-1/2  '>
                    <h3 className='text-2xl font-bold mb-2  ' >Manage Multiple Tiered Teams </h3>
                    <p className='font-normal gap-y-6 text-lg ' >We can support up to 5 levels of agents and teams allowing for insurers and agents to be managed at multiple levels.</p>
                </div>
                <div className='md:w-1/2 md:px-14 md:py-6'>
                    <img src='woman2.png' className='object-cover aspect-video rounded-md  ' />
                </div>
            </div>
            
            
    </section>
  )
}

export default Feature
