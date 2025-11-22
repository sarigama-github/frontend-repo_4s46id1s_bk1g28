import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroExterior from './components/HeroExterior'
import InteriorScene from './components/InteriorScene'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="exterior"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
          >
            <HeroExterior onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="interior"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InteriorScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
