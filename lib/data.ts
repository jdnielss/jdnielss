// Project type and data moved to app/projects.ts

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}
type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Denovamind',
    title: 'Co-Founder And CISO',
    start: 'Sep - 2025',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Confidential Career',
    title: 'Platform Engineer',
    start: 'Aug 2025',
    end: 'Present',
    id: 'work5',
  },
  {
    company: 'Enigmacamp',
    title: 'DevOps Engineer',
    start: 'Oct - 2023',
    end: 'Present',
    id: 'work2',
  },
  {
    company: 'Enigmacamp',
    title: 'Fullstack Software Engineer',
    start: 'Apr - 2020',
    end: ' Oct 2023',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jdnielss',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/jdnielss',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jdnielss',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/jdnielss',
  },
]

export const EMAIL = 'jdnielss@proton.me'
