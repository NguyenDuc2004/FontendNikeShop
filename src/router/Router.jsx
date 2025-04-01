import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/page/home/Home";
import Login from "../components/page/login/Login";
import LayoutProductList from "../components/page/product_list/LayoutProductList";
import ProductList from "../components/page/product_list/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Layout />),
        children: [
            {
                path: "",
                element: (<Home />)
            },
            {
                path: "product",
                element: (<LayoutProductList />),
                children: [
                    {
                        path: "",
                        element: (<ProductList />)
                    }
                ]
            },
            {
                path: "blog",
                element: <h1>blog</h1>
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },

])
export default router;