import React from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import Premium from '../cards/Premium';
import Trending from '../cards/Trending';
import TownHall from '../cards/TownHall';

const RSide = () => {
  return (
    <section className='ml-4'>
      <div className='relative'>
        {/* Search Bar  */}

        <label
          htmlFor='searchBox'
          className='fixed top-0 z-10 flex flex-1 justify-between gap-4 bg-slate-900/80 py-2 backdrop-blur'
        >
          <input
            id='seachBox'
            type='text'
            placeholder='Search...'
            className='flex-grow rounded-full border-2 border-slate-700 bg-slate-800/80 px-5 py-2 text-slate-200 shadow-md focus:outline-none focus:ring-1 focus:ring-tsl'
          />
          <PiMagnifyingGlassBold className=' ml-4 hidden h-11 w-11 rotate-90 cursor-pointer rounded-full bg-slate-800 p-2 font-bold text-slate-500 md:inline-flex' />
        </label>

        <div className='z-0 mt-18 h-auto flex flex-col justify-between space-y-2 scrollbar-hide'>
          {/* Sections  */}
          <Premium />
          <Trending />
          <TownHall />


          {/* Footer  */}
          <p className='w-80 text-xs font-thin text-slate-300'>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads ©
            2023 Alchemy Labs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSide;
