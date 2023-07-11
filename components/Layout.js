import Navbar from './Navbar';
import SideBar from './SideBar';

export default function Layout(props) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
}
