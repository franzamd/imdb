import Header from './components/Header';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'IMDb Clone',
  description: 'Htis is the IMDb Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
