import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoutes() {
  const { authUser } = useAuth();
console.log(authUser)
  useEffect(() => {
    if (!authUser) {
      redirect("/login", { replace: true });
    }
  }, [authUser]);

  return authUser ? <Outlet /> : <Navigate to="/login" />;
}