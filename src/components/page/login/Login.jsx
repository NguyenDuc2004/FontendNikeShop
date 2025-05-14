import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ApiService from '../../../services/ApiService';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { LoginUser, } from '../../../store/authenSlice';
import { CircularProgress } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value
        })
    }

    console.log(formLogin, "formLogin");

    const handleLogin = async () => {
        if (!formLogin.email || !formLogin.password) {
            toast.error("Vui lòng nhập đầy đủ thông tin", { duration: 3000 });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formLogin.email)) {
            toast.error("Email không hợp lệ", { duration: 3000 });
            return;
        }
        setIsLoading(true)
        try {
            const res = await ApiService.PostAccessToken("/access-token", formLogin)
            console.log(res, "resLogin");
            if (res.status === 200) {
                toast.success("Đăng nhập thành công", {
                    duration: 3000,
                })
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("userId", res.data.userId);
                dispatch(LoginUser(formLogin));
                navigate("/")
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Lỗi khi đăng nhập:", error);
            toast.error("Đăng nhập thất bại, hãy thử lại ", {
                duration: 3000
            });
            setFormLogin({
                email: "",
                password: ""
            })
            setIsLoading(false);
        }
    }
    return (
        <>
            <section className="">
                <div className="pt-20">
                    <h2 className="text-3xl font-semibold text-center">Account</h2>
                    <div className="container">
                        <div className="max-w-xl mx-auto">
                            <h2 className="font-semibold text-2xl">Sign in</h2>

                            <form action="" className="mt-5">
                                <div>
                                    <input
                                        name='email'
                                        value={formLogin.email}
                                        type="email"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Email*"
                                        fdprocessedid="awyc78"
                                        onChange={(e) => handleChange(e)}
                                    />
                                    {/* <span className="mt-2 inline-block text-xs text-red-600">Email or password invalid</span> */}
                                </div>

                                <div className="mt-3">
                                    <input
                                        name='password'
                                        value={formLogin.password}
                                        type={!show ? "password" : "text"}
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Password*"
                                        fdprocessedid="4iilgq"
                                        onChange={(e) => handleChange(e)}

                                    />
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Link to={"/forgot-password"}  className="text-xs mt-5 mb-5 block hover:underline">Forgot password ?</Link>
                                    <button
                                        className='border border-solid text-black bg-gray px-3 py-1 rounded-lg'
                                        type="button"
                                        onClick={() => setShow(!show)}>
                                        {
                                            show ? <VisibilityOff /> : <Visibility />
                                        }
                                    </button>
                                </div>

                                <div className='flex'>
                                    <button
                                        onClick={handleLogin}
                                        type="button"
                                        className={`${isLoading && "opacity-10"} flex items-center justify-center w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all`}
                                        fdprocessedid="sd2ze4"
                                        disabled={isLoading}
                                    >
                                        Login
                                        {
                                            isLoading && <span className='ml-4'> <CircularProgress color="inherit" /></span>
                                        }
                                    </button>

                                    <button onClick={() => navigate("/register")} type="button" className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all" fdprocessedid="sd2ze4">
                                        Register
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-12 pb-12"></section>
        </>
    )
}

export default Login
