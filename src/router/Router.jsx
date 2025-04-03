import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/page/home/Home";
import Login from "../components/page/login/Login";
import LayoutProductList from "../components/page/product_list/LayoutProductList";
import ProductList from "../components/page/product_list/ProductList";
import Register from "../components/page/register/Register";
import ShoppingCart from "../components/page/shopping_cart/ShoppingCart";
import Order from "../components/page/order/Order";

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
                path: "register",
                element: (<Register />)
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "cart",
                element: (<ShoppingCart />)
            },
            {
                path: "order",
                element: (<Order />)
            }
        ]
    },

])
export default router;