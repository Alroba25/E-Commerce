import AboutPage from "../components/Pages/AboutPage";
import HomePage from "../components/Pages/HomePage";
import ProductsPage from "../components/Pages/ProductsPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ApplicationLayout from "./ApplicationLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ApplicationLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </>,
  ),
);

export default router;
