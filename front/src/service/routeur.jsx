import { createBrowserRouter } from "react-router-dom/dist";
import Login from "../pages/login";
import Sport from "../pages/sports";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/sport",
        element: <Sport />,
    },
    {
        path: "/athlete",
        element: <Athlete />,
    },
  ]);

  export default router;