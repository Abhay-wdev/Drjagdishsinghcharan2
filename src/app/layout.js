import './globals.css';
import TopNavbar from '@/components/TopNavbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactIcons from '@/components/FloatingContactIcons';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
      <FloatingContactIcons/>
        <TopNavbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
