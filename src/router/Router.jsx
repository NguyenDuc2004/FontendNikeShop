import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/page/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Layout />),
        children: [
            {
                path: "",
                element: (<Home/>)
            },
            {
                path: "product",
                element: <h1>Product</h1>
            },
            {
                path: "profile",
                element: <h1>Profile</h1>
            },
            {
                path: "Blog",
                element: <h1>blog</h1>
            },
        ]
    },

])
export default router;