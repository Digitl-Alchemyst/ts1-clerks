import React from 'react';

const Premium = () => {
  return (
    <div className='h-full rounded-lg border border-slate-400/40 p-2'>
      <div className='w-80'>
        <h1 className='text-xl font-bold text-slate-500'>
          Subscribe to Premium
        </h1>
        <p className='text-xs font-light'>
          Subscribe now to unlock premium features and recieve early rollout of
          the newest features to Town Square
        </p>
        <button className='text-md mt-2 rounded-full border border-tsl/60 bg-tsd px-3 py-1 text-center font-light transition duration-200 hover:border-tsl/40 hover:bg-opacity-60 hover:text-slate-400'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Premium;
