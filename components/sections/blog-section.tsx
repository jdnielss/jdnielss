'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { BLOG_POSTS } from '@/lib/blog'

export function BlogSection() {
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
      <div className="flex flex-col space-y-2">
        {displayedBlogPosts.map((post) => (
          <div
            key={post.uid}
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
          >
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="flex flex-col space-y-1">
                <Link className="block rounded-xl" href={`/blogs/${post.uid}`}>
                  <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {truncate(post.description, 50)}
                </p>
              </div>
            </div>
          </div>
        ))}
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
