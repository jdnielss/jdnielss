type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  image?: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How i solve the problem airdropfinder have',
    description:
      'Airdropfinder is a website that helps you find potential airdrops',
    link: 'how-i-solve-the-problem-airdropfinder-have',
    uid: 'blog-1',
    image: 'https://airdropfinder.com/assets/images/air_drop_about.svg',
  },
]
