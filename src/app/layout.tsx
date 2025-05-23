'use client';

import { useEffect } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.documentElement.classList.add('fonts-loading');
    if (document.fonts.status === 'loaded') {
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    } else {
      document.fonts.ready.then(() => {
        document.documentElement.classList.remove('fonts-loading');
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);

  return (
    <html lang="en" className="fonts-loading">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
} 