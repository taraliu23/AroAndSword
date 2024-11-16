// app/layout.js
import Navbar from './components/Navbar';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      <body>
        {/* Navbar or other persistent components */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
