'use client'

import { motion } from 'framer-motion'

export function Overlay() {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-transparent to-background/50"
    />
  )
}
