import React from 'react'

const About = () => {
  return (
    <section className='my-20 c-space'>
        <div className='gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 h-full'>
            <div className='col-span-1 xl-row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid1" className='w-full h-fit sm:h-[276px] object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Ahmed</p>
                        <p className='grid-subtext'>I'm a full-stack developer with a passion for building beautiful and functional websites</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About