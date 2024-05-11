import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home.jsx"
import Login from "../pages/Login.jsx"
import Registration from "../pages/Registration.jsx"
import ErrorPage from "./ErrorPage.jsx";
import AddService from "../pages/AddService/AddService.jsx";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/addSevice",
                element: <AddService></AddService>
            }
        ]
    }
])

