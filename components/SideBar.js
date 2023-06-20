import Button from '@/components/Button';
import Link from 'next/link';

export default function HomeIndex() {
  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="bg-primary-200 min-h-screen w-60 flex flex-col">
        <div className="px-3 pt-3 pb-2 space-y-2 ">
          <Link
            href="/home1"
            className="text-primary-400 hover:text-primary-600 font-medium">
            Home 1
          </Link>
          <br />
          <Link
            href="/home2"
            className="text-primary-400 hover:text-primary-600 font-medium">
            Home 2
          </Link>
        </div>
      </div>
    </div>
  );
}
