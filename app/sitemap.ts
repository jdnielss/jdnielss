import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './data'

const BASE_URL = 'https://jdnielss.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}${post.link}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...entries, ...blogEntries]
}
