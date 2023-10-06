import React from 'react';
import Image from 'next/image';
import { BsDot, BsShareFill, BsThreeDots } from 'react-icons/bs';
import {
  FaCommentDots,
  FaRegHeart,
  FaRegStar,
  FaRetweet,
} from 'react-icons/fa';
import { GiShatteredHeart } from 'react-icons/gi';
import { ImStatsBars } from 'react-icons/im';

const BulletinCard = () => {
  return (
    <div className='flex flex-col'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className='flex space-x-4 border-b-[0.5px]  border-slate-400/40 py-2'
        >
          <div>
            {/* Avatar Image  */}
            <div className='h-10 w-10 rounded-full'>
              <Image
                src='/DAS.png'
                alt='Profile Image'
                width={65}
                height={65}
              />
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center justify-between '>
              <div className='flex items-center space-x-2'>
                <div className='text-lg font-bold text-slate-200'>
                  Digital Alchemyst
                </div>
                <div className='text-sm font-light text-slate-400'>
                  @digitalalchemyst
                </div>
                <div className='font-bold text-slate-400 '>
                  <BsDot className='h-6 w-6' />
                </div>
                <div className='font-base text-sm text-slate-400'>
                  Oct 4th, 2023
                </div>
              </div>
              <BsThreeDots className='mr-2 h-5 text-slate-200 w-5'/>
            </div>
            <div className=' text-slate-200 text-md font-light'>
              🌍✨ Exciting News! Introducing Town Square, where meaningful
              conversations meet global impact. 🗣️ Join us in shaping a better
              world through open dialogue and community-driven change. Let your
              voice be the catalyst for positive transformation. Together, we
              can make a difference! 🌟 #TownSquare #ChangeMakers
              #EmpowerDialogue 🌐🤝
            </div>
            <div className='flex items-center justify-center rounded-xl border-[0.5px] border-slate-400/30 bg-slate-800 p-1'>
              <Image
                src='/ts1.jpg'
                alt='bulletin image'
                width={512}
                height={512}
                className='w-auto rounded-xl'
              />
            </div>

            {/* Action Icons */}
            <div className='flex items-center justify-between px-4 py-2 text-slate-400'>
              {/* Comment  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <FaCommentDots />
              </div>
              {/* Repost  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <FaRetweet />
              </div>
              {/* Like  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <FaRegHeart />
              </div>
              {/* Dislike  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <GiShatteredHeart />
              </div>
              {/* Star  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <FaRegStar />
              </div>
              {/* Share  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <BsShareFill />
              </div>
              {/* Stats  */}
              <div className='cursor-pointer text-slate-400 hover:text-tsl'>
                <ImStatsBars />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulletinCard;
