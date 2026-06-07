import { use } from 'react';
import PollClient from './PollClient';

/**
 * Required for static export with dynamic routes.
 * We return a placeholder slug 'voter' to allow the build to pass.
 * For any dynamic slug to work at runtime, you'll need to configure your
 * web server (like Nginx, Netlify, or Vercel) to serve this page
 * for all paths matching /poll/*.
 */
export function generateStaticParams() {
  return [{ slug: 'voter' }];
}

export const metadata = {
  title: 'Minmini Poll',
  description:
    'Vote for your favorite baby name and see live results instantly.',
  openGraph: {
    images: [
      {
        url: 'https://minminiapp.github.io/assets/images/poll_screen.png',
        alt: 'Minmini poll screenshot',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      'https://minminiapp.github.io/assets/images/poll_screen.png',
    ],
  },
};

export default function Page({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  return <PollClient slug={slug} />;
}
