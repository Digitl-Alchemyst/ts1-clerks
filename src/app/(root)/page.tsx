import LSide from '@/c/global/LSide';
import RSide from '@/c/global/RSide';
import BulletinBoard from '@/c/global/BulletinBoard';
// import { UserButton } from '@clerk/nextjs';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='relative flex h-full w-full max-w-screen-xl text-slate-200'>
        {/* <UserButton afterSignOutUrl='/' /> */}
        <LSide />
        <BulletinBoard />
        <RSide />
      </div>
    </div>
  );
};

export default Home;
