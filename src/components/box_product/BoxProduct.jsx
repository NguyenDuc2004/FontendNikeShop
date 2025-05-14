import React, { use, useEffect, useState } from 'react';
import ico_heart from "../../assets/images/ico_heart.png";
import ico_reload from "../../assets/images/ico_reload.png";
import ico_search from "../../assets/images/ico_search.png";
import { Grow, Rating, Skeleton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import toast from 'react-hot-toast';
import ApiService from '../../services/ApiService';

const Box_product = ({ item }) => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const { isLogin } = useSelector((state) => state.authenSlice);
    const dispatch = useDispatch()


    // const handleAddToCart = async () => {
    //     const suffixUrl = "/client/carts/add"; // Đường dẫn API
    //     const formData = {
    //         productId: item.id,
    //         name: item.name,
    //         price: item.price,
    //         quantity: 1,
    //         image: item.imageUrl[0],
    //     };

    //     // Kiểm tra dữ liệu đầu vào
    //     if (!formData.productId || !formData.name || !formData.price || !formData.quantity) {
    //         toast.error("Dữ liệu sản phẩm không hợp lệ");
    //         console.error("Dữ liệu không hợp lệ:", formData);
    //         return;
    //     }

    //     try {
    //         const res = await ApiService.PostAddCart(suffixUrl, formData);
    //         if (res.status === 200) {
    //             toast.success("Thêm vào giỏ hàng thành công", { duration: 1000 });
    //             dispatch(addToCart(formData));

    //             const resCart = await ApiService.GetCart("/client/carts/get");
    //             if (resCart.status === 200) {
    //                 const cartItems = resCart.data.data;
    //                 dispatch(addToCart(cartItems));
    //                 localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //             } else {
    //                 console.error("Lỗi khi lấy giỏ hàng:", resCart);
    //                 toast.error("Không thể lấy giỏ hàng. Vui lòng thử lại.");
    //             }
    //         } else {
    //             toast.error("Thêm vào giỏ hàng thất bại", { duration: 2000 });
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi gửi POST request:", error);
    //     }
    // };

    useEffect(() => {
        if (item) {
            setTimeout(() => {
                setIsLoading(true)
            }, 1000)
        }
    }, [item])
    return (
        isLoading ? (
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
            >
                <li className="mt-6 md:mt-0 text-center group relative hover:border-2 hover:border-gray-500 rounded-xl overflow-hidden transition-all duration-300">
                    <div>
                        <span className={`${item.discount > 0 ? "absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl" : ""}`}>
                            {item.discount > 0 ? `-${item.discount}%` : ""}
                        </span>
                        <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                            <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                                    <img src={ico_heart} className="image size-4 rounded-full" alt="Heart Icon" />
                                </button>
                            </li>
                            <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                                <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                                    <img src={ico_reload} className="image size-4 rounded-full" alt="Reload Icon" />
                                </button>
                            </li>
                            <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                                <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                                    <img src={ico_search} className="image size-4 rounded-full" alt="Search Icon" />
                                </button>
                            </li>
                        </ul>
                        <Link to={`/product/${item.slug}`} className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                            <img className="block size-full object-cover" src={item.imageUrl[0] || ''} alt={item.name || 'Product'} />
                        </Link>
                        {/* <div className="flex justify-center items-center gap-1 mt-5">
                            <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />
                        </div> */}
                        <h3 className="text-15 mt-2">{item.name}</h3>
                    </div>
                    <div className="mt-2 relative h-5 overflow-hidden">
                        <div className="">
                            <div className="flex items-center justify-center font-bold text-15 text-center">
                                <span className="line-through text-lightGray">
                                    {item.discount > 0 ? `${(item.price).toLocaleString('vi-VNVN')} ` : ""} 
                                </span>
                                <span className='opacity-0'>..</span>
                                <span className={`${item.discount > 0 ? "text-red-600" : "text-black"}`}>
                                    {item.discount > 0 ? (item.price * (1 - item.discount / 100)).toLocaleString('vi-VNVN') : item.price.toLocaleString('vi-VNVN')}Đ
                                </span>
                            </div>
                            {/* <button
                                onClick={handleAddToCart}
                                className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">
                                Add to cart
                            </button> */}
                        </div>
                    </div>
                </li>
            </Grow>
        ) : <>
            <li className="mt-6 md:mt-0 text-center group relative">
                <div className="rounded-xl overflow-hidden bg-white lg:h-[339px]">
                    <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
                </div>
                <Skeleton width="70%" />
                <Skeleton width="60%" />
            </li>
        </>

    );
};

export default Box_product;