import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/pages/login/LoginForm";
import OrderPage from "../components/pages/order/OrderPage";
import ErrorPage from "../components/pages/error/ErrorPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
