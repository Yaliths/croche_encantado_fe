import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ListCards from "./components/ProductsCards";
import UserLogin from "./components/UserLogin";
import ProtectedRoute from "./components/protectedrouter";
import UserRegister from "./components/UserRegister";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ListCards />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
