import "./App.css";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/Layout.jsx";
import products from "./products.js";
import ShoppingPage from "./pages/ShoppingPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import ItemPage from "./pages/ItemPage.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage products={products} /> },
      {
        path: "/shop",
        element: <ShoppingPage products={products} />,
      },
      { path: "/shop/:id", element: <ItemPage /> },
      { path: "/subscription", element: <SubscriptionPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/newsletter", element: <NewsletterPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  //
}

export default App;
