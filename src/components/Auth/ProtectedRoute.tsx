import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../Api/cookies";

const ProtectedRoute = () => {
  const token = localStorage.getItem("jwt") || getCookie("jwt");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
