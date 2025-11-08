import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllPlants from "../pages/AllPlants";
import PlantsDetails from "../pages/PlantsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../provider/PrivateRoute";
import LoaderSpinner from "../components/LoaderSpinner";
import UpdateProfileForm from "../pages/UpdateProfile";
import ErrorPages from "../pages/ErrorPages";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPages></ErrorPages>,
        Component: MainLayout,
        children:[
            {
                index:true,
                Component:Home,
                loader: () => fetch('/allPlantsData.json'),
                hydrateFallbackElement:<LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/allPlants',
                Component: AllPlants,
                loader: () => fetch('/allPlantsData.json'),
                hydrateFallbackElement:<LoaderSpinner></LoaderSpinner>
            },
            {
                path: '/plantsDetail/:id',
                loader: () => fetch('/allPlantsData.json'),
                hydrateFallbackElement:<LoaderSpinner></LoaderSpinner>,
                element: <PrivateRoute><PlantsDetails></PlantsDetails></PrivateRoute>
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/updateProfile',
                Component: UpdateProfileForm

            }
        ]
    }
])

export default router;