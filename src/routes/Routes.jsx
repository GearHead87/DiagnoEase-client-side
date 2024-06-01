import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Register from "../pages/Register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          
        }
      ]
    }
  ]);