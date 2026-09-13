Export default function RootLayout({ children }: { children: React.ReactNode }) {
  Return (
    <html lang="fa" dir="rtl">
      <head>
        <meta httpEquiv="refresh" content="0; url=/fa/" />
      </head>
      <body style={{ margin: 0, background: "#17121F", color: "#EFE6D3", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
