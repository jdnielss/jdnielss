'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ProjectMediaDialog } from '@/components/ui/project-media-dialog'
import { BLOG_POSTS } from '@/lib/blog'

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
    <>
      <h1 className="text-2xl font-semibold text-black dark:text-white">
        Blogs
      </h1>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        {BLOG_POSTS.map((post) => (
          <motion.div
            key={post.uid}
            variants={VARIANTS_ITEM}
            className="space-y-2 rounded-2xl"
          >
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectMediaDialog
                src={post.image ?? '/placeholder.png'}
                alt={post.title}
                width={1280}
                height={720}
              />
            </div>
            <div className="px-1">
              <Link
                className="group relative inline-block font-[500] text-zinc-900 dark:text-zinc-50"
                href={`/blogs/${post.link}`}
              >
                {post.title}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
              </Link>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {post.description.length > 50
                  ? post.description.slice(0, 50) + '…'
                  : post.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
