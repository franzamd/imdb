import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'IMDb Clone',
  description: 'Htis is the IMDb Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
