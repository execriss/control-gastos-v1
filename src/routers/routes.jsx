import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login, Home } from "../index";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
