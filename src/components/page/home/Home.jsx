import React, { useEffect } from 'react'
import Banner from '../../banner/Banner'
import Services from '../../services/Services'
import OurCategory from '../../ourCategory/OurCategory'
import BestSeller from '../../bestSeller/BestSeller'
import ExperienceTheBest from '../../experienceTheBest/ExperienceTheBest'
import NewArrivalsProduct from '../../newArrivalsProduct/NewArrivalsProduct'
import ApiService from '../../../services/ApiService'
import { useDispatch } from 'react-redux'
import { ListCategory } from '../../../store/categoriesSlice'
import { bestSeller, newArrivals } from '../../../store/productSlice'

const Home = () => {
    const dispatch = useDispatch();
    const fetchListCategories = async () => {
        try {
            const res = await ApiService.Get("/client/categories/list");
            if (res.status === 200) {
                dispatch(ListCategory(res.data.data))
            }
        } catch (error) {
            console.log(error);
        }
    }
    const fetchListProducts = async () => {
        try {
            const res = await ApiService.Get("/client/products/list");
            if (res.status === 200) {
                const { items } = res.data.data;
                dispatch(bestSeller(items.slice(0, 4)));
                dispatch(newArrivals(items.slice(5, 9)));
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchListCategories()
        fetchListProducts()
    }, [])
    return (
        <>
            <Banner />
            <Services />
            <OurCategory />
            <BestSeller />
            <ExperienceTheBest />
            <NewArrivalsProduct />
        </>
    )
}

export default Home
