import { Bell, Search, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#FCFCFD] border-b border-gray-200 h-16">
      <div className="px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-md font-inter font-semibold text-[#19212E]">Selasa, 15 Oktober 2024 07:09:00</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button type="button" className="text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </header>
  );
}