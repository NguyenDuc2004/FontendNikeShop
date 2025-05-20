
import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PrivateRouter = () => {
    const token = localStorage.getItem("accessToken");
    return token ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRouter
