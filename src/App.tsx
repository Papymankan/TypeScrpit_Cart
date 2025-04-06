import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes.tsx";
import {
  ProductsContextProvider,
} from "./Context/ProductsContext.tsx";

function App() {
  const Routes = useRoutes(routes);

  return (
    <>
      <ProductsContextProvider>{Routes}</ProductsContextProvider>
    </>
  );
}

export default App;
