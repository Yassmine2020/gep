import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="bg-gray-100 shadow w-full px-10 py-1 text-white flex justify-end items-center space-x-4">
      <Image
        src="/logo_um6p.png"
        alt="Picture of the author"
        width={90}
        height={60}
      />
      <Image
        src="/logo_iresen.svg"
        alt="Picture of the author"
        width={140}
        height={60}
      />
    </div>
  );
}
