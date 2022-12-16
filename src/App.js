import Products from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import ProductView from "./components/Productinfo/ProductView";
import { Provider } from "react-redux";
import store from "./store/store";
// import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import CheckOut from "./components/checkout/CheckOut";
import Index from "./admin/Index";
import Orders from "./admin/pages/orders/Orders";
import Dashboard from "./admin/pages/dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productview/:id" element={<ProductView />} />
        {/* <Route path="/cart" element={<Cart/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Provider>
  );
}

export default App;
