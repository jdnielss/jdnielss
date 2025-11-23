'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/lib/data'

export function BlogSection() {
  const [expandedBlogPosts, setExpandedBlogPosts] = useState<
    Record<string, boolean>
  >({})
  const truncate = (s: string, n: number) =>
    s.length > n ? s.slice(0, n) + '…' : s

  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  const TRANSITION_SECTION = { duration: 0.3 }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover={false}
          className="pointer-events-auto h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
        >
          {BLOG_POSTS.map((post) => (
            <div
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3"
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <Link className="rounded-xl" href={post.link}>
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {expandedBlogPosts[post.uid]
                    ? post.description
                    : truncate(post.description, 100)}
                </p>
                {post.description.length > 100 && (
                  <div>
                    <button
                      type="button"
                      aria-expanded={
                        expandedBlogPosts[post.uid] ? 'true' : 'false'
                      }
                      className="w-fit rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                      onClick={() => {
                        setExpandedBlogPosts((prev) => ({
                          ...prev,
                          [post.uid]: !prev[post.uid],
                        }))
                      }}
                    >
                      {expandedBlogPosts[post.uid] ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </motion.section>
  )
}
