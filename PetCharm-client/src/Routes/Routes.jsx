import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Offers from "../pages/Offers/Offers";
import Shop from "../pages/Shop/Shop";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: 'offers',
          element: <Offers></Offers>
        },
        {
          path: 'shop/:category',
          element: <Shop></Shop>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'login',
          element: <Login></Login>
        },

      ]
    },
  ]);