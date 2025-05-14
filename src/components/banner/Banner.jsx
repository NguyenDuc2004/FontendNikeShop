import React from 'react'
import img_banner3 from "../../assets/images/img_banner3.jpg"
import { Link } from 'react-router'
const Banner = () => {
    return (
        <section className='relative overflow-hidden'>
            <img className='animate-zoomIn  object-cover w-full h-[550px] ' src={img_banner3} alt="banner" />
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className='text-x2 lg:text-4xl text-white font-bold lg:leading-10 animate-slideInleft'>
                    MAX SPACE <br />
                    <p className='text-[14px] font-thin'>The greatest shooters make space for their shot-and everyone else's.</p>
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
