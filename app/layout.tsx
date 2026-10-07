import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Greatest Onwa | Ford Parts & Cars in Lagos',
 description: 'Enquire about new and Tokunbo Ford parts and Ford vehicles at Greatest Onwa Merchandise Ltd., Lagos. Find parts by model, year or part number.',
 icons: { icon: '/favicon.svg' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
