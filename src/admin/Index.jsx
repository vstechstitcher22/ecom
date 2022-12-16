import AdminHeader from "./components/header/AdminHeader";
import "../../src/assets/scss/style.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";

const Index = () => {
  return (
    <div className="admin_home_dashboard">
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin/" element={<Index />} /> */}
      </Routes>
    </div>
  );
};

export default Index;
