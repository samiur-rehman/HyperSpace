import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'HyperSpace',
  description: 'Developer by Sami ur Rehman',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col text-black bg-black">
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
