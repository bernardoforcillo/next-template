import { websiteUrl } from '@src/defaults';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: websiteUrl,
      lastModified: new Date(),
    },
  ];
}
