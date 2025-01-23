
import Hero from './components/HeroSection';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <html lang="en">
      <head>
        {/* Import Bootstrap styles and scripts */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Aro and Sword</title>
      </head>
      <body>
        {isHomePage && <Hero />}
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
