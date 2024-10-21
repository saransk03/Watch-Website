import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Errorpage from "./components/Errorpage/Errorpage";
import Body from "./pages/Body";
import Product from "./components/Product/Product";

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
        path: "/products",
        element: <Product />,
      },
    ],
    errorElement: <Errorpage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
