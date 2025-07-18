import './globals.css';
import TopNavbar from '@/components/TopNavbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactIcons from '@/components/FloatingContactIcons';
import ReduxProvider from '@/store/provider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <ReduxProvider>
          <FloatingContactIcons />
          <TopNavbar />
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
