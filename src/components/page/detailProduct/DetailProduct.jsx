
import React, { useEffect, useState } from 'react'
import ico_eye from "../../../assets/images/ico_eye.png"
import ico_fire from "../../../assets/images/ico_fire.png"
import ico_checked from "../../../assets/images/ico_checked.png"
import ico_heart from "../../../assets/images/ico_heart.png"
import ico_reload from "../../../assets/images/ico_reload.png"
import ico_question from "../../../assets/images/ico_question.png"
import ico_shipping from "../../../assets/images/ico_shipping.png"
import ico_share from "../../../assets/images/ico_share.png"
import ico_shipping2 from "../../../assets/images/ico_shipping2.png"
import ico_check from "../../../assets/images/ico_check.png"
import img_payment from "../../../assets/images/img_payment.avif"
import { Link, useParams } from 'react-router'
import ApiService from '../../../services/ApiService'
import { Grow, Rating, ToggleButton, ToggleButtonGroup } from '@mui/material'
import toast from 'react-hot-toast'
import { addToCart } from '../../../store/cartSlice'
import { useDispatch } from 'react-redux'

const DetailProduct = () => {
    const img_description = "https://myshoes.vn/image/catalog/banner/chon-size.png";
    const [isOpen, setIsOpen] = useState(false);
    const { slug } = useParams();
    // console.log(slug, "slug")

    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState("");
    const [size, setSize] = useState('');
    console.log(image, "image");


    const [dataDetail, setDataDetail] = React.useState({});
    const dispatch = useDispatch();

    const fetchApiDetail = async () => {
        try {
            const res = await ApiService.Get(`/client/products/${slug}`);
            if (res.status === 200) {
                setDataDetail(res.data.data || {}); // Đảm bảo `dataDetail` luôn là một đối tượng
            } else {
                console.error("Lỗi khi lấy chi tiết sản phẩm:", res);
            }
        } catch (error) {
            console.error("Lỗi khi gọi API chi tiết sản phẩm:", error);
        }
    };

    console.log(dataDetail, "dataDetail");

    const handleAddToCart = async () => {
        const suffixUrl = "/client/carts/add"; // Đường dẫn API
        const formData = {
            productId: dataDetail.id,
            name: dataDetail.name,
            price: dataDetail.price,
            quantity: 1,
            image: dataDetail.imageUrl[0],
            size:size
        };
        try {
            const res = await ApiService.PostAddCart(suffixUrl, formData);
            if (res.status === 200) {
                toast.success("Thêm vào giỏ hàng thành công", {
                    duration: 1000
                })   // dispatch(addToCart(formData))
                const resCart = await ApiService.GetCart("/client/carts/get"); // Gọi API để lấy giỏ hàng
                if (resCart.status === 200) {
                    const cartItems = resCart.data.data;
                    dispatch(addToCart(cartItems)) // Cập nhật lại giỏ hàng trong Redux
                }
            }
            else {
                toast.error("Thêm vào giỏ hàng thất bại", {
                    duration: 2000
                });
            }
        } catch (error) {
            console.error("Lỗi khi gửi POST request:", error);
        }

    }

    const handleChange = (event, newSize) => {
        if (newSize !== null) {
            setSize(newSize); // newSize chính là value của ToggleButton được chọn
        }
    };

    console.log(size, "size");



    useEffect(() => {
        fetchApiDetail()
        // Cuộn lên đầu trang khi slug thay đổi
        window.scrollTo(0, 0);
    }, [slug])
    return (
        <>
            <div className="container py-5">
                <ul className="flex gap-2 items-center py-4">
                    <li>
                        <Link to={"/"} className="text-sm text-blue-500 hover:underline" >
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li>
                        <span className="text-sm text-gray-500">{dataDetail.name || "Product Name"}</span>
                    </li>
                </ul>

                <div className="lg:grid grid-cols-5 gap-7 mt-4">
                    <div className="col-span-3 flex gap-3">
                        <ul className="flex flex-col gap-4">
                            {
                                dataDetail.imageUrl && dataDetail.imageUrl.map((item, index) => (
                                    <li key={index} className="w-[82px] cursor-pointer p-[10px] rounded-md border border-gray hover:border-black transition-all">
                                        <img onMouseEnter={() => setImage(item)} className="image" src={item} alt={`Product Thumbnail ${index + 1}`} />
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="overflow-hidden">
                            <Grow
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: 1000 } : {})}
                            >
                                <div className="object-contain h-[600px] rounded-xl overflow-hidden">
                                    <img
                                        src={image || (dataDetail.imageUrl && dataDetail.imageUrl[0])}
                                        className="image"
                                        alt="Product Detail" />
                                </div>
                            </Grow>

                        </div>
                    </div>
                    <div className="col-span-2 mt-6">
                        <h2 className="text-xl lg:text-2xl font-semibold">{dataDetail.name}</h2>
                        <ul className="flex items-center gap-1 mt-4">
                            <Rating name="half-rating" defaultValue={dataDetail.rating} precision={0.5} />
                        </ul>
                        <p className="mt-3 text-xl font-semibold">
                            {dataDetail.price?.toLocaleString('vi-VN')} đ
                        </p>

                        <div className='py-2'>
                            <h1 className="pb-2 text-[20px] lg:text-xl font-semibold">Chọn size</h1>
                            <ToggleButtonGroup
                                value={size}
                                exclusive
                                onChange={handleChange}
                                aria-label="Size Selector"
                                className="flex flex-row gap-4"
                            >
                                {dataDetail.size &&
                                    dataDetail.size.map((item, index) => (
                                        <ToggleButton
                                            sx={{
                                                width: '82px',
                                                padding: '10px',
                                                border: '1px solid',
                                                borderColor: '#d1d5db', // gray-300
                                                color: '#000000',
                                                '&.Mui-selected': {
                                                    backgroundColor: '#2563eb', // blue-600
                                                    borderColor: 'black',
                                                    color: '#ffffff',
                                                },
                                                '&:hover': {
                                                    borderColor: 'black',
                                                },
                                            }}
                                            value={item}
                                            key={index}

                                        >
                                            {item}
                                        </ToggleButton>
                                    ))}
                            </ToggleButtonGroup>
                        </div>

                        <div className="mt-2 pt-2 border-t border-gray">
                            <p className="flex items-center gap-2 mt-2">
                                <img className="w-5 block animate-flicker" src={ico_eye} alt="Eye Icon" />
                                <span className="font-medium text-sm">35 people are viewing this right now</span>
                            </p>
                            <p className="flex items-center gap-2 mt-4">
                                <img className="w-5 block animate-zoomInOut" src={ico_fire} alt="Fire Icon" />
                                <span className="text-red-600 font-medium text-sm">35 sold in last 18 hours</span>
                            </p>
                            <p className="flex items-center gap-2 mt-6">
                                <img className="w-5 block" src={ico_checked} alt="Checked Icon" /> <span className="text-green font-medium text-sm">In stock</span>
                            </p>


                            <div className="mt-6 flex items-center gap-3">
                                <div className="flex items-center w-max relative">
                                    <button type="button" className="text-lg block text-[0px] absolute left-4"><span className="text-2xl leading-[24px]">-</span></button>
                                    <input type="text" className="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center" />
                                    <button type="button" className="text-lg block text-[0px] absolute right-4"><span className="text-2xl leading-[24px]">+</span></button>
                                </div>

                                <button
                                    type="button"
                                    className="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </button>
                                <button type="button" className="p-4 bg-white border border-[#e6e6e6] rounded-full">
                                    <img className="w-4" src={ico_heart} alt="Heart Icon" />
                                </button>
                            </div>

                            <ul className="flex items-center gap-4 mt-6">
                                <li>
                                    <button type="button" className="flex items-center gap-4 text-sm font-medium">
                                        <img className="w-4" src={ico_reload} alt="Reload Icon" />Compare
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex items-center gap-4 text-sm font-medium">
                                        <img className="w-4" src={ico_question} alt="Question Icon" />Question
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex items-center gap-4 text-sm font-medium">
                                        <img className="w-4" src={ico_shipping} alt="Shipping Icon" />Shipping info
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex items-center gap-4 text-sm font-medium">
                                        <img className="w-4" src={ico_share} alt="Share Icon" />Share
                                    </button>
                                </li>
                            </ul>

                            <div className="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray border-t-gray">
                                <div><img className="block w-9" src={ico_shipping2} alt="Shipping Icon 2" /></div>
                                <p className="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
                                    Order in the next 22 hours 45 minutes to get it between <br />
                                    <span className="font-semibold underline">Tuesday, Oct 22 </span> <span className="mx-2">and</span>
                                    <span className="font-semibold underline"> Saturday, Oct 26</span>
                                </p>
                            </div>

                            <div className="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
                                <div><img src={ico_check} className="w-6 block" alt="Check Icon" /></div>
                                <div className="text-sm">
                                    <p className="text-lightGray">Pickup available at <span className="font-semibold text-black"> Akaze store</span></p>
                                    <p className="text-xs text-lightGray mt-1">Usually ready in 24 hours</p>
                                    <button type="button" className="underline text-xs mt-4">View store information</button>
                                </div>
                            </div>

                            <div className="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
                                <p className="text-sm tracking-widest">Guaranteed Checkout</p>
                                <img className="block mt-3" src={img_payment} alt="Payment Methods" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mo ta san pham */}
            <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray-200">
                <div className="container">
                    <div>
                        <div>
                            <h2 className="text-3xl font-bold">Mô tả sản phẩm</h2>
                            <p className="mt-2 text-lightGray"></p>
                        </div>
                        {dataDetail.description &&
                            dataDetail.description.split("✔️").map((line, index) => (
                                line.trim() && ( // Loại bỏ các dòng trống
                                    <p key={index} className="mt-2">
                                        {index > 0 && <span className="text-green-600 font-bold">✔️</span>}
                                        {line.trim()}
                                    </p>
                                )
                            ))}
                        {/* Ảnh thu nhỏ */}
                        <img
                            className="pt-5 w-[250px] cursor-pointer rounded shadow"
                            src={img_description}
                            alt="Mô tả sản phẩm"
                            onClick={() => setIsOpen(true)}
                        />

                        {/* Modal ảnh lớn */}
                        {isOpen && (
                            <div
                                className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
                                onClick={() => setIsOpen(false)}
                            >
                                <img
                                    src={img_description}
                                    alt="Zoomed"
                                    className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                                />
                                <button
                                    className="absolute top-4 right-4 text-white text-3xl font-bold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                    </div>


                    <ul className="mt-8 lg:grid grid-cols-4 gap-7">

                    </ul>
                </div>
            </section >
        </>
    );
};

export default DetailProduct;
