import React from 'react';
import BulletinCard from '@/c/cards/BulletinCard';
import PostBulletin from '@/components/forms/PostBulletin';


const BulletinBoard = () => {
  return (
    <main className='w-146 ml-[260px] flex h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-slate-400/40 px-3 '>
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
      {/* Write Bulletin  */}
      <PostBulletin />
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
