import "@fontsource/poppins";
import "@fontsource/poppins/400.css"; // Specify weight
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Registration from "./components/Registration";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import EditProfile from "./components/EditProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Productpage from "./pages/Productpage";
import CatProductPage from "./pages/CatProductPage";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Registration /> },
        { path: "users/:id", element: <EditProfile /> },
        { path: "products", element: <Productpage /> },
        { path: "products/:category", element: <CatProductPage /> },
        { path: "/", element: <Homepage /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
