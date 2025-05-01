import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth, Configuration } from "../index";

export function MyRoutes() {
  const { user } = UserAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Configuration />} />
      </Route>
    </Routes>
  );
}
