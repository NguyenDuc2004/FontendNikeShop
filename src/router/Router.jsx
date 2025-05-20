import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/page/home/Home";
import Login from "../components/page/login/Login";
import LayoutProductList from "../components/page/product_list/LayoutProductList";
import ProductList from "../components/page/product_list/ProductList";
import Register from "../components/page/register/Register";
import ShoppingCart from "../components/page/shopping_cart/ShoppingCart";
import Order from "../components/page/order/Order";
import DetailProduct from "../components/page/detailProduct/DetailProduct";
import ForgotPass from "../components/page/login/ForgotPass";
import ResetPassword from "../components/page/login/ResetPassword";
import PrivateRouter from "./PrivateRouter";
import WishLish from "../components/page/wishlish/wishLish";

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
                    ,
                    {
                        path: ":slug",
                        element: (<DetailProduct />)
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
                path: "forgot-password",
                element: <ForgotPass />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
            {
                path: "cart",
                element: (<ShoppingCart />)
            },
            {
                path: "order",
                element: (
                    <PrivateRouter>

                    </PrivateRouter>
                ),
                children: [
                    {
                        path: "",
                        element: (<Order />),
                    }
                ]
            },
            {
                path: "wishlish",
                element: (
                    <PrivateRouter>

                    </PrivateRouter>
                ),
                children: [
                    {
                        path: "",
                        element: (<WishLish/>),
                    }
                ]
            }
        ]
    },

])
export default router;