import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-24">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Thông tin cửa hàng</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Cửa hàng của chúng tôi</a></li>
                            <li><a href="#" className="hover:underline">Liên hệ</a></li>
                            <li><a href="#" className="hover:underline">Nhãn hàng</a></li>
                            <li><a href="#" className="hover:underline">Quà tặng</a></li>
                            {/* <li><a href="#" className="hover:underline">Press</a></li> */}
                        </ul>
                    </div>

                    <div className="md:col-span-2 md:flex md:flex-col md:justify-center">
                        <h3 className="font-semibold text-xl mb-4 lg:text-center">Đăng ký để nhận thông báo và các chương trình khuyến mãi khác</h3>
                        <div className="flex mt-4">
                            <input type="email" placeholder="Email address..." className="flex-grow px-4 py-4 rounded-l-full border border-r-0 border-gray-300 focus:outline-none focus:border-black" fdprocessedid="zhf85r" />
                            <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition duration-300" fdprocessedid="nos9eh">
                               Đăng ký
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Dịch vụ khách hàng</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Tìm kiếm cửa hàng</a></li>
                            <li><a href="#" className="hover:underline">Trả lại</a></li>
                            <li><a href="#" className="hover:underline">Thông tin vận chuyển</a></li>
                            {/* <li><a href="#" className="hover:underline">Wholesale</a></li> */}
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-sm text-gray-600 mb-4 md:mb-0 text-center">Copyright © 2024. All Right Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
