import { websiteUrl } from '@src/defaults';

import '@styles/global.css';

export const metadata = {
  title: {
    template: ' %s - Example',
    default: 'A NextJs template project',
  },
  description: 'A NextJs template project.',
  metadataBase: new URL(websiteUrl),
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Bernardo Forcillo', url: 'https://bernardoforcillo.com' }],
  creator: 'Bernardo Forcillo',
  publisher: 'Bernardo Forcillo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
