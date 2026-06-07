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

export async function generateMetadata({ params }) {
  // Get the base URL from environment or default to localhost
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const { slug } = params;
  
  // Create absolute URL for OG image
  const imageUrl = `${baseUrl}/assets/images/poll_screen.png`;
  
  return {
    title: 'Minmini Poll',
    description: 'Choose the perfect Tamil baby name in this Minmini poll. Share it on WhatsApp, Telegram, or any social network.',
    openGraph: {
      title: 'Minmini Poll',
      description: 'Choose the perfect Tamil baby name in this Minmini poll. Share it on WhatsApp, Telegram, or any social network.',
      type: 'website',
      url: `${baseUrl}/poll/${slug}/`,
      images: [
        {
          url: imageUrl,
          alt: 'Minmini poll screenshot',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [imageUrl],
    },
  };
}

export default function Page({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  return <PollClient slug={slug} />;
}
