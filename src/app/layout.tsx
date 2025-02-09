import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}