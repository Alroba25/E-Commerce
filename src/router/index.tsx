import AboutPage from "../components/Pages/AboutPage";
import HomePage from "../components/Pages/HomePage";
import ProductsPage from "../components/Pages/ProductsPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ApplicationLayout from "./ApplicationLayout";
import Product from "@/components/Pages/Product";
import LoginPage from "@/components/Pages/Login";
import RegisterPage from "@/components/Pages/Register";
import HomeLayout from "./HomeLayout";
import CartPage from "@/components/Pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ApplicationLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route element={<HomeLayout />}>
          <Route path="products" element={<ProductsPage />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<CartPage/>}/>
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </>,
  ),
);

export default router;
