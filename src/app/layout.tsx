import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Side_bar} from "@/components/side_bar/side_bar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <Side_bar />
            <main>
                {children}
            </main>
        </body>
        </html>
    )
}
