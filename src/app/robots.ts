import { MetadataRoute } from 'next';
import { websiteUrl } from '@src/defaults';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: websiteUrl,
    sitemap: websiteUrl + '/sitemap.xml',
  };
}
