import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Elf({ x, y, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="absolute"
      style={{ left: x, top: y }}
    >
      <div className="w-20 h-28 rounded-xl bg-green-600 relative shadow-lg">
        {/* hat */}
        <div className="absolute -top-7 left-4 w-12 h-8 bg-green-700 rounded-t-full">
          <div className="absolute -top-2 right-0 w-3 h-3 bg-yellow-300 rounded-full" />
        </div>
        {/* face */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-10 bg-amber-200 rounded-full" />
        {/* collar */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-14 h-3 bg-red-500 rounded-full" />
        {/* gift */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-10 bg-pink-400 rounded-md border-2 border-pink-300">
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-yellow-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default function InteriorScene() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(()=>setLoaded(true), 200); return ()=>clearTimeout(t) }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-red-50 overflow-hidden">
      {/* room wooden walls */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#7c3f2a_0px,#7c3f2a_12px,#8b5e34_12px,#8b5e34_40px)] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/40 to-amber-200/60" />
      </div>

      {/* garlands */}
      <div className="absolute top-0 left-0 right-0 h-28">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="absolute w-3 h-3 rounded-full" style={{
            backgroundColor: ['#fde047','#fb7185','#60a5fa','#34d399'][i%4],
            top: `${8 + Math.sin(i/18*Math.PI)*6}%`,
            left: `${(i+2)/20*100}%`,
            filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))'
          }} />
        ))}
      </div>

      {/* fireplace glow */}
      <div className="absolute left-10 bottom-0 w-80 h-80 rounded-full bg-amber-300/30 blur-3xl" />

      {/* fireplace */}
      <div className="absolute left-12 bottom-16 w-72 h-44 bg-rose-900 rounded-xl border-4 border-rose-800 shadow-2xl">
        <div className="absolute inset-3 rounded-lg bg-gradient-to-b from-amber-200 to-amber-600">
          <div className="absolute inset-x-10 bottom-4 h-20 bg-gradient-to-t from-amber-700 to-amber-400 rounded-full blur-sm" />
          <div className="absolute inset-x-20 bottom-6 h-14 bg-gradient-to-t from-orange-700 to-orange-300 rounded-full blur" />
        </div>
      </div>

      {/* Santa */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-20 bottom-16"
      >
        <div className="w-64 h-72 relative">
          {/* chair */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-red-700 rounded-3xl shadow-xl" />
          {/* Santa body */}
          <div className="absolute bottom-10 left-6 right-6 h-40 bg-red-600 rounded-2xl border-4 border-red-500" />
          {/* belt */}
          <div className="absolute bottom-24 left-10 right-10 h-6 bg-amber-900">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-4 bg-yellow-300" />
          </div>
          {/* head */}
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-24 h-24 bg-amber-200 rounded-full" />
          {/* hat */}
          <div className="absolute bottom-52 left-1/2 -translate-x-1/2 w-28 h-16 bg-red-700 rounded-t-full">
            <div className="absolute -top-2 right-2 w-6 h-6 bg-white rounded-full" />
          </div>
          {/* beard */}
          <div className="absolute bottom-34 left-1/2 -translate-x-1/2 w-28 h-20 bg-white rounded-b-3xl" />
        </div>
      </motion.div>

      {/* elves */}
      <Elf x={"40%"} y={"55%"} delay={0.2} />
      <Elf x={"55%"} y={"60%"} delay={0.35} />
      <Elf x={"70%"} y={"58%"} delay={0.5} />

      {/* shelves and toys */}
      <div className="absolute right-10 top-24 w-64 h-6 bg-amber-700 rounded-lg shadow" />
      <div className="absolute right-10 top-36 w-64 h-6 bg-amber-700 rounded-lg shadow" />

      {/* Ticket kiosk */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[min(720px,92vw)] bg-amber-100/80 backdrop-blur-sm rounded-2xl border border-amber-500/30 shadow-xl"
      >
        <div className="p-5 md:p-6">
          <h3 className="text-2xl font-extrabold text-amber-900 text-center">Magical Access Tickets</h3>
          <p className="text-amber-800/80 text-center mb-4">Reserve your visit to Santa’s cozy home</p>
          <TicketForm />
        </div>
      </motion.div>
    </div>
  )
}

function TicketForm() {
  const [form, setForm] = useState({ purchaser_name: '', purchaser_email: '', package: 'Standard', quantity: 1, notes: '' })
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create ticket')
      setStatus({ ok: true, id: data.id })
      setForm({ purchaser_name: '', purchaser_email: '', package: 'Standard', quantity: 1, notes: '' })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label className="block text-sm font-semibold text-amber-900 mb-1">Your Name</label>
        <input value={form.purchaser_name} onChange={e=>setForm(f=>({...f, purchaser_name: e.target.value}))} required className="w-full rounded-lg bg-white/80 border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g., Holly Snow" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-900 mb-1">Email</label>
        <input type="email" value={form.purchaser_email} onChange={e=>setForm(f=>({...f, purchaser_email: e.target.value}))} required className="w-full rounded-lg bg-white/80 border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-900 mb-1">Package</label>
        <select value={form.package} onChange={e=>setForm(f=>({...f, package: e.target.value}))} className="w-full rounded-lg bg-white/80 border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
          <option>Standard</option>
          <option>Family</option>
          <option>VIP</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-900 mb-1">Quantity</label>
        <input type="number" min="1" max="10" value={form.quantity} onChange={e=>setForm(f=>({...f, quantity: Number(e.target.value)}))} className="w-full rounded-lg bg-white/80 border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-amber-900 mb-1">Notes</label>
        <textarea value={form.notes} onChange={e=>setForm(f=>({...f, notes: e.target.value}))} rows={3} className="w-full rounded-lg bg-white/80 border border-amber-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Any special requests?" />
      </div>
      <div className="md:col-span-2 flex items-center gap-3">
        <button disabled={submitting} className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold shadow">
          {submitting ? 'Booking…' : 'Purchase Tickets'}
        </button>
        {status && status.ok && (
          <span className="text-green-700">Success! Confirmation ID: {status.id}</span>
        )}
        {status && !status.ok && (
          <span className="text-red-700">{status.message}</span>
        )}
      </div>
    </form>
  )
}
