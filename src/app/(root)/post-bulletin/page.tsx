import PostBulletin from '@/c/forms/PostBulletin';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/u/actions/user.action';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboard) redirect('/onboarding');

  return (
    <div>
      <PostBulletin userId={userInfo._id} />
    </div>
  );
}

export default Page