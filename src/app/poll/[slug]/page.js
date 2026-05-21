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
  return [{ slug: '1aa5614eab32' }];
}

export default function Page({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  return <PollClient slug={slug} />;
}
