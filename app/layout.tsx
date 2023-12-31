import '@/styles/globals.css'

import {openSans} from "@/fonts";

import type { Metadata } from 'next'
import Image from "next/image";

import back from '@/public/back.png'

export const metadata: Metadata = {
  title: 'cloudwave | looter',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
      {children}
      <Image
          className={'absolute inset-0 bg-cover z-[-1]'}
          width={2560}
          src={back}
          alt={'background'}
          quality={100}
      />
      </body>
    </html>
  )
}
