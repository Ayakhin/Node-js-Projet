import { RouterProvider } from "react-router-dom/dist";
import Sport from "./pages/sports"
import router from "./service/routeur";

const App = () => {
  return <RouterProvider router={ router } />;
}

export default App