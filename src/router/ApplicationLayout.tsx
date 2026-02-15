import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import StickyNav from "../components/StickyNav";

const ApplicationLayout = () => {
  return (
    <>
      <Navbar />
      <StickyNav />
      <Outlet />
    </>
  );
};

export default ApplicationLayout;
