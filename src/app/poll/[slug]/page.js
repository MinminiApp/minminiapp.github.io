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
  return [{ slug: 'fc71e3cccd33' }];
}

export async function generateMetadata() {
  return {
    title: 'Minmini Poll',
    description: 'Choose the perfect Tamil baby name in this Minmini poll. Share it on WhatsApp, Telegram, or any social network.',
    openGraph: {
      title: 'Minmini Poll',
      description: 'Choose the perfect Tamil baby name in this Minmini poll. Share it on WhatsApp, Telegram, or any social network.',
      type: 'website',
      images: [
        {
          url: '/assets/images/poll_screen.png',
          alt: 'Minmini poll screenshot',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/assets/images/poll_screen.png'],
    },
  };
}

export default function Page({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  return <PollClient slug={slug} />;
}
