import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Root from "./components/Root";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const App = () => {
  const { auth, setAuth } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AuthProvider />}>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
