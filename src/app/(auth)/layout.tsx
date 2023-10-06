/* eslint-disable react/function-component-definition */
import '@/s/globals.css'
import { Inter } from 'next/font/google';
import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Town Square',
    description: 'A Next.js Twitter/X/Threads clone.',
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout ({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-slate-900`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}