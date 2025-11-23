import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { highlight } from 'sugar-high'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="not-prose mx-auto max-w-4xl">
          <div className="relative aspect-[16/9]">
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 h-full w-full object-contain"
            />
            <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-black/30 px-2 py-0.5 text-[11px] text-white">
              {caption}
            </figcaption>
          </div>
        </figure>
      )
    },
    BlogCard: ({
      title,
      description,
      href,
      src,
      alt,
    }: {
      title: string
      description: string
      href: string
      src: string
      alt: string
    }) => {
      return (
        <article className="not-prose rounded-2xl bg-zinc-50 p-2 ring-1 ring-zinc-200/50 transition-colors ring-inset hover:bg-zinc-100 dark:bg-zinc-950 dark:ring-zinc-800/50 dark:hover:bg-zinc-900">
          <Link href={href} className="flex items-center gap-4" target="_blank">
            <div className="relative aspect-[4/3] w-28 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src={src}
                alt={alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          </Link>
        </article>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
