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
  const baseUrl = 'https://minminiapp.github.io';
  const { slug } = params;
  
  // Use dynamic OG image generation service (works with all slugs)
  // The og-image service will generate an image based on the URL parameters
  const imageUrl = `https://og-image.vercel.app/Minmini%20Poll%20%7C%20${encodeURIComponent(slug)}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fminminiapp.github.io%2Fassets%2Fimages%2Fpoll_screen.png`;
  
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
