import Navbar from './Navbar';
import SideBar from './SideBar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="bg-slate-50 w-screen grid place-content-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
