import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.cblok.lv',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.cblok.lv/ru',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]
}