import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
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
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
