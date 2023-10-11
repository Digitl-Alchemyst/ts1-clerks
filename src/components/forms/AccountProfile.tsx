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
      profile_photo: '',
      name: '',
      username: '',
      bio: '',
    },
  });

  const handleImage = (e) => {
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
              <FormLabel className='!important flex h-24 w-24 items-center justify-center rounded-full bg-slate-800/60'>
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
                    className='object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className='flex-1 text-base font-semibold text-slate-300'>
                <Input 
                  type='file'
                  accept='image/*'
                  placeholder='Upload A Photo'
                  className=''
                  onChange={(e) => handleImage(e, field.onChange)} 
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

export default AccountProfile