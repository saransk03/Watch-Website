import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Errorpage from "./components/Errorpage/Errorpage";
import Body from "./Body";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ThemeProvider from "./Contexts/ThemeContext";
import CartProvider from "./Contexts/UseCartContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AppLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    })
  },[]);

  return (
    <>
      <CartProvider>
        <ThemeProvider>
          <Navbar />
          <ScrollRestoration />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </CartProvider>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Errorpage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
