import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AllApplication from "../pages/AllApplication/AllApplication";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: AllApplication
            },
            {
                path: '/apps/:id',
                Component: AppDetails
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage
    }
])

export default router;