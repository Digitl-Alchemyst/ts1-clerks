import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';

async function Page() {
  const user = await currentUser();

  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    location: userInfo?.location || '',
    image: userInfo?.image || user.imageUrl,
  };
  return (
    <main className='mx-auto flex max-w-6xl flex-col justify-start px-10 py-12'>
      <div className='flex items-end space-x-4'>
        <Image src='/Logo.png' alt='Logo' width={40} height={40} />
        <h1 className='text-4xl text-slate-200'> Welcome to Town Square</h1>
      </div>
      <p className='mt-3 text-base text-slate-300'>
        Complete your profile now to continue to Town Square.
      </p>
      <section className='mt-9 bg-slate-800/70 px-6 py-8 border border-tsd/70 rounded-lg shadow-md shadow-tsl/40'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;
