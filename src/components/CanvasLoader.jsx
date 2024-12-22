import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <span className='canvas-loader' />
      <p className='mt-10 font-extrabold text-[#f1f1f1] text-sm'>
        {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
      </p>
    </Html>
  )
}

export default CanvasLoader
