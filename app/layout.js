import './globals.css';

export const metadata = {
  title: 'Agentic App',
  description: 'Next.js app deployed to Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
