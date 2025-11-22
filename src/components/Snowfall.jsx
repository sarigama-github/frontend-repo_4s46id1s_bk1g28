import { useEffect, useRef } from 'react'

export default function Snowfall({ density = 150 }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const flakes = Array.from({ length: density }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.8,
      d: Math.random() * 0.8 + 0.2,
      a: Math.random() * Math.PI * 2
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      flakes.forEach(f => {
        f.a += 0.01
        f.y += (f.d + 0.5)
        f.x += Math.sin(f.a) * 0.5
        if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w }
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()
      animationRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [density])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0" />
}
