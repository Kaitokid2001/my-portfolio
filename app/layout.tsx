import StyledComponentsRegistry from "./src/lib/registry";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google'

import GlobalStyle from "./reset";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Huynh-Anh-Kiet-Front-End-Developer",
  description: "Xin chao toi ten Kiet",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={poppins.className}>
        <body>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
