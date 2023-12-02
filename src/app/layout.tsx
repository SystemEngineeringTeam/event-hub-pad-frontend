import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import React from 'react';

import styles from './layout.module.scss';
import { Header } from './ui-domain/Header';
import { SideMenu } from './ui-domain/SideMenu';

import type { Metadata } from 'next';

import './styles/svg.scss';
import './styles/size.scss';
import './styles/color.scss';
import './styles/global.scss';
import './styles/variables.scss';
import './styles/typography.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Event hub pad',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ChakraProvider cssVarsRoot="body">
          <div className={styles.headerContainer}>
            <Header />
          </div>
          <div className={styles.sideMenuContainer}>
            <SideMenu />
          </div>
          <main className={styles.childrenContainer}>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  );
}
