'use client'
import { motion } from 'motion/react'

export function IntroSection() {
  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  const TRANSITION_SECTION = { duration: 0.3 }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="flex-1">
        <p className="text-zinc-600 dark:text-zinc-400">
          Hello, I am Juan Daniel, the Co-Founder and Chief Information
          Security Officer (CISO) at Denova Mind.
        </p>
      </div>
    </motion.section>
  )
}
