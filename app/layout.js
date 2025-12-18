import './globals.css';

export const metadata = {
  title: 'TikTok Ideas MVP',
  description: 'Generador de ideas de TikTok para negocios en Perú',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
