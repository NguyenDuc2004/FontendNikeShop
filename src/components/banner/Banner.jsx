import React, { useEffect, useState } from 'react'
import img_banner3 from "../../assets/images/img_banner3.jpg"
import img_giay1 from "../../assets/images/img_giay1.png"


import { Link } from 'react-router'
const Banner = () => {
    const images = [img_banner3, img_giay1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // đổi ảnh mỗi 3 giây

        return () => clearInterval(interval);
    }, []);
    return (
        <section className='relative overflow-hidden'>
            <img
                src={images[currentIndex]}
                alt={`banner-${currentIndex}`}
                className='animate-zoomIn object-cover w-full h-[550px] transition-opacity duration-1000'
            />
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className='text-x2 lg:text-4xl text-white font-bold lg:leading-10 animate-slideInleft'>
                    MAX SPACE <br />
                    <p className='text-[14px] font-thin'>Những tay súng giỏi nhất luôn tạo khoảng trống cho cú đánh của họ và của mọi người khác.</p>
                </h2>

                <Link
                    to={"product"}
                    style={{ animationDelay: "0.3s" }}
                    href="#none"
                    className="animate-slideInLeft mt-4 lg:mt-8 h-9 border border-white px-7 inline-flex items-center font-semibold text-white rounded-full text-[15px] hover:bg-white hover:text-black transition-all duration-300"
                >
                    Sản phẩm
                </Link>
            </div>
        </section>
    )
}

export default Banner
