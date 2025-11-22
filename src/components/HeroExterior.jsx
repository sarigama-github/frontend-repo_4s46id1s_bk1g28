import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Snowfall from './Snowfall'

export default function HeroExterior({ onEnter }) {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-900 via-indigo-900 to-slate-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(200px 120px at 70% 20%, rgba(255,255,255,0.15), transparent 60%),
                            radial-gradient(260px 160px at 20% 10%, rgba(255,255,255,0.08), transparent 60%)`
        }} />
      </div>

      <Snowfall density={180} />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white/80" style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.9 + 0.1,
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))'
          }} />
        ))}
      </div>

      {/* Foreground snow ground */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-white/0 rounded-t-[40%] blur-[2px]" />

      {/* Santa House silhouette + lights */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-28 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            A Magical Winter Visit
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-xl mx-auto">
            Snowflakes whisper, lights twinkle, and a cozy home awaits. Step closer…
          </p>
        </motion.div>

        {/* House representation (stylized vector-style) */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-[720px] max-w-[92vw] aspect-[16/10]"
        >
          {/* House body */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-rose-900 rounded-[22px] shadow-2xl" style={{ filter: 'drop-shadow(0 20px 60px rgba(255,100,120,0.25))' }} />
          {/* Roof */}
          <div className="absolute -top-10 left-6 right-6 h-20 bg-gradient-to-b from-red-900 to-red-700 rounded-t-[26px]" />
          {/* Snow on roof */}
          <div className="absolute -top-14 left-3 right-3 h-14 bg-white rounded-t-[40px]" />
          {/* Chimney */}
          <div className="absolute -top-6 left-12 w-16 h-16 bg-gradient-to-b from-red-800 to-red-600 rounded-md">
            <div className="absolute -top-4 left-0 right-0 h-4 bg-white rounded-t-md" />
          </div>
          {/* Door */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-40 bg-gradient-to-b from-amber-900 to-amber-700 rounded-xl border-4 border-amber-500/30">
            <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)' }} />
            <div className="absolute top-1/2 -mt-1 right-6 w-3 h-3 bg-amber-300 rounded-full shadow" />
          </div>
          {/* Windows glowing */}
          {[[-200,-20],[170,-10],[0,-50]].map(([x,y],i)=> (
            <div key={i} className="absolute w-24 h-24 bg-amber-300/90 rounded-xl" style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              boxShadow: '0 0 30px rgba(255,210,120,0.7)'
            }} />
          ))}
          {/* String lights */}
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="absolute w-3 h-3 rounded-full" style={{
              backgroundColor: ['#fde047','#fb7185','#60a5fa','#34d399'][i%4],
              top: `${12 + Math.sin(i/18*Math.PI)*6}%`,
              left: `${(i+2)/20*100}%`,
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))'
            }} />
          ))}
          {/* Path */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-to-t from-slate-100 to-slate-50 rounded-b-[60%]" />
        </motion.div>

        <motion.button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={onEnter}
          className="mt-10 px-8 py-4 rounded-full font-bold text-lg bg-pink-500 hover:bg-pink-400 text-white shadow-[0_10px_30px_rgba(255,100,150,0.5)]"
          whileTap={{ scale: 0.96 }}
          animate={{ y: hover ? -3 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          Step Inside
        </motion.button>
      </div>

      {/* Foreground snow mounds */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-32 bg-white/90 rounded-t-[60%]" />
      </div>
    </div>
  )
}
