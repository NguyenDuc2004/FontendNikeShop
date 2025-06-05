import React from 'react'
import img_order from "../../../assets/images/img_order.webp"
const Order = () => {
    return (
        <>
            <section>
                <div className="pt-16">
                    <h2 className="text-3xl font-semibold text-center">Thanh toán</h2>

                    <div className="container">
                        <div className="lg:grid grid-cols-2 mt-10 gap-8">
                            <div>
                                <form action="" className="space-y-6">
                                    <div className="w-full">
                                        <label for="name" className="font-semibold text-lg">Liên hệ</label>
                                        <input id="name" type="text" className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" placeholder="Email or mobile phone number" fdprocessedid="kpj0gt" />
                                        <div className="flex items-center gap-2 mt-3">
                                            <input id="email-check" className="cursor-pointer size-4" type="checkbox" />
                                            <label for="email-check" className="text-[14px] cursor-pointer">Gửi email cho tôi với tin tức và ưu đãi mới</label>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="font-semibold text-lg">Vận chuyển</label>
                                        <div className="flex items-center gap-2 mt-3">
                                            <input id="ship-check" className="cursor-pointer size-4" type="checkbox" />
                                            <label for="ship-check" className="text-[14px] cursor-pointer">Giao hàng</label>
                                        </div>
                                        <div className="flex items-center gap-2 mt-3">
                                            <input id="store-check" className="cursor-pointer size-4" type="checkbox" />
                                            <label for="store-check" className="text-[14px] cursor-pointer">Nhận tại cửa hàng</label>
                                        </div>

                                        <div className="w-full p-3 border rounded-lg mt-6 border-gray">
                                            <select name="" id="" className="w-full h-full text-[14px]" fdprocessedid="mtbylj">
                                                <option value="">VietNam</option>
                                                <option value="">USA</option>
                                                <option value="">India</option>
                                                <option value="">Australia</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 mt-3 flex-1">
                                                <input 
                                                name="first-name" 
                                                type="text" 
                                                className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                                placeholder="Họ" 
                                                fdprocessedid="yj8n0l" />
                                            </div>
                                            <div className="flex items-center gap-2 mt-3 flex-1">
                                                <input 
                                                name="last-name" 
                                                type="text" 
                                                className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                                placeholder="Tên đệm" fdprocessedid="jjdhyc" />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mt-3 flex-1">
                                            <input 
                                            name="address" 
                                            type="text" 
                                            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                            placeholder="Địa chỉ" 
                                            fdprocessedid="omu5w" />
                                        </div>

                                        <div className="flex items-center gap-2 mt-3 flex-1">
                                            <input 
                                            name="address" 
                                            type="text" className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                            placeholder="Apartment, suite, etc(optional)" 
                                            fdprocessedid="0aemzb" />
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 mt-3 flex-1">
                                                <input 
                                                name="first-name" 
                                                type="text" 
                                                className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                                placeholder="Thành phố" 
                                                fdprocessedid="s68z" />
                                            </div>
                                            <div className="flex items-center gap-2 mt-3 flex-1">
                                                <input 
                                                name="last-name" 
                                                type="text" 
                                                className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" 
                                                placeholder="Postal code(optional)" 
                                                fdprocessedid="ri6v65" />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mt-3">
                                            <input id="save-check" className="cursor-pointer size-4" type="checkbox" />
                                            <label for="save-check" className="text-[14px] cursor-pointer">Lưu thông tin</label>
                                        </div>

                                        <div className="mt-9">
                                            <p className="font-semibold">Phương thức giao hàng</p>
                                            <div className="flex items-center justify-between mt-3 p-4 bg-[#f0f5ff] gap-3 border border-[#1773b0] rounded-lg">
                                                <span className="flex-1">Tiêu chuẩn</span>
                                                <span className="uppercase font-semibold text-[14px]">Miễn phí</span>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <button type="button" className="w-full uppercase h-[55px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all" fdprocessedid="2qj785">
                                                Thanh toán ngay 
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="lg:p-10 mt-10 lg:mt-0">
                                <div className="md:px-5">
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <div className="size-16 border border-gray rounded-md overflow-hidden">
                                                <img className="image" src={img_order} alt="" />
                                            </div>
                                            <p>Suspension Archives</p>
                                            <span className="ml-auto">$59.00 </span>
                                        </li>

                                        <li className="flex items-center gap-3">
                                            <div className="size-16 border border-gray rounded-md overflow-hidden">
                                                <img className="image" src={img_order} alt="" />
                                            </div>
                                            <p>Suspension Archives</p>
                                            <span className="ml-auto">$59.00 </span>
                                        </li>
                                    </ul>

                                    <ul className="mt-6 space-y-4">
                                        <li className="flex items-center justify-between">
                                            <span className="text-[14px]">Tổng cộng • 2 sản phẩm</span>
                                            <span className="text-[14px]">$119.00</span>
                                        </li>

                                        <li className="flex items-center justify-between">
                                            <span className="text-[14px]">Phí giao hàng</span>
                                            <span className="text-[14px]">Miễn phí</span>
                                        </li>

                                        <li className="flex items-center justify-between">
                                            <span className="text-[14px]">Thuế</span>
                                            <span className="text-[14px]">$11.90</span>
                                        </li>

                                        <li className="flex items-center justify-between">
                                            <span className="text-lg font-bold">Tổng tiền</span>
                                            <span className="text-lg font-bold">USD $130.90</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-12 pb-12"></section>
        </>
    )
}

export default Order
