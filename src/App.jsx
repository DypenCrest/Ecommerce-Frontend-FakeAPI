import "@fontsource/poppins";
import "@fontsource/poppins/400.css"; // Specify weight
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Layout from "./pages/Layout";
import { ToastContainer } from "react-toastify";
import ProductList from "./components/ProductList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Registration /> },
        { path: "products", element: <ProductList /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
