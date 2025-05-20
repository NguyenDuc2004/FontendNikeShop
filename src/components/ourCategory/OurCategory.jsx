import React from 'react'
import { useSelector } from 'react-redux'
import { avatarFake } from '../../helpers/Constants';

const OurCategory = () => {
  const { OurCategory } = useSelector((state) => state.categoriesSlice);
  return (
    <section className="mt-9 lg:mt-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Danh mục của chúng tôi</h2>

        <ul className="md:grid grid-cols-4 gap-10 mt-11">
          {
            OurCategory.slice(0, 4).map((item, index) => (
              <li className="mt-6 md:mt-0" key={item.name}>
                <div className="rounded-[20px] overflow-hidden relative group">
                  <img className="image" src={avatarFake[index]} alt="" />
                  <a
                    href="#none"
                    className="absolute w-[150px] text-center group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default OurCategory
