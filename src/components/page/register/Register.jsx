import React, { useEffect, useState } from 'react'
import ApiService from '../../../services/ApiService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { Backdrop, CircularProgress } from '@mui/material'


const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState()
    const [formRegister, setFormRegister] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        address: ""
    })
    const handleChange = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setFormRegister({
            ...formRegister,
            [name]: value,
        })
    }
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /(?=.*[A-Z])(?=.*[!@#\$%])/;
    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            if (!formRegister.fullName || !formRegister.email || !formRegister.password || formRegister.phone.trim() === "" ||
                formRegister.address.trim() === "") {
                toast.error("Không để trống thông tin");
                setIsLoading(false);
            } else {
                const res = await ApiService.PostRegis("/register", formRegister);
                console.log(res, "Response Data");
                toast.success("Đăng ký thành công!", {
                    duration: 3000
                });
                setFormRegister({
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    address: ""
                })
                setIsLoading(false)
            }

        } catch (error) {
            console.error("Lỗi khi đăng ký:", error);
            toast.error("Đăng ký thất bại, hãy thử lại ", {
                duration: 1000
            });
            setIsLoading(false);
        }
    };

    console.log(formRegister, "formRegis");


    return (
        <>
            <section className="">
                <div className="pt-20">
                    <h2 className="text-3xl font-semibold text-center">Register Account</h2>
                    <div className="container">
                        <div className="max-w-xl mx-auto">
                            <h2 className="font-semibold text-2xl"></h2>

                            <form action="" className="mt-5">
                                <div className="mt-3">
                                    <input
                                        name="fullName"
                                        value={formRegister.fullName}
                                        type="text"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="FullName" fdprocessedid="4iilgq"
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mt-3">
                                    <input
                                        name='email'
                                        value={formRegister.email}
                                        type="email"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Email"
                                        fdprocessedid="awyc78"
                                        onChange={handleChange} />
                                    {formRegister.email !== "" && (
                                        <p
                                            className={`mt-2  ${!emailPattern.test(formRegister.email) ? "text-red-600" : "text-green-600"
                                                }`}
                                        >
                                            {!emailPattern.test(formRegister.email)
                                                ? "Email không hợp lệ"
                                                : "Hợp lệ"}
                                        </p>
                                    )}
                                    {/* <span className="mt-2 inline-block text-xs text-red-600">Email or password invalid</span> */}
                                </div>

                                <div className="mt-3">
                                    <input
                                        name='password'
                                        value={formRegister.password}
                                        type="password"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Password"
                                        fdprocessedid="4iilgq"
                                        onChange={handleChange} />
                                    {formRegister.password !== "" && (
                                        <p
                                            className={`mt-2  ${!passwordPattern.test(formRegister.password) ? "text-red-600" : "text-green-600"
                                                }`}
                                        >
                                            {!passwordPattern.test(formRegister.password)
                                                ? "PassWord phải bao gồm chữ hoa, chữ thường, * hoặc @"
                                                : "Hợp lệ"}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-3">
                                    <input
                                        name='phone'
                                        value={formRegister.phone}
                                        type="text"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Phone"
                                        dprocessedid="4iilgq"
                                        onChange={handleChange} />
                                </div>

                                <div className="mt-3">
                                    <input
                                        name='address'
                                        value={formRegister.address}
                                        type="text"
                                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                                        placeholder="Address"
                                        fdprocessedid="4iilgq"
                                        onChange={handleChange} />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className={`${isLoading && "opacity-10"} flex items-center justify-center mt-5 mb-5 w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all`}
                                        fdprocessedid="sd2ze4"
                                        onClick={() => handleSubmit()}
                                        disabled={isLoading}
                                    >
                                        Register
                                        {
                                            isLoading && <span className='ml-4'> <CircularProgress color="inherit" /></span>
                                        }
                                    </button>

                                </div>

                                <a
                                    type="submit"
                                    className="mt-5 mb-5 w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                                    fdprocessedid="sd2ze4"
                                    onClick={() => navigate("/login")}
                                >
                                    Login
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-12 pb-12"></section>
        </>
    )
}

export default Register
