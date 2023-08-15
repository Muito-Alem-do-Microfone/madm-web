import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

export default function ProtectedRoutes() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      redirect("/signin", { replace: true });
    }
  }, [user]);

  return user ? <Outlet /> : <Navigate to="/login" />;
}