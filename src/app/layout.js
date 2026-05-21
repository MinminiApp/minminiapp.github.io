import './globals.css';

export const metadata = {
  title: 'Minmini - Tamil Baby Names',
  description: 'Find the Perfect Tamil Baby Name with Minmini',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
