import type { MetadataRoute } from 'next'
import { URL_SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/obras', '/sobre', '/contato'].map((caminho) => ({
    url: `${URL_SITE}${caminho}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: caminho === '' ? 1 : 0.8,
  }))
}
