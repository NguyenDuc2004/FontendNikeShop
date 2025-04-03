import React from 'react'
import ico_trash from "../../../assets/images/ico_trash.png"
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
    // const { isLogin } = useSelector((state) => state.authenSlice);
    return (
        <>
            <section className="">
                <div className="pt-20">
                    <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>

                    <div className="container">
                        <div className="grid grid-cols-6 mt-10 gap-8">
                            <div className="col-span-4">
                                <table className='border border-1px border-solid'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-32 overflow-hidden">
                                                        <img
                                                            className="image"
                                                            src=""
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs uppercase">
                                                            dâd
                                                        </p>
                                                        <span className="text-xs">đâđâ</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex w-full items-center relative justify-center border border-1px border-solid rounded">
                                                    <button
                                                        // onClick={() => handleReduceFormCart(cart)}
                                                        type="button"
                                                        className="text-lg block text-[0px] absolute left-4"
                                                    >
                                                        <span className="text-2xl leading-[24px]">
                                                            -
                                                        </span>
                                                    </button>
                                                    2
                                                    <button
                                                        type="button"
                                                        className="text-lg block text-[0px] absolute right-4"
                                                    >
                                                        <span
                                                            className="text-2xl leading-[24px]"
                                                        // onClick={() => handleAddToCart(cart)}
                                                        >
                                                            +
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td>
                                                <button
                                                    type="button"
                                                >
                                                    <img
                                                        className="block size-5"
                                                        src={ico_trash}
                                                        alt=""
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="mt-9">
                                    <p className="text-md">Special instructions for seller</p>

                                    <textarea name="" id="" placeholder="how can we help you?" className="text-md mt-3 border border-gray p-5 w-full" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="p-7 bg-[#f7f4ef] rounded-lg">
                                    <h3 className="uppercase font-medium text-sm">FREE SHIPPING ON ORDERS $100.00</h3>
                                    <p className="text-sm mt-2">Congratulations , you've got free shipping!</p>
                                    <p className="bg-[#14c100] w-full h-1 mt-5"></p>
                                </div>

                                <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                                    <span>Coupon</span>
                                    <p className="mt-2 mb-6 text-md text-lightGray">* Discount will be calculated and applied at checkout</p>
                                    <input type="text" className="h-10 px-6 text-sm border border-gray rounded-md w-full" placeholder="Coupon code" fdprocessedid="eg5plx" />
                                    <p className="mt-6 font-semibold">Total: </p>

                                    <Link to={"/order"} className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all">
                                        Check out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="pt-12 pb-12"></section>
        </>
    )
}

export default ShoppingCart
