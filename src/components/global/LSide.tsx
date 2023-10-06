import React from 'react';
import Link from 'next/link';
import {
  FaCity,
  FaEnvelopeOpenText,
  FaClipboardList,
  FaBell,
  FaMoneyBill,
} from 'react-icons/fa';
import { MdPerson, MdBookmarks, MdPeople } from 'react-icons/md';
import { LiaSearchSolid } from 'react-icons/lia';
import { AiFillNotification } from 'react-icons/ai';
import { LuVote } from 'react-icons/lu';
import { BsShieldFillCheck, BsThreeDots } from 'react-icons/bs';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

const navItems = [
  {
    title: 'Home',
    icon: FaCity,
    link: '',
  },
  {
    title: 'Discover',
    icon: LiaSearchSolid,
    link: 'discover',
  },
  {
    title: 'Notifications',
    icon: FaBell,
    link: 'notifications',
  },
  {
    title: 'Messages',
    icon: FaEnvelopeOpenText,
    link: 'messages',
  },
  {
    title: 'Communities',
    icon: MdPeople,
    link: 'communities',
  },
  {
    title: 'Vote',
    icon: LuVote,
    link: 'vote',
  },
  {
    title: 'List',
    icon: FaClipboardList,
    link: 'list',
  },
  {
    title: 'Bookmarks',
    icon: MdBookmarks,
    link: 'bookmarks',
  },
  {
    title: 'Verified',
    icon: BsShieldFillCheck,
    link: 'verified',
  },
  {
    title: 'Monetize',
    icon: FaMoneyBill,
    link: 'monetize',
  },
  {
    title: 'Profile',
    icon: MdPerson,
    link: 'username',
  },
];

const LSide = () => {
  return (
    <section className='fixed mt-3 flex h-screen w-60 flex-col items-stretch justify-between'>
      <div className=''>
        <Link href='/'>
          <Image
            src='/Logo.png'
            alt='Town Square Logo'
            width={35}
            height={35}
            className='mb-2 ml-2'
          />
        </Link>
        {navItems.map((item) => (
          <Link
            className='flex items-center justify-start space-y-1'
            href={`/${item.link}`}
            key={item.title}
          >
            <div className='flex w-auto items-center justify-center gap-x-4 rounded-xl px-3 py-4 text-slate-300 transition duration-200 hover:bg-slate-800/50'>
              <div>
                <item.icon className='h-6 w-6' />
              </div>
              <div className='text-lg'>{item.title}</div>
            </div>
          </Link>
        ))}
        <button className='mt-10  rounded-full border border-tsl/60 bg-tsd px-4 py-3 text-center text-xl font-bold transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          <div className='flex items-center justify-center gap-x-3 font-medium'>
            <AiFillNotification className='h-7 w-7' /> Post Bulletin
          </div>
        </button>
      </div>
      <div className='mb-6 flex w-full items-center justify-center space-x-3 rounded-3xl border border-tsd/30 bg-tsd/20 px-4 py-2 text-center font-bold transition duration-300 hover:border-tsd/10 hover:bg-tsd/10 hover:text-slate-400'>
        {/* <div className='h-10 w-10 rounded-full'> */}
          <UserButton afterSignOutUrl='/' />
        {/* </div> */}
        <div className='flex flex-col items-center justify-center '>
          <div className='text-ellipsis text-sm font-light'>
            Digitl Alchemyst
          </div>
          <div className='text-ellipsis text-xs font-thin'>
            @DigitalAlchemyst
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
