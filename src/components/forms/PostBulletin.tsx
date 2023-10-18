/* eslint-disable react/function-component-definition */
'use client';
import Image from 'next/image';
import { AiFillNotification, AiOutlineSchedule } from 'react-icons/ai';
import { GoFileMedia } from 'react-icons/go';
import { CgPoll } from 'react-icons/cg';
import { RiEmojiStickerLine, RiFileGifFill } from 'react-icons/ri';
import { MdAddLocationAlt } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/c/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/c/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';



import { ChangeEvent, useState } from 'react';
import { Textarea } from '../ui/textarea';
import { isBase64Image } from '@/util/util';
import { useUploadThing } from '@/l/uploadthing';


// import { updateBulletin } from '@/util/actions/bulletin.action';
import { BulletinValidation } from '@/lib/validations/bulletin';

interface Props {
  bulletin: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    location: string;
    image: string;
  };
  btnTitle: string;
}



function PostBulletin( { userId }: { userId: string }) {
  

  // const [avatar, setAvatar] = useState<File[]>([]);
  // const { startUpload } = useUploadThing('media');
  
  const router = useRouter();
  const pathname = usePathname();
  
  const form = useForm({
    resolver: zodResolver(BulletinValidation),
    defaultValues: {
      bulletin: '',
      accountId: userId,
    },
  });

  const onSubmit = () => {
    
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col justify-start gap-x-6 gap-y-8'
        >
          <FormField
            control={form.control}
            name='bulletin'
            render={({ field }) => (
              <FormItem className='flex w-full items-center gap-4'>
                <FormLabel className='text-lg font-semibold text-slate-300'>
                  Content
                </FormLabel>
                <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                  <Textarea
                    rows={15}
                    placeholder='Enter your name'
                    className='!important border-dark-4 ml-16 max-w-xl border bg-slate-200 text-slate-700 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
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
    </>
  );
};


export default PostBulletin;
