import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "../Api/cookies";
<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import StickyNav from "@/components/StickyNav";
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c

const HomeLayout = () => {
  const isAuthenticated = getCookie("jwt");
  return (
    <>
      {isAuthenticated ? (
        <>
<<<<<<< HEAD
          <Navbar />
          <StickyNav />
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default HomeLayout;
