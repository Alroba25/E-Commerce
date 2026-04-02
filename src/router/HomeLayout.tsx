import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "../Api/cookies";
import Navbar from "@/components/Navbar";
import StickyNav from "@/components/StickyNav";

const HomeLayout = () => {
  const isAuthenticated = getCookie("jwt");
  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <StickyNav />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default HomeLayout;
