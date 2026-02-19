import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "../Api/cookies";

const HomeLayout = () => {
  const isAuthenticated = getCookie("jwt");
  return (
    <>
      {isAuthenticated ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default HomeLayout;
