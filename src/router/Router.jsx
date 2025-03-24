import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element:(<Layout/>),
        children: [
            {
                path:"",
                element:<h1>Home</h1>
            },
            {
                path:"product",
                element:<h1>Product</h1>
            }
        ]
    },
   
])
export default router;