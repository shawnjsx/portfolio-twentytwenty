import { useEffect, useRef } from 'react'

function useNoise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const settings = {
    size: 120,
    interval: 3,
    alpha: 20,
  }

  useEffect(() => {
    const { current: canvas } = canvasRef

    let frame: number = 0
    let animation: number = 0

    // initialize canvas

    let ctx: CanvasRenderingContext2D = canvas?.getContext('2d')!

    if (canvas) canvas.id = 'canvas-noise'
    resize()
    window.addEventListener('resize', resize)

    // create noise pixels

    const noise = document.createElement('canvas')
    const noiseCTX = noise.getContext('2d')

    noise.width = settings.size
    noise.height = settings.size

    const imageData = noiseCTX?.createImageData(settings.size, settings.size)!

    loop()

    // canvas methods

    function resize() {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    function pixel() {
      const t = imageData.data.length
      for (let i = 0; i < t; i += 4) {
        const t = Math.floor(255 * Math.random())
        imageData.data[i] = t
        imageData.data[i + 1] = t
        imageData.data[i + 2] = t
        imageData.data[i + 3] = settings.alpha
      }
      noiseCTX?.putImageData(imageData, 0, 0)
    }

    function draw() {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = ctx.createPattern(noise, 'repeat')!
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    function loop() {
      if (frame % settings.interval === 0) draw()
      if (frame % settings.interval === 0) pixel()
      animation = window.requestAnimationFrame(loop)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animation)
      canvas?.remove()
    }
  })

  return [canvasRef]
}

export default useNoise
