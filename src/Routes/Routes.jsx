import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import BookNow from "../Pages/Book/BookNow";
import Profile from "../Pages/Profile/Profile";
import ErrorElement from "../Shared/ErrorElement";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () => fetch('/services.json')
            },
            {
                path: "/services/:serviceDetails",
                loader: () => fetch(`/services.json`),
                element:
                    <PrivateRoute>
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/bookNow",
                element:
                    <PrivateRoute>
                        <BookNow></BookNow>
                    </PrivateRoute>
            },
            {
                path: "/profile",
                element:
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
            }
        ]
    }
])

export default router;