import { BrowserRouter, Routes, Route } from "react-router";
import ListCards from "./components/ProductsCards";
import UserLogin from "./components/UserLogin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListCards />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

