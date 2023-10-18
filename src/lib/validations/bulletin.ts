/* eslint-disable import/prefer-default-export */
import * as z from 'zod';


export const BulletinValidation = z.object({
  //   profile_photo: z.string().url().min(1),
  bulletin: z.string().min(3, { message: ' Minimum 3 characters' }).max(420),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  //   profile_photo: z.string().url().min(1),
  bulletin: z.string().min(3, { message: ' Minimum 3 characters' }).max(420),
  accountId: z.string(),
});