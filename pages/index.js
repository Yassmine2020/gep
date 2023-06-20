import Button from '@/components/Button';
import { useState } from 'react';

const sidebarButtons = [
  { text: 'home1', home: 1 },
  { text: 'home2', home: 2 },
];

export default function HomeIndex() {
  const [homeIndex, setHomeIndex] = useState(0);

  function handleOnClick(homeName) {
    setHomeIndex(homeName);
  }

  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="bg-primary-200 min-h-screen w-60 flex flex-col">
        <div className="px-3 pt-3 pb-2 space-y-2 ">
          {sidebarButtons.map((buttonData, index) => (
            <Button
              key={index}
              title={buttonData.text}
              onClick={() => handleOnClick(buttonData.home)}
            />
          ))}
        </div>
      </div>
      {/* <SideBar /> */}


      {homeIndex !== 0 ? (
        <div>List of Devices from House H{homeIndex}</div>
      ) : (
        <div>Welcome to ...</div>
      )}
    </div>
  );
}
