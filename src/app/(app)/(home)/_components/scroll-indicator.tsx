'use client'

import { motion } from 'motion/react'

export function ScrollIndicator() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-1 md:bottom-8">
      <div className="flex h-7 w-4 items-center justify-center overflow-hidden rounded-full border-2 border-primary">
        <motion.div
          animate={{ y: [-5, -8, 8], opacity: [0, 1, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            repeatDelay: 0.5,
            times: [0, 0.5, 0.8, 1],
            ease: 'anticipate',
          }}
          className="size-1 shrink-0 rounded-full bg-primary"
        ></motion.div>
      </div>
    </div>
  )
}
