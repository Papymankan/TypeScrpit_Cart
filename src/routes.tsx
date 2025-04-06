import Home from "./pages/Home.tsx"
import CartPage from "./pages/CartPage.tsx"

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/cart", element: <CartPage /> },
];
