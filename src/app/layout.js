import './globals.css';

export const metadata = {
  title: 'IMDb Clone',
  description: 'Htis is the IMDb Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
