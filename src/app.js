import React, { Suspense, lazy } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import{createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    </>
);
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element:<Body/>,
                errorElement:<Error/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
                errorElement:<Error/>,
            },
            {
                path:"/instamart",
                element:(<Suspense fallback={<Shimmer />}> <Instamart /></Suspense> )
            },
            {
                path:"/about",
                element:<About/>,
                errorElement:<Error/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>,
                    }
                ]
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
        ]
    },
    {
        path:"/login",
        element:<Login/>,
        errorElement:<Error/>,
    },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
