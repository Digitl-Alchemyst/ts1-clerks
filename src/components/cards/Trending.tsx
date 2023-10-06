import Image from 'next/image';
import React from 'react';
import { BsDot } from 'react-icons/bs';

const Trending = () => {
  return (
    <div className='h-full space-y-3 rounded-lg border border-slate-400/40'>
      <h2 className='text-lg font-bold text-slate-300 py-1 px-2'>
        What&apos;s trending today?
      </h2>

      {/* Card Container */}
      <div className=''>
        {/* Live Event Card  */}
        <div className='p-2 flex items-center justify-between hover:bg-slate-800/80 transition duration-200 hover:cursor-pointer'>
          <div className=''>
            <div className='flex items-center justify-start'>
              <div className='text-slate-400'>Event</div>
              <div className='font-bold text-slate-400 '>
                <BsDot className='h-6 w-6' />
              </div>
              <div className='mr-2 rounded bg-tsl/60 px-2 py-1 text-sm font-semibold text-slate-300'>
                LIVE
              </div>
            </div>

            <div className='text-slate-200'>[SDC23] Official Keynote</div>
          </div>
          <div className=''>
            <Image
              src='/kZ1TfkLb.jfif'
              alt='Image'
              width={75}
              height={75}
              className='h-13 w-13 rounded-lg'
            />
          </div>
        </div>

        {/*  Trending Card  */}
        <div className='hover:bg-slate-800/80 transition duration-200 hover:cursor-pointer p-2'>
          <div>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='text-md text-slate-400'>Tabletop RPG</div>
                <div className='font-bold text-slate-400 '>
                  <BsDot className='h-6 w-6' />
                </div>
                <div className='text-md text-slate-400'>Trending</div>
              </div>
              <div>...</div>
            </div>
            <div className='text-slate-200 font-semibold text-xl'>Critical Role</div>
            <div className='text-sm text-slate-400'>3,123 Bulletins</div>
          </div>
        </div>
        {/*  Trending Card  */}
        <div className='hover:bg-slate-800/80 transition duration-200 hover:cursor-pointer p-2'>
          <div>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='text-md text-slate-400'>Finance</div>
                <div className='font-bold text-slate-400 '>
                  <BsDot className='h-6 w-6' />
                </div>
                <div className='text-md text-slate-400'>Trending</div>
              </div>
              <div>...</div>
            </div>
            <div className='text-slate-200 font-semibold text-xl'>#AMCNOTLEAVING</div>
            <div className='text-sm text-slate-400'>64.4k Bulletins</div>
          </div>
        </div>
        {/*  Trending Card  */}
        <div className='hover:bg-slate-800/80 transition duration-200 hover:cursor-pointer p-2'>
          <div>
            <div className='flex justify-between'>
              <div className='flex'>
                <div className='text-md text-slate-400'>Politics</div>
                <div className='font-bold text-slate-400 '>
                  <BsDot className='h-6 w-6' />
                </div>
                <div className='text-md text-slate-400'>Trending</div>
              </div>
              <div>...</div>
            </div>
            <div className='text-slate-200 font-semibold text-xl'>Rudy</div>
            <div className='text-sm text-slate-400'>143.4k Bulletins</div>
          </div>
        </div>

        <div className='text-tsl/60 hover:text-tsl hover:bg-slate-800/80 transition duration-200 font-semibold text-md p-2 hover:cursor-pointer'>Show More</div>
      </div>
    </div>
  );
};

export default Trending;
