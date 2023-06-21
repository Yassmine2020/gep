import Button from '@/components/Button';
import Link from 'next/link';

const SidebarLinks = [
  { text: 'Home1', href: '/home1' },
  { text: 'Home2', href: '/home2' },
];

export default function SideBar() {

  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="bg-primary-300 min-h-screen w-60 flex flex-col">
        <div className=" pt-5 space-y-3 grid grid-rows place-content-center ">
          {SidebarLinks.map((linkData, index) => (
            <Link
              key={index}
              href={linkData.href}
              className="bg-primary-500 grid place-content-center text-xl hover:hover:bg-primary-600 text-white font-bold w-52 h-16 py-2 px-4 rounded-md ">
              {linkData.text}
            </Link>
          ))}
          {/* <Link
            href="/home1"
            className="text-primary-400 hover:text-primary-600 font-medium">
            Home 1
          </Link>
          <br />
          <Link
            href="/home2"
            className="text-primary-400 hover:text-primary-600 font-medium">
            Home 2
          </Link> */}
        </div>
      </div>
    </div>
  );
}
