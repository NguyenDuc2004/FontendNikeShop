import React from 'react'
import ico_heart from "../../assets/images/ico_heart.png"
import ico_reload from "../../assets/images/ico_reload.png"
import ico_search from "../../assets/images/ico_search.png"
import { Rating } from '@mui/material'
const Box_product = ({ item }) => {
    return (
        <li className="mt-6 md:mt-0 text-center group relative">
            <a href="product-detail.html">
                <span className={`${item.discount > 0 ? "absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl" : ""}`}>{item.discount > 0 ? `-${item.discount}%` : ""}</span>
                <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all" fdprocessedid="4l83fa">
                            <img src={ico_heart} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all" fdprocessedid="owt9dv">
                            <img src={ico_reload} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all" fdprocessedid="n4agmi">
                            <img src={ico_search} className="image size-4 rouded-full" alt="" />
                        </button>
                    </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className="block size-full object-cover" src={item.imageUrl} alt="" />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
                </div>
                <h3 className="text-15 mt-2">{item.name}</h3>
            </a><div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html">
            </a><div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300"><a href="product-detail.html">
                <div className="flex items-center justify-center font-bold text-15 text-center">
                    <span className="line-through text-lightGray">{item.discount > 0 ? (item.price) : ""}</span> {item.discount > 0 ? "-" : ""}
                    <span className={`${item.discount > 0 ? "text-red-600" : "text-black"}`}>${item.discount > 0 ? (item.price - ((item.price) * ((item.discount) / 100))) : item.price}</span>
                </div>
            </a>
                    <a href="#none" className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">
                        Add to cart
                    </a>
                </div>
            </div>
        </li>
    )
}

export default Box_product
