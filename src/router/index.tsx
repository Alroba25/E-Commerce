import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import { Center, Spinner } from "@chakra-ui/react";

// Lazy load layout components
const LazyApplicationLayout = lazy(() => import("./ApplicationLayout"));
const LazyHomeLayout = lazy(() => import("./HomeLayout"));
const LazyAdminLayout = lazy(() => import("./AdminLayout"));

// Lazy load pages
const HomePage = lazy(() => import("../components/Pages/HomePage"));
const AboutPage = lazy(() => import("../components/Pages/AboutPage"));
const ProductsPage = lazy(() => import("../components/Pages/ProductsPage"));
const Product = lazy(() => import("@/components/Pages/Product"));
const LoginPage = lazy(() => import("@/components/Pages/Login"));
const RegisterPage = lazy(() => import("@/components/Pages/Register"));
const CartPage = lazy(() => import("@/components/Pages/CartPage"));
const CategoryPage = lazy(() => import("../components/Pages/CategoryPage"));
const CheckoutPage = lazy(() => import("@/components/Pages/CheckoutPage"));
const ProfilePage = lazy(() => import("@/components/Pages/ProfilePage"));
const ContactUs = lazy(() => import("@/components/Pages/ContactUs"));
const PrivacyPolicy = lazy(
  () => import("@/components/Pages/Policy/PrivacyPolicy"),
);
const TermsConditions = lazy(
  () => import("@/components/Pages/Policy/TermsConditions"),
);
const ReturnRefund = lazy(
  () => import("@/components/Pages/Policy/ReturnRefund"),
);
const Delivery = lazy(() => import("@/components/Pages/Policy/Delivery"));

// Loading fallback
const LoadingFallback = () => (
  <Center h="100vh">
    <Spinner size="xl" color="brand.500" />
  </Center>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <LazyApplicationLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<LoadingFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          element={
            <Suspense fallback={<LoadingFallback />}>
              <LazyHomeLayout />
            </Suspense>
          }
        >
          <Route
            path="products"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route
            path="product"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path="category/:categoryName"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="checkout"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <CheckoutPage />
                </Suspense>
              }
            />
            <Route
              path="profile"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProfilePage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="privacy"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="terms"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <TermsConditions />
              </Suspense>
            }
          />
          <Route
            path="returns"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ReturnRefund />
              </Suspense>
            }
          />
          <Route
            path="delivery"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Delivery />
              </Suspense>
            }
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path="admin"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <LazyAdminLayout />
              </Suspense>
            }
          ></Route>
        </Route>
      </Route>
      <Route
        path="login"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="register"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RegisterPage />
          </Suspense>
        }
      />
    </>,
  ),
);

export default router;
