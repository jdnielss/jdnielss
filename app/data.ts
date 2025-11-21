type Project = {
  name: string
  description: string
  link: string
  video: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Full Stack Software Engineer — JEC Indonesia',
    description:
      'JEC is a trusted eye hospital in Indonesia, offering advanced LASIK, cataract, retina, and refractive surgery services using cutting-edge technology. I also design the system architecture that supports their operations and patient experience, including SEO and GEO optimization to strengthen their digital visibility and reach.',
    link: 'https://jec.co.id',
    video: 'https://jec.co.id/assets/img/jec-logo.png',
    id: 'project-jec',
  },
  {
    name: 'Technical Leader — DevOps, Fundtastic Indonesia',
    description:
      'Fundtastic Indonesia is a fintech startup that provides investment and financial management solutions. Led the DevOps team, implemented CI/CD pipelines, and managed cloud infrastructure to optimize deployment processes.',
    link: '-',
    video: '-',
    id: 'project-fundtastic',
  },
  {
    name: 'Software Engineer — Airdrop Finder',
    description:
      'Airdrop Finder is a blockchain-based platform that helps users discover and participate in cryptocurrency airdrops. The company profile application was revised and the website performance was optimized to handle 3,000 concurrent users, reducing downtime by 80% in 10 minutes.',
    link: 'https://airdropfinder.com',
    video: '-',
    id: 'project-airdrop-finder',
  },
  {
    name: 'Software Engineer — Inspirasi Satu',
    description:
      'Inspirasi Satu is a technology consulting firm that specializes in digital transformation. Developed the company profile and the core business website, ensuring a professional online presence to showcase services and expertise.',
    link: 'https://inspirasisatu.com',
    video: '-',
    id: 'project-inspirasi-satu',
  },
  {
    name: 'Software Engineer — Madju Computeindo',
    description:
      'Madju Computeindo is an IT solutions provider offering enterprise software and cloud computing services. Developed a small ERP system that enables businesses to generate invoices for tax purposes and manage financial records efficiently.',
    link: '-',
    video: '-',
    id: 'project-madju-computeindo',
  },
  {
    name: 'Software Engineer — Zoan.co.id',
    description:
      'Zoan.co.id is an e-Commerce and logistics solutions company. Revamped the company profile website, enhancing its design, performance, and user experience to better showcase the company’s services.',
    link: 'https://zoan.co.id',
    video: '-',
    id: 'project-zoan',
  },
  {
    name: 'Software Engineer — BTPN',
    description:
      'BTPN (Bank Tabungan Pensiunan Nasional) is a leading digital banking provider in Indonesia. Developed AJO (Aplikasi Jaminan Online), a system designed to streamline and digitize the collateral management process, improving efficiency and accessibility.',
    link: '-',
    video: '-',
    id: 'project-btpn',
  },
  {
    name: 'Software Engineer — Bank Jateng',
    description:
      'Bank Jateng is a regional bank that provides financial services in Central Java. Led the re-design of the company profile website and the back-office system, improving usability, performance, and operational efficiency.',
    link: 'https://bankjateng.co.id',
    video: '-',
    id: 'project-bank-jateng',
  },
  {
    name: 'Technical Writer — Pegadaian',
    description:
      'Pegadaian is a state-owned financial institution specializing in pawnshop and microfinance services. Created technical documentation, user manuals, and API references for internal and customer-facing applications.',
    link: '-',
    video: '-',
    id: 'project-pegadaian',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Denovamind',
    title: 'Co-Founder And CISO',
    start: 'Sep - 2025',
    end: 'Present',
    link: '-',
    id: 'work1',
  },
  {
    company: 'Confidential Career',
    title: 'Platform Engineer',
    start: 'Aug 2025',
    end: 'Present',
    link: 'https://enigmacamp.com',
    id: 'work5',
  },
  {
    company: 'Enigmacamp',
    title: 'DevOps Engineer',
    start: 'Oct - 2023',
    end: 'Present',
    link: 'https://enigmacamp.com',
    id: 'work2',
  },
  {
    company: 'Enigmacamp',
    title: 'Fullstack Software Engineer',
    start: 'Apr - 2020',
    end: ' Oct 2023',
    link: 'https://enigmacamp.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: 'Exploring the Intersection of Design, AI, and Design Engineering',
  //   description: 'How AI is changing the way we design',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-1',
  // },
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
