import FontLoader from './FontLoader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="fonts-loading">
      <head>
        <FontLoader />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 