import Button from './Button';
import { useState } from 'react';
const function1 = () => {
  console.log('Button clicked!');
};

// const function1 = () => {
//   return 'List of device from house 1';
// };

const function2 = () => {
  console.log('Button clicked!');
};

const sidebarButtons = [
  { button: 'H1', onClick: function1 },
  { button: 'H2', onClick: function2 },
];

export default function SideBar() {
  return (
    <div className="bg-primary-200 min-h-screen w-60 flex flex-col">
      <div className="px-3 pt-3 pb-2 space-y-2 ">
        {sidebarButtons.map((buttonData, index) => (
          <Button
            key={index}
            title={buttonData.button}
            onClick={buttonData.onClick}
          />
        ))}
      </div>
    </div>
  );
}
