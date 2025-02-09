// import Header from '@/components/Header';
// import React from 'react';
import './globals.css'
import Header from '../components/Header';

import { ReactNode } from 'react';


export default function RootLayout({ children, }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}