'use client'
import { motion } from 'motion/react'
import { WORK_EXPERIENCE } from '@/lib/data'

export function WorkExperienceSection() {
  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  const TRANSITION_SECTION = { duration: 0.3 }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
      <div className="flex flex-col space-y-2">
        {WORK_EXPERIENCE.map((job) => (
          <div
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            rel="noopener noreferrer"
            key={job.id}
          >
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal dark:text-zinc-100">
                    {job.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {job.start} - {job.end}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
