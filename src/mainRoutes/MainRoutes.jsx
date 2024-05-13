import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home.jsx"
import Login from "../pages/Login.jsx"
import Registration from "../pages/Registration.jsx"
import ErrorPage from "./ErrorPage.jsx";
import AddService from "../pages/AddService/AddService.jsx";
import ServiceDetails from "../pages/Home/ServiceDetails/ServiceDetails.jsx";
import ViewDetails from "../pages/Home/ViewDetails/ViewDetails.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import AllServicePage from "../pages/AllServicePage.jsx";
import BookedService from "../pages/BookedService.jsx";
import ManageService from "../pages/ManageService.jsx";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/allServices",
                element: <AllServicePage></AllServicePage>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/addService",
                element: <AddService></AddService>,
            },
            {
                path: "/manageService",
                element: <ManageService></ManageService>,
                // loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/service/${params.id}`)
            }
            ,
            {
                path: "/bookedService",
                element: <ProtectedRoute><BookedService></BookedService></ProtectedRoute>,
                // loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/bookedService/${params.id}`)
            },
            {
                path: "/service/:id",
                element: <ProtectedRoute><ServiceDetails></ServiceDetails></ProtectedRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/service/${params.id}`)
            }
            , {
                path: "/viewDetails",
                element: <ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>
            }

        ]
    }
])

