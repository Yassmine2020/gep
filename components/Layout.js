import Navbar from './Navbar';
import SideBar from './SideBar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        {props.children}
      </div>
    </div>
  );
}
