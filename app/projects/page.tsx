'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { PROJECTS } from '@/app/projects'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

export default function ProjectsIndex() {
  const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }
  const VARIANTS_ITEM = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {PROJECTS.map((project) => (
        <motion.div
          key={project.id}
          variants={VARIANTS_ITEM}
          className="space-y-2 rounded-2xl"
        >
          <MorphingDialog
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          >
            <MorphingDialogTrigger>
              <Image
                src={project.image ?? '/placeholder.png'}
                alt={project.name}
                width={1280}
                height={720}
                className="aspect-[16/9] w-full cursor-zoom-in rounded-xl object-contain"
              />
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative aspect-[16/9] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                <Image
                  src={project.image ?? '/placeholder.png'}
                  alt={project.name}
                  width={1280}
                  height={720}
                  className="mx-auto aspect-[16/9] h-[50vh] w-auto max-w-full rounded-xl object-contain md:h-[70vh]"
                />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
          <div className="px-1">
            <Link
              className="group relative inline-block font-[500] text-zinc-900 dark:text-zinc-50"
              href={`/projects/${project.id}`}
            >
              {project.name}
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
            </Link>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {project.description.length > 50
                ? project.description.slice(0, 50) + '…'
                : project.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
