import './globals.css';

export const metadata = {
  title: 'Minmini - Tamil Baby Names',
  description: 'Find the Perfect Tamil Baby Name with Minmini',
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  openGraph: {
    title: 'Minmini - Tamil Baby Names',
    description: 'Find the Perfect Tamil Baby Name with Minmini',
    url: 'https://minminii.app',
    siteName: 'Minmini',
    images: [
      {
        url: 'https://minminii.app/assets/images/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Minmini - Tamil Baby Names',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minmini - Tamil Baby Names',
    description: 'Find the Perfect Tamil Baby Name with Minmini',
    images: ['https://minminii.app/assets/images/og_image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
