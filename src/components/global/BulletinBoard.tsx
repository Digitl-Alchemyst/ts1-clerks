import React from 'react';
import Image from 'next/image';
import { AiFillNotification, AiOutlineSchedule } from 'react-icons/ai';
import BulletinCard from '@/c/cards/BulletinCard';
import { GoFileMedia } from 'react-icons/go';
import { CgPoll } from 'react-icons/cg';
// import { GrScheduleNew } from 'react-icons/gr';
import { RiEmojiStickerLine, RiFileGifFill } from 'react-icons/ri';
import { MdAddLocationAlt } from 'react-icons/md';

const BulletinBoard = () => {
  return (
    <main className='ml-[260px] flex h-full min-h-screen w-146 flex-col border-l-[0.5px] border-r-[0.5px] border-slate-400/40 px-3 '>
      <h1 className='sticky top-0 mr-2 w-full bg-slate-900/40 py-3 text-xl font-bold backdrop-blur'>
        Home
      </h1>
      {/* Feed  */}
      <div className='mt-2 flex items-center justify-between'>
        <div className=' flex h-full w-full flex-1 items-center  justify-center border-b-2 border-tsl/70 px-8 py-2 hover:bg-slate-950/80'>
          Global
        </div>
        <div className=' flex h-full w-full flex-1 items-center  justify-center px-8 py-2 hover:bg-slate-950/80'>
          Local
        </div>
        <div className=' flex h-full w-full flex-1 items-center  justify-center px-8 py-2 hover:bg-slate-950/80'>
          Trending
        </div>
        <div className=' flex h-full w-full flex-1 items-center  justify-center px-8 py-2 hover:bg-slate-950/80'>
          Following
        </div>
      </div>
      {/* Post Box  */}
      <div className='flex h-full items-stretch space-x-2 border-b-[0.5px] border-t-[0.5px] border-slate-400/40 px-4 py-2'>
        {/* Avatar  */}
        <div className='mt-2 h-10 w-10 flex-none rounded-full'>
          <Image src='/DAS.png' alt='Profile Image' width={65} height={65} />
        </div>
        {/* Input  */}
        <div className='flex h-full w-full flex-col'>
          <div className='border-b-[0.5px] border-slate-400/40'>
            <input
              type='text'
              placeholder='Share your thoughts with the community...'
              className='h-32 w-full  border-none bg-transparent p-4 text-xl outline-none placeholder:text-slate-400'
            />
          </div>
          {/* Icon Bar  */}
          <div className='my-1 flex w-full items-center justify-between'>
            <div className='flex flex-1 items-center justify-between px-4 py-2 text-slate-400'>
              {/* Media  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <GoFileMedia className='h-5 w-5' />
              </div>
              {/* Gif  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <RiFileGifFill className='h-5 w-5' />
              </div>
              {/* Emoji  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <RiEmojiStickerLine className='h-5 w-5' />
              </div>
              {/* Poll  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <CgPoll className='h-5 w-5' />
              </div>
              {/* Schedule  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <AiOutlineSchedule className='h-5 w-5' />
              </div>
              {/* Location  */}
              <div className='flex-1 cursor-pointer text-slate-400 hover:text-tsl'>
                <MdAddLocationAlt className='h-5 w-5' />
              </div>
            </div>
            {/* Post Button  */}
            <div>
              <button className='mt-2 w-full rounded-3xl border border-tsl/60 bg-tsd px-3 py-2 text-center transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
                <div className='flex items-center justify-center gap-x-3 font-medium'>
                  <AiFillNotification className='h-5 w-5' />
                  Post Bulletin
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* More Bulletins  */}

      <div className=' flex items-center justify-center border-b-[0.5px] border-slate-400/40 py-3 text-tsl hover:cursor-pointer'>
        Load # New Bulletins
      </div>
      {/* Bulletin Cards  */}
      <BulletinCard />
    </main>
  );
};

export default BulletinBoard;
