import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/1Home/Home";
import Categories from "../Pages/2Categories/Categories";
import Products from "../Pages/3Products/Products";
import AboutUS from "../Pages/4AboutUs/AboutUS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path:"products",
        element:<Products/>
      },{
        path:'aboutUs',
        element:<AboutUS/>
      }
    ],
  },
]);

export default router;
