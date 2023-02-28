import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { Outlet } from "react-router-dom";

type AuthUser = {
  username: string | null;
  token: string | null;
};

type AuthContextType = {
  auth: AuthUser;
  setAuth: Dispatch<SetStateAction<AuthUser>>;
};

const defaultAuth: AuthContextType = {
  auth: { username: null, token: null },
  setAuth: () => {
    return undefined;
  },
};

const AuthContext = createContext<AuthContextType>(defaultAuth);

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthUser>(defaultAuth.auth);
  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      <Outlet />
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
