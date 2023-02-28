import { Navigate } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";

const Root = () => {
  const { auth, setAuth } = useAuth();

  if (!auth.token) return <Navigate to="/login" />;

  return <Navigate to="/dashboard" />;
};

export default Root;
