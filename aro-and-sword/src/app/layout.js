// app/layout.js
// import Navbar from './components/Header';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import './globals.css';
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/flatly/bootstrap.min.css"
//           rel="stylesheet"
//         />
//         <script
//           src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//           defer
//         ></script>
//         <link rel="icon" href="/favicon.ico" />
//         <title>Aro and Sword</title>
//       </head>
//       <body>
//         {/* Navbar or other persistent components */}
//         {/* <Navbar /> */}
//         <Header />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }


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
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <title>Aro and Sword</title>
      </head>
      <body className="d-flex flex-column min-vh-100">
        {/* Persistent Header */}
        <Header />

        {/* Hero Section for Home Page */}
        {isHomePage && <Hero />}

        {/* Main Content */}
        {/* <main className="flex-grow-1">
          {children}
        </main> */}
        <div className="flex-grow-1 main-content">
          {children}
        </div>
        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
