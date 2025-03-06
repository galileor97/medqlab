import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });


interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: 'Patologi Anatomi Dashboard',
  description: 'Laboratory management system for pathology department',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-[#FCFCFD]">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-4 ">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}