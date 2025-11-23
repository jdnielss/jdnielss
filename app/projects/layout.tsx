import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects and case studies.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="prose-global">{children}</main>
}
