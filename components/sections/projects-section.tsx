'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '@/app/projects'

export function ProjectsSection() {
  const displayedProjects = PROJECTS.slice(0, 4)
  const truncate = (s: string, n: number) =>
    s.length > n ? s.slice(0, n) + '…' : s

  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  const TRANSITION_SECTION = { duration: 0.3 }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {displayedProjects.map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <Image
                src={project.image ?? '/placeholder.png'}
                alt={project.name}
                width={1280}
                height={720}
                className="aspect-video w-full rounded-xl object-cover"
              />
            </div>
            <div className="px-1">
              <Link
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={`/projects/${project.id}`}
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
              </Link>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {truncate(project.description, 50)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {PROJECTS.length > 4 && (
        <div className="mt-4 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            Show more
          </Link>
        </div>
      )}
    </motion.section>
  )
}
