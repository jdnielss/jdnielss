export type Project = {
  name: string
  description: string
  link: string
  image?: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Full Stack Software Engineer — JEC Indonesia',
    description:
      'JEC is a trusted eye hospital in Indonesia, offering advanced LASIK, cataract, retina, and refractive surgery services using cutting-edge technology. I also design the system architecture that supports their operations and patient experience, including SEO and GEO optimization to strengthen their digital visibility and reach.',
    link: '/projects/project-jec',
    image: '/assets/images/jec.png',
    id: 'project-jec',
  },
  {
    name: 'Technical Leader — DevOps, Fundtastic Indonesia',
    description:
      'Fundtastic Indonesia is a fintech startup that provides investment and financial management solutions. Led the DevOps team, implemented CI/CD pipelines, and managed cloud infrastructure to optimize deployment processes.',
    link: '/projects/project-fundtastic',
    image: '/assets/images/fundtastic.png',
    id: 'project-fundtastic',
  },
  {
    name: 'Software Engineer — Airdrop Finder',
    description:
      'Airdrop Finder is a blockchain-based platform that helps users discover and participate in cryptocurrency airdrops. The company profile application was revised and the website performance was optimized to handle 3,000 concurrent users, reducing downtime by 80% in 10 minutes.',
    link: '/projects/project-airdrop-finder',
    image: '/assets/images/airdropfinder.png',
    id: 'project-airdrop-finder',
  },
  {
    name: 'Software Engineer — Inspirasi Satu',
    description:
      'Inspirasi Satu is a technology consulting firm that specializes in digital transformation. Developed the company profile and the core business website, ensuring a professional online presence to showcase services and expertise.',
    link: '/projects/project-inspirasi-satu',
    image: '/assets/images/inspirasisatu.svg',
    id: 'project-inspirasi-satu',
  },
  {
    name: 'Software Engineer — Madju Computeindo',
    description:
      'Madju Computeindo is an IT solutions provider offering enterprise software and cloud computing services. Developed a small ERP system that enables businesses to generate invoices for tax purposes and manage financial records efficiently.',
    link: '/projects/project-madju-computeindo',
    id: 'project-madju-computeindo',
  },
  {
    name: 'Software Engineer — Zoan.co.id',
    description:
      'Zoan.co.id is an e-Commerce and logistics solutions company. Revamped the company profile website, enhancing its design, performance, and user experience to better showcase the company’s services.',
    link: '/projects/project-zoan',
    id: 'project-zoan',
  },
  {
    name: 'Software Engineer — BTPN',
    description:
      'BTPN (Bank Tabungan Pensiunan Nasional) is a leading digital banking provider in Indonesia. Developed AJO (Aplikasi Jaminan Online), a system designed to streamline and digitize the collateral management process, improving efficiency and accessibility.',
    link: '/projects/project-btpn',
    image: '/assets/images/btpn.png',
    id: 'project-btpn',
  },
  {
    name: 'Software Engineer — Bank Jateng',
    description:
      'Bank Jateng is a regional bank that provides financial services in Central Java. Led the re-design of the company profile website and the back-office system, improving usability, performance, and operational efficiency.',
    link: '/projects/project-bank-jateng',
    image: '/assets/images/bank-jateng.png',
    id: 'project-bank-jateng',
  },
  {
    name: 'Technical Writer — Pegadaian',
    description:
      'Pegadaian is a state-owned financial institution specializing in pawnshop and microfinance services. Created technical documentation, user manuals, and API references for internal and customer-facing applications.',
    link: '/projects/project-pegadaian',
    image: '/assets/images/pegadaian.png',
    id: 'project-pegadaian',
  },
]
