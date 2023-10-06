import Image from 'next/image';
import React from 'react';


const TownHall = () => {
  return (
    <div className='h-full space-y-2 rounded-lg border border-slate-400/40 p-2'>
      <h2 className='text-lg font-bold text-slate-300'>Town Hall Meetings</h2>

      {/* Active Town Hall Meetings  */}
      <div className='mb-6 flex w-80 items-center justify-between space-x-3 border-b-[0.5px] border-slate-400/40 text-center font-bold'>
        <div className='mb-2 flex items-center space-x-2'>
          <div className='h-13 w-13 rounded-full'>
            <Image
              src='/DAS.png'
              alt='Profile Image'
              width={100}
              height={100}
              className='w-full rounded-full border-4 border-tsl/60'
            />
          </div>
          <div className='flex flex-col items-start justify-start '>
            <div className='text-ellipsis text-sm'>Welcome to Town Square</div>
            <div className='text-ellipsis text-xs font-thin'>
              @DigitalAlchemyst
            </div>
          </div>
        </div>
        <button className='mt-2 rounded-full border border-tsl/60 bg-tsd px-2 py-1 text-center text-sm font-light transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          Join
        </button>
      </div>
      {/* Active Town Hall Meetings  */}
      <div className='mb-6 flex w-80 items-center justify-between space-x-3 border-b-[0.5px] border-slate-400/40 text-center font-bold'>
        <div className='mb-2 flex items-center space-x-2'>
          <div className='h-13 w-13 rounded-full'>
            <Image
              src='/untele.png'
              alt='Profile Image'
              width={100}
              height={100}
              className='w-full rounded-full border-4 border-tsl/60'
            />
          </div>
          <div className='flex flex-col items-start justify-start '>
            <div className='text-ellipsis text-sm'>State of US Politics</div>
            <div className='text-ellipsis text-xs font-thin'>
              @UntelevisedMedia
            </div>
          </div>
        </div>
        <button className='mt-2 rounded-full border border-tsl/60 bg-tsd px-2 py-1 text-center text-sm font-light transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          Join
        </button>
      </div>
      {/* Active Town Hall Meetings  */}
      <div className='mb-6 flex w-80 items-center justify-between space-x-3 border-b-[0.5px] border-slate-400/40 text-center font-bold'>
        <div className='mb-2 flex items-center space-x-2'>
          <div className='h-13 w-13 rounded-full'>
            <Image
              src='/wallstape.jpg'
              alt='Profile Image'
              width={100}
              height={100}
              className='w-full rounded-full border-4 border-tsl/60'
            />
          </div>
          <div className='flex flex-col items-start justify-start '>
            <div className='text-ellipsis text-sm'>US Markets are Failing</div>
            <div className='text-ellipsis text-xs font-thin'>
              @ApeOnWallSt
            </div>
          </div>
        </div>
        <button className='mt-2 rounded-full border border-tsl/60 bg-tsd px-2 py-1 text-center text-sm font-light transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          Join
        </button>
      </div>
    </div>
  );
}

export default TownHall