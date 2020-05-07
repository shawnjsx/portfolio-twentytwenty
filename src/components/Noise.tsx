import * as React from 'react'
import useNoise from '../hooks/useNoise'

const NoiseComponent: React.FunctionComponent = () => {
  const [canvasRef] = useNoise()
  return <canvas ref={canvasRef} />
}

export default NoiseComponent
