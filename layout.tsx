import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Twofold — Two people. One little universe.', description: 'A private little world for two.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
