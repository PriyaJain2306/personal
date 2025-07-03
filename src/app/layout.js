// app/layout.js or app/layout.tsx
import Navbar from './components/Navbar.jsx';
import './globals.css';
export default function Layout({ children }) {
  return (
    <><html>
      <body>
        <Navbar />
      <main>{children}</main>
      </body>
    </html>
      
    </>
  );
}
