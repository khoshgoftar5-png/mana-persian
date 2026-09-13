export default function RootLayout({ children}:{children:react.reactnode}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta httpEquiv="refresh" content="0; url=/fa/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
