import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
import Store from '../components/Store.jsx'

const Hero = () => {
  const x = useControls('HackerRoom', {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    rotationX: { value: 2.5, min: -10, max: 10 },
    rotationY: { value: 2.5, min: -10, max: 10 },
    rotationZ: { value: 2.5, min: -10, max: 10 },
    scale: { value: 1, min: 0.1, max: 10 }
  })
  const isSmall = useMediaQuery({ maxWidth: 321 })
  const isMobile = useMediaQuery({ maxWidth: 426 })
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 768 })
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isLaptop)
  return (
    <section className='relative flex flex-col w-full min-h-screen'>
      <div className='flex flex-col gap-3 mx-auto mt-32 lg:mt-38 w-full c-space'>
        <p className='font-generalsans font-medium text-2xl text-center text-white sm:text-3xl'>
          Hi, I am Ahmed <span className='waving-hand'>👋</span>
        </p>
        <p className='z-10 text-gray_gradient hero_tag'>
          Building Attractive Websites <span className='text-white'>🏗️</span>{' '}
        </p>
      </div>

      <div className='absolute inset-0 flex w-full h-full'>
        <Leva hidden />
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 40]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0.3, -Math.PI, 0]}
                className='z-20'
              />
            </HeroCamera>
            <group>
              <Target
                position={sizes.targetPosition}
                scale={sizes.targetScale}
              />
              <ReactLogo
                position={sizes.reactLogoPosition}
                scale={sizes.reactLogoScale}
              />
              <Cube position={sizes.cubePosition} scale={sizes.cubeScale} />
              <Rings position={sizes.ringPosition} scale={sizes.ringScale} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
      <div className='right-0 bottom-0 left-0 z-30 absolute w-full c-space'>
      <a className='w-fit' href='#contact'>
          <Button
            name="Let's work together"
            isBeam
            containerClass='sm:w-fit w-full sm:max-w-96'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
