'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, UserActivation } from '@clerk/nextjs';
import { LSideLinks } from '@/const';
import { AiFillNotification } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { usePathname, useRouter } from 'next/navigation';
import { dark } from '@clerk/themes';

const LSide = () => {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <section className='fixed mt-3 flex h-screen w-60 flex-col items-stretch justify-between'>
      <div className=''>
        {/* Icon  */}
        <Link href='/'>
          <Image
            src='/Logo.png'
            alt='Town Square Logo'
            width={35}
            height={35}
            className='mb-2 ml-2'
          />
        </Link>
        {/* Nav Menu  */}
        {LSideLinks.map((item) => {
          // Link is Active
          const isActive =
            (pathname.includes(item.link) && item.link.length > 1) ||
            pathname === item.link;

          return (
            <Link
              className='relative flex items-center justify-start space-y-1'
              href={`/${item.link}`}
              key={item.title}
            >
              <div
                className={`flex w-auto items-center justify-center gap-x-4 rounded-xl px-3 py-4 text-slate-300 transition duration-200 hover:bg-slate-800/50 ${
                  isActive && 'bg-tsl/50'
                }`}
              >
                <div>
                  <item.icon className='h-6 w-6' />
                </div>
                <div className='text-lg'>{item.title}</div>
              </div>
            </Link>
          );
        })}

        {/* Post Bulletin Button  */}
        <button className='mt-10  rounded-full border border-tsl/60 bg-tsd px-4 py-3 text-center text-xl font-bold transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          <div className='flex items-center justify-center gap-x-3 font-medium'>
            <AiFillNotification className='h-7 w-7' /> Post Bulletin
          </div>
        </button>
      </div>

      {/* User Info  */}
      <div className='mb-6 flex w-full items-center justify-between space-x-3 rounded-3xl border border-tsd/30 bg-tsd/20 px-4 py-2 text-center font-bold transition duration-300 hover:border-tsd/10 hover:bg-tsd/10 hover:text-slate-400'>
        <UserButton afterSignOutUrl='/sign-in' appearance={{
          baseTheme: dark,
        }} />
        <div className='flex flex-col items-center justify-center '>
          <div className='text-ellipsis text-sm font-light'>
            Town Square
          </div>
          <div className='text-ellipsis text-xs font-thin'>
            @TownSquare
          </div>
        </div>
        <button>
          <BsThreeDots />
        </button>
      </div>
    </section>
  );
};

export default LSide;
