import React from 'react'
import logo from "../../assets/images/logo.png"
import ico_search from "../../assets/images/ico_search.png"
import ico_heart from "../../assets/images/ico_heart.png"
import ico_user from "../../assets/images/ico_user.png"
import ico_bag from "../../assets/images/ico_bag.png"
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const ListMenu = [
        {
            title: "Home",
            to: "/"
        },
        {
            title: "Product",
            to: "product"
        },
        {
            title: "Profile",
            to: "profile"
        }
    ]
    return (
        <header className='py-5 lg:py-8 sticky top-0 z-10 bg-white shadow-lg'>
            <div className='container flex items-center'>
                <h1 className='flex-shrink-0 mr-5'>
                    <Link className='block max-w-[130px]' to={"/"}>
                        <img className=' object-contain max-w-full h-[40px]' src={logo} alt="Nike" />
                    </Link>
                </h1>

                <div className='relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block'>
                    <input
                        type="text"
                        placeholder='Search....'
                        className='w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-blue-500 focus:border-transparent'
                    />
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <span>
                            <img className='size-5' src={ico_search} alt="" />
                        </span>
                    </div>
                </div>

                <nav className='mr-28 hidden lg:block m1-auto'>
                    <ul className='flex items-center gap-10'>
                        {
                            ListMenu.map((item) => (
                                <NavLink>

                                </NavLink>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header
