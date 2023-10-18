/* eslint-disable import/prefer-default-export */
'use server';

import User from '@/lib/models/user.model';
import { connectToDB } from '../mongoose';
import { revalidatePath } from 'next/cache';

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  location: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  username,
  name,
  bio,
  location,
  image,
  path,
}: Params): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        location,
        image,
        onboarded: true,
      },
      { upsert: true },
    );

    if (path === 'profile/edit') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to Create/Update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User
    .findOne({ id:userId })
    // .populate({
    //   path: 'communities',
    //   model: Community
    // })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`)
  }
}