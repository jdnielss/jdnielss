'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { useState } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { PROJECTS } from '@/app/data'

function ProjectVideo({ src }: { src: string }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video src={src} autoPlay loop muted className="aspect-video w-full cursor-zoom-in rounded-xl" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video src={src} autoPlay loop muted className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]" />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})
  const displayedProjects = showAllProjects ? PROJECTS : PROJECTS.slice(0, 4)
  const truncate = (s: string, n: number) => (s.length > n ? s.slice(0, n) + '…' : s)

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
              <ProjectVideo src={project.video} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={project.link}
                target="_blank"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
              </a>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {expandedProjects[project.id] ? project.description : truncate(project.description, 160)}
              </p>
              {project.description.length > 160 && (
                <button
                  type="button"
                  className="w-fit rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => {
                    setExpandedProjects((prev) => ({
                      ...prev,
                      [project.id]: !prev[project.id],
                    }))
                  }}
                >
                  {expandedProjects[project.id] ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {PROJECTS.length > 4 && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            onClick={() => setShowAllProjects((v) => !v)}
          >
            {showAllProjects ? 'Show less' : 'Show more'}
          </button>
        </div>
      )}
    </motion.section>
  )
}

