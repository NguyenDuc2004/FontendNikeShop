import React, { useEffect, useState } from 'react'
import img_banner2 from "../../../assets/images/img_banner2.png"
import img_nikeSport2 from "../../../assets/images/img_nikeSport2.jpg"

const BannerProductList = () => {
    const images = [img_banner2, img_nikeSport2];
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // đổi ảnh mỗi 3 giây
    }, [])

    return (
        <section className="relative overflow-hidden">
            <img
                className='animate-zoomIn  object-cover w-full h-[550px] '
                src={images[currentIndex]} alt="" />
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
