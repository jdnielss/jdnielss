import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Personal blog posts and notes.',
  alternates: { canonical: '/blogs' },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="prose-global">{children}</main>
}
