import React from 'react'
import img_banner2 from "../../../assets/images/img_banner2.png"


const BannerProductList = () => {
    return (
        <section className="relative overflow-hidden">
            <img className='animate-zoomIn  object-cover w-full h-[550px] ' src={img_banner2} alt="" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl text-white font-semibold">Sản phẩm</h2>
                <ul className="flex items-center gap-3 justify-center mt-2">
                    <li><a href="index.html" className='text-white'>Trang chủ/ </a></li>
                    <li><a href="index.html" className='text-white'>Sản phẩm</a></li>
                </ul>
            </div>
        </section>
    )
}

export default BannerProductList
