import './globals.css'
import type { Metadata } from 'next'

const hostname = process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000';

export const metadata: Metadata = {
    title: 'jiskanulo',
    description: '無念',
    keywords: ['jiskanulo'],
    authors: [{ name: 'jiskanulo' }],
    openGraph: {
        title: 'jiskanulo',
        description: '無念',
        url: 'https://jiska.dev',
        siteName: 'jiskanulo',
        locale: 'ja_JP',
        type: 'website',
        images: { url: `${hostname}/og_image-fs8.png`, width: 1200, height: 630, alt: 'jiskanulo' },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
    twitter: {
        card: 'summary_large_image',
        title: 'jiskanulo',
        description: '無念',
        creator: '@jiskanulo',
        images: { url: `${hostname}/og_image-fs8.png`, width: 1200, height: 630, alt: 'jiskanulo' },
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
        <body>{children}</body>
        </html>
    )
}

