/* eslint-disable import/prefer-default-export */
import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().min(1),
    name: z.string().min(5).max(30),
    username: z.string().min(3).max(18),
    bio: z.string().min(25).max(555)


})