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

export default function Content() {
  return <div>Enter</div>;
}
