import { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import DemoComputer from '../components/DemoComputer'

const projectCount = myProjects.length
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const currentProject = myProjects[selectedProjectIndex]
  const handleNavigation = direction => {
    setSelectedProjectIndex(prevIndex => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      }
    })
  }
  return (
    <section className='my-20 c-space' id='work'>
      <p className='head-text'>My Work</p>
      <div className='gap-5 grid grid-cols-1 lg:grid-cols-2 mt-12 w-full'>
        <div className='relative flex flex-col gap-5 shadow-2xl shadow-black-200 px-5 py-10 sm:p-10'>
          <div className='top-0 right-0 absolute'>
            <img
              src={currentProject.spotlight}
              alt='Spotlight'
              className='rounded-xl w-full h-96 object-cover'
            />
          </div>
          <div
            className='backdrop-blur-3xl backdrop-filter p-3 rounded-lg w-fit'
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt='logo'
              className='shadow-sm w-10 h-10'
            />
          </div>
          <div className='flex flex-col gap-5 my-5 text-white-600'>
            <p className='font-semibold text-2xl animated-text'>
              {currentProject.title}
            </p>
            <p className='animated-text'>{currentProject.desc}</p>
            <p className='animated-text'>{currentProject.subdesc}</p>
          </div>
          <div className='flex flex-wrap justify-between items-center gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className='flex items-center gap-2 text-white-600 cursor-pointer'
              href={currentProject.link}
              target='_blank'
              rel='noreferrer'
            >
              <p>Check the live site</p>
              <img src='assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button
              className='arrow-btn'
              onClick={() => handleNavigation('previous')}
            >
              <img
                src='assets/left-arrow.png'
                alt='left-arrow'
                className='w-4 h-4'
              />
            </button>
            <button
              className='arrow-btn'
              onClick={() => handleNavigation('previous')}
            >
              <img
                src='assets/right-arrow.png'
                alt='right-arrow'
                className='w-4 h-4'
              />
            </button>
          </div>
        </div>
        <div className='bg-black-200 border border-black-300 rounded-lg h-96 md:h-full'>
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects
