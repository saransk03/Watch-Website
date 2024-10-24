import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Errorpage from "./components/Errorpage/Errorpage";
import Body from "./pages/Body";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
        element: <About/>
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/contact-us",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      }
    ],
    errorElement: <Errorpage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
