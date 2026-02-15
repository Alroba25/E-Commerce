import AboutPage from "@/components/Pages/AboutPage";
import HomePage from "@/components/Pages/HomePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </>,
  ),
);

export default router;
