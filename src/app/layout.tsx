export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 