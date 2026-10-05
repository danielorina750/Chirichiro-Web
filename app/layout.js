import './globals.css';

export const metadata = {
  title: 'Chirichiro D.E.B Comprehensive School',
  description: 'Learning, character, opportunity and community at Chirichiro D.E.B Comprehensive School, Kisii.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
