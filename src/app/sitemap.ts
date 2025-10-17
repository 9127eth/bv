import { MetadataRoute } from 'next'
import { siteMetadata } from '../lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()
  
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/services',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
  ].map((route) => ({
    url: `${siteMetadata.siteUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return routes
} 