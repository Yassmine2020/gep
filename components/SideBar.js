// import Button from '@/components/Button';
import Link from 'next/link';

const SidebarLinks = ['Sunimplant', 'Tdart', 'Neopetra'];

export default function SideBar() {
  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="bg-primary-300 min-h-screen w-60 flex flex-col">
        <div className=" pt-5 space-y-3 grid grid-rows place-content-center ">
          {SidebarLinks.map((linkData, index) => (
            <Link
              key={index}
              href={`${linkData}`}
              className="bg-primary-500 grid place-content-center text-xl hover:hover:bg-primary-600 text-white font-bold w-52 h-16 py-2 px-4 rounded-md ">
              {linkData}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
