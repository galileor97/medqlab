'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './icons/Logo';
import DocumentsIcon from './icons/sidebar/Documents';
import TestTubeIcon from './icons/sidebar/TestTube';
import ScissorsIcon from './icons/sidebar/Scissors';
import MikroskopIcon from './icons/sidebar/Mikroskop';
import DnaIcon from './icons/sidebar/Dna';
import VirusIcon from './icons/sidebar/Virus';
import DropperIcon from './icons/sidebar/Dropper';
import SyringeIcon from './icons/sidebar/Syringe';
import NotebookIcon from './icons/sidebar/Notebook';
import PlainIcon from './icons/sidebar/Plain';

const navigation = [
  { name: 'Monitor Dashboard', href: '/dashboard', icon: DocumentsIcon },
  { name: 'Terima Spesimen', href: '/users', icon: TestTubeIcon },
  { name: 'Kamar Potong', href: '/products', icon: ScissorsIcon },
  { name: 'Lab Histopatologi', href: '/analytics', icon: MikroskopIcon },
  { name: 'Lab Sitopatologi', href: '/settings', icon: DnaIcon },
  { name: 'Lab Histokimia', href: '/settings', icon: VirusIcon },
  { name: 'Lab Imunohistokimia', href: '/settings', icon: DropperIcon },
  { name: 'Lab Patologi Molekuler', href: '/settings', icon: SyringeIcon },
  { name: 'Input Hasil', href: '/settings', icon: NotebookIcon },
  { name: 'Cetak & Kirim Hasil', href: '/settings', icon: PlainIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>

      <div 
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-20 lg:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`sticky lg:static inset-y-0 left-0 z-30 w-[266px] justify-center items-center transform bg-white  border-r border-[#D7DDE5]
          transition-transform duration-200 ease-in-out lg:translate-x-0 h-full
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col overflow-y-auto py-6">
          <div className="flex items-center justify-between px-4 py-3 lg:hidden">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center my-2.5">
            <Logo />
            <span className="text-lg font-semibold text-[#0078FF]">PATOLOGI ANATOMI</span>
          </div>
          <nav className="flex-1 space-y-3 px-2 py-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group font-inter flex items-center h-[48px] px-3 text-sm font-semibold rounded-md 
                    ${item.href === currentPath ? 'text-[#0078FF] bg-[#ECF5FF]' : 'text-[#626F84] hover:bg-[#ECF5FF]'} 
                    hover:bg-[#ECF5FF] transition-colors duration-150`}
                >
                  <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 lg:hidden z-20 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-colors duration-150"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}