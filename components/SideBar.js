import Link from 'next/link';
import Image from 'next/image';

const SidebarLinks = ['sunimplant', 'tdart', 'neopetra'];

export default function SideBar() {
  return (
    <div className="flex">
      <div className="bg-gray-800 min-h-screen w-60 flex flex-col">
        <div className="flex py-4 px-6 items-center">
          <Image
            src="/logo_gep.png"
            alt="Picture of the author"
            width={100}
            height={50}
          />
        </div>
        <div className="space-y-3 grid grid-rows place-content-center ">
          {SidebarLinks.map((linkData, index) => (
            <Link
              key={index}
              href={`${linkData}`}
              className="flex items-center font-medium transition ease-in-out duration-500 capitalize text-white hover:bg-primary-400 hover:text-gray-700 w-52 py-2 px-4 rounded-md ">
              {linkData}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
