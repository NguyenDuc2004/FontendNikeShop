import { Backdrop, CircularProgress, Pagination } from '@mui/material'
import React, { use, useEffect, useState } from 'react'
import ApiService from '../../../services/ApiService';
import Box_product from '../../box_product/BoxProduct';
import { useParams, useSearchParams } from 'react-router';

const MainProductList = () => {
    const SIZE = 12;

    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    console.log(search, "searchProduct");

    const [dataListProduct, setDataListProduct] = useState([]);
    const [category, setCategory] = useState("");
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [categoryPage, setCategoryPage] = useState(0);
    const [categoryTotalPage, setCategoryTotalPage] = useState(1);
    const [categorySort, setCategorySort] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        page: 0,
        size: SIZE,
        sort: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (selectedCategoryId) {
            // Nếu đang ở category, gọi lại handleCategory với sort mới
            handleCategory(selectedCategoryId, 0, value);
        } else {
            // Nếu không ở category, sort toàn bộ sản phẩm
            setFormData({
                ...formData,
                [name]: value,
                page: 0, // reset về trang đầu khi đổi sort
            });
        }
    };

    const fetchListCategories = async () => {
        try {
            const res = await ApiService.Get("/client/categories/list");
            if (res.status === 200) {
                setCategory(res.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(categorySort, "catergorySort");

    const handleCategory = async (categoryId, page = 0, sort = categorySort) => {
        if (search) {
            return;
        }

        setSelectedCategoryId(categoryId);
        setCategoryPage(page);
        setCategorySort(sort);
        setIsLoading(true);
        const res = await ApiService.GetListProduct(
            `/client/products/list?categories=id:${categoryId}&page=${page}&size=${SIZE}&sort=${sort}`
        );
        if (res.status === 200) {
            const { items, totalPages } = res.data.data;
            setDataListProduct(items);
            setCategoryTotalPage(totalPages || 1);
            setIsLoading(false);
        }
    };

    const handleResetProductList = () => {
        setSelectedCategoryId(null);
        setCategorySort("");
        setCategoryPage(0);
        setFormData({
            page: 0,
            size: SIZE,
            sort: "",
        });
        fetchListProducts();
    };


    const fetchListProducts = async () => {
        const params = {
            page: formData.page,
            size: SIZE,
            sort: formData.sort,
        }
        try {
            setIsLoading(true);
            const res = await ApiService.GetListProduct("/client/products/list", params);
            if (res.status === 200) {
                const { items } = res.data.data;
                setDataListProduct(items);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSearchProduct = async () => {
        try {
            setIsLoading(true);
            const res = await ApiService.GetListProduct(`/client/products/list?products=name~${search}`);
            if (res.status === 200) {
                const { items } = res.data.data;
                setDataListProduct(items);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(dataListProduct, "dataListProduct");
    console.log(isLoading, "isLoading");
    console.log(category, "category");

    useEffect(() => {
        fetchListCategories()
    }, [])

    useEffect(() => {
        if (search) {
            fetchSearchProduct();
        } else {
            fetchListProducts();
        }
    }, [formData.sort, formData.page, search]);


    return (
        <>{
            dataListProduct && dataListProduct.length ? (
                <section className="pt-12 pb-12">

                    <div className='container'>
                        <div className="lg:grid grid-cols-5">
                            <div className="col-span-1 p-0 lg:p-4">
                                <div className="">
                                    <h2 className="text-lg font-semibold relative group cursor-pointer ">Danh mục
                                        {/* <div className="mt-4 space-y-3 absolute hidden bg-white shadow-lg p-3 rounded-md group-hover:flex gap-10  transition-all duration-300 transform scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 top-1"> */}
                                        {!search && (<div className='pl-3'>
                                            <button
                                                className={`mb-2 font-medium text-sm transition-all ${selectedCategoryId === null ? "text-black font-bold" : "text-lightGray hover:text-black"}`}
                                                onClick={handleResetProductList}
                                            >
                                                Tất cả sản phẩm
                                            </button>
                                            <ul>
                                                {category && category.map(item => (
                                                    <li key={item.id}>
                                                        <a
                                                            name={item.name}
                                                            onClick={() => handleCategory(item.id, 0)}
                                                            className={`font-medium text-sm transition-all ${selectedCategoryId === item.id
                                                                ? "text-black font-bold"
                                                                : "text-lightGray hover:text-black"
                                                                }`}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>)

                                        }

                                    </h2>

                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-semibold">Availability</h2>
                                    <ul className="mt-4 space-y-3">
                                        <li><a href="#none" className="font-medium text-black text-sm hover:text-black transition-all">In stock (16)</a></li>
                                        <li><a href="#none" className="font-medium text-lightGray text-sm hover:text-black transition-all">Out of stock (1)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-4 mt-6 lg:mt-0">
                                <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
                                    <select
                                        name="sort"
                                        className="w-full text-sm outline-none"
                                        value={selectedCategoryId ? categorySort : formData.sort}
                                        onChange={handleChange}
                                    >
                                        <option value="">Mặc định</option>
                                        <option value="price,asc">Tăng dần theo giá</option>
                                        <option value="price,desc">Giảm dần theo giá</option>
                                    </select>
                                </div>
                                {
                                    !isLoading ?
                                        (<ul className='lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0'>
                                            {
                                                dataListProduct.map(item => <Box_product key={item.id} item={item} />)
                                            }
                                        </ul>) : (
                                            <Backdrop
                                                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                                                open={true}
                                            >
                                                <CircularProgress color="inherit" />
                                            </Backdrop>)
                                }

                                {selectedCategoryId ? (
                                    <div className='mt-10 flex justify-center'>
                                        <Pagination
                                            count={categoryTotalPage}
                                            page={categoryPage + 1}
                                            onChange={(e, page) => handleCategory(selectedCategoryId, page - 1)}
                                        />
                                    </div>
                                ) : (
                                    <div className='mt-10 flex justify-center'>
                                        <Pagination
                                            count={13}
                                            onChange={(e, page) => (
                                                setFormData({
                                                    ...formData,
                                                    page: page - 1,
                                                })
                                            )}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>


            ) : (<div className='font-bold text-center text-[50px] h-[100px] mt-[30px]'>.....No Data....</div>)
        }

        </>

    )
}

export default MainProductList
