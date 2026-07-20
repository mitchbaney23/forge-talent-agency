import type { MetadataRoute } from 'next'
import { signedCreators } from '@/data/creators'

const BASE_URL = 'https://forgetalentagency.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['', '/about', '/creators', '/contact'].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    })
  )

  const creatorRoutes: MetadataRoute.Sitemap = signedCreators.map((creator) => ({
    url: `${BASE_URL}/creators/${creator.slug}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticRoutes, ...creatorRoutes]
}
