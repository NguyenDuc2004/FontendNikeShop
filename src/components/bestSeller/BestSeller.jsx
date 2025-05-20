import React from 'react'
import { useSelector } from 'react-redux'
import BoxProduct from '../box_product/BoxProduct';
import { Link } from 'react-router';

const BestSeller = () => {
    const { bestSeller } = useSelector((state) => state.productSlice);
    return (
        <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
            <div className="container">
                <div className="lg:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
                        <p className="mt-2 text-lightGray">Trải nghiệm những sản phẩm tốt nhất tại cửa hàng chúng tôi!</p>
                    </div>
                    <Link
                        to={"/product"}
                        className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                    >Xem tất cả</Link>
                </div>

                <ul className="mt-8 lg:grid grid-cols-4 gap-7">
                    {
                        bestSeller.map((item) =>
                            <BoxProduct key={item.id} item={item} />)
                    }
                </ul>
            </div>
        </section>
    )
}

export default BestSeller
