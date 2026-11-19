export const metatdata={
  title:"My Next js website",
  description:"Learning next js"
};

export default function RootLayout({children})
{
  return(
    <html>
      <body>
        <header>
          <h1>My WebSite</h1>
        </header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <p>CopyRight 2026</p>
        </footer>
      </body>
    </html>
  )
}