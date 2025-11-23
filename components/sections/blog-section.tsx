'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { BLOG_POSTS } from '@/lib/blog'

export function BlogSection() {
  const [expandedBlogPosts, setExpandedBlogPosts] = useState<
    Record<string, boolean>
  >({})
  const displayedBlogPosts = BLOG_POSTS.slice(0, 4)
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
          className="pointer-events-auto h-full w-full rounded-lg bg-zinc-100 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900/80 dark:ring-zinc-800/50"
          transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
        >
          {displayedBlogPosts.map((post) => (
            <div
              key={post.uid}
              className="group -mx-3 rounded-xl px-3 py-3 ring-1 ring-zinc-200/50 transition-colors duration-200 ring-inset hover:bg-zinc-200/50 dark:ring-zinc-800/50 dark:hover:bg-zinc-800/50"
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <Link className="block rounded-xl" href={post.link}>
                  <h4 className="font-normal text-zinc-900 transition-colors group-hover:text-zinc-950 dark:text-zinc-100 dark:group-hover:text-zinc-50">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-zinc-600 transition-colors group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-300">
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
                      className="w-fit rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-black ring-1 ring-zinc-200/50 transition-colors duration-200 ring-inset hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-700"
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
        {BLOG_POSTS.length > 4 && (
          <div className="mt-4 flex justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              Show more
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  )
}
