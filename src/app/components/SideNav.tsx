import React from 'react';
import { HomeIcon, Search, Library } from 'lucide-react';

const SideNav = () => {
  return (
    <div>
      <nav className='space-y-5 mt-10'>
        <a href="" className='flex items-center gap-4 text-xs font-semibold text-zinc-200'>
          <HomeIcon />
          Home
        </a>
        <a href="" className='flex items-center gap-4 text-xs font-semibold text-zinc-200'>
          <Search />
          Search
        </a>
        <a href="" className='flex items-center gap-4 text-xs font-semibold text-zinc-200'>
          <Library />
          Your Library
        </a>
        <nav className="mt-6 pt-10 border-t border-zinc-700 flex flex-col gap-3">
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PABLOS CAVADO</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock n Roll</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>R&B</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sticky Fingers</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eg0z Bipolar</a>
        </nav>
      </nav>
    </div>
  );
};

export default SideNav;
