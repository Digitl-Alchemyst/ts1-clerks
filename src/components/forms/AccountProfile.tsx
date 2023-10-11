'use client'

import { useForm } from 'react-hook-form';
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
import { Input } from '@/c/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserValidation } from '@/lib/validations/user';
import * as z from 'zod';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { Textarea } from '../ui/textarea';

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  }
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || '',
      name: user?.name || '',
      username: user?.username || '',
      bio: user?.bio || '',
    },
  });

  const handleImage = (e: ChangeEvent, fieldChange: (value: string) => void ) => {
    e.preventDefault();
  }

  function onSubmit(values: z.infer<typeof UserValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col justify-start gap-x-6 gap-y-8'
      >
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (
            <FormItem className='flex items-center gap-4'>
              <FormLabel className='!important flex h-24 w-24 max-w-xl items-center justify-center rounded-full bg-slate-200 text-slate-700'>
                {field.value ? (
                  <Image
                    src={field.value}
                    alt='profile photo'
                    width={96}
                    height={96}
                    priority
                    className='rounded-full object-contain'
                  />
                ) : (
                  <Image
                    src='/profile.svg'
                    alt='profile photo'
                    width={24}
                    height={24}
                    className='max-w-xl bg-slate-200 object-contain text-slate-700'
                  />
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                <Input
                  type='file'
                  accept='image/*'
                  placeholder='Upload A Photo'
                  className='ml-6 max-w-xl bg-slate-200 text-slate-700'
                  onChange={(e) => handleImage(e, field.onChange)}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-4'>
              <FormLabel className='text-lg font-semibold text-slate-300'>
                Name:
              </FormLabel>
              <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                <Input
                  type='text'
                  placeholder='Enter your name'
                  className='!important border-dark-4 ml-16 max-w-xl border bg-slate-200 text-slate-700 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-4'>
              <FormLabel className='text-lg font-semibold text-slate-300'>
                Username:
              </FormLabel>
              <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                <Input
                  type='text'
                  placeholder='Enter your username'
                  className='!important border-dark-4 ml-7 max-w-xl border bg-slate-200 text-slate-700 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem className='flex w-full items-center gap-4'>
              <FormLabel className='text-lg font-semibold text-slate-300'>
                Bio:
              </FormLabel>
              <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                <Textarea
                  rows={10}
                  placeholder='Enter a short bio'
                  className='!important border-dark-4 ml-22 max-w-xl border bg-slate-200 text-slate-700 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' className=' bg-slate-200 hover:bg-slate-400 shadow-md shadow-slate-500 hover:text-slate-200 text-slate-700 mx-auto px-5 font-bold text-lg py-2 flex items-center justify-center'>Submit</Button>
      </form>
    </Form>
  );
}

export default AccountProfile