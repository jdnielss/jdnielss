'use client'
import { motion } from 'motion/react'
import { IntroSection } from '@/components/sections/intro-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { WorkExperienceSection } from '@/components/sections/work-experience-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ConnectSection } from '@/components/sections/connect-section'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <IntroSection />
      <ProjectsSection />
      <WorkExperienceSection />
      <BlogSection />
      <ConnectSection />
    </motion.main>
  )
}
