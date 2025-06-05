import React, { useEffect, useState } from 'react'
import ico_trash from "../../../assets/images/ico_trash.png"
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import ApiService from '../../../services/ApiService'
import toast from 'react-hot-toast'
import { addToCart } from '../../../store/cartSlice'

const ShoppingCart = () => {
  const { isLogin } = useSelector((state) => state.authenSlice);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const fetchApiCart = async () => {
    const suffixUrl = "/client/carts/get"; // Đường dẫn API get cart
    try {
      const res = await ApiService.GetCart(suffixUrl);
      console.log(res, "res get cart");
      if (res.status === 200) {
        const { data } = res.data; // Lấy dữ liệu từ response
        setCart(data || []);// Lưu dữ liệu vào state
        dispatch(addToCart(data)); // Lưu dữ liệu vào Redux store
        localStorage.setItem("cartItems", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Lỗi khi gửi POST request:", error);
    }
  }
  console.log(cart, "cart");

  const handleAddToCart = async (item) => {
    const suffixUrl = "/client/carts/add"; // Đường dẫn API
    console.log(item, "item");
    const formData = {
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image[0],
    };
    console.log(formData, "formData");

    try {
      const res = await ApiService.PostAddCart(suffixUrl, formData);
      console.log("PostAddCart response:", res); // Log phản hồi từ API
      if (res.status === 200) {
        toast.success("+1", {
          duration: 1000,
        });
        fetchApiCart();
      } else {
        toast.error("Thêm vào giỏ hàng thất bại", {
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi POST request:", error);
    }
  };

  const handleRemoveCart = async (productId) => {
    const suffixUrl = "/client/carts/remove";

    try {
      const res = await ApiService.DeleteCart(suffixUrl, productId);
      console.log(res, "res remove cart");
      if (res.status === 200) {
        toast.success("Xóa sản phẩm khỏi giỏ hàng thành công", {
          duration: 1000,
        });

        fetchApiCart(); // Gọi lại hàm để cập nhật giỏ hàng
      } else {
        toast.error("Xóa sản phẩm khỏi giỏ hàng thất bại", {
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi POST request:", error);
    }
  }
  const handleReduceFormCart = async (item) => {
    const suffixUrl = "/client/carts/add"; // Đường dẫn API
    console.log(item, "item");

    const formData = {
      productId: item.productId,
      name: item.name,
      price: item.price,
      quantity: -1,
      image: item.image,
    };
    console.log(formData, "formData");

    try {
      const res = await ApiService.PostAddCart(suffixUrl, formData);
      console.log("PostAddCart response:", res); // Log phản hồi từ API
      if (res.status === 200) {
        toast.success("-1", {
          duration: 1000,
        });
        fetchApiCart();
      } else {
        toast.error("Thêm vào giỏ hàng thất bại", {
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi POST request:", error);
    }
  }

  const mergeCartAfterLogin = async () => {
    if (!isLogin) return;

    const sessionId = localStorage.getItem("sessionId");
    const userId = localStorage.getItem("userId");

    // Kiểm tra sessionId và userId
    if (!sessionId || !userId) {
      console.error("Thiếu sessionId hoặc userId");
      toast.error("Không thể gộp giỏ hàng. Vui lòng thử lại.");
      return;
    }

    const suffixUrlMergeToRedis = "/client/carts/mergeToRedis"; // Đường dẫn API
    const suffixUrlMergeToDB = "/client/carts/mergeToDb"; // Đường dẫn API

    try {
      const res2 = await ApiService.PostMergeToRegisAndDB(suffixUrlMergeToDB,
        {
          userId,
          sessionId
        });
      if (res2.status !== 200) {
        console.error("Lỗi khi merge vào DB:", res2);

        return;
      }
      console.log("Kết quả mergeToDb:", res2.data);

      // Gọi API mergeToRedis
      const res1 = await ApiService.PostMergeToRegisAndDB(suffixUrlMergeToRedis, {
        userId,
        sessionId
      });
      if (res1.status !== 200) {
        console.error("Lỗi khi merge vào Redis:", res1);
        return;
      }
      console.log("Kết quả mergeToRedis:", res1.data);

      // Gọi API mergeToDb sau khi mergeToRedis thành công


      // Gọi lại API để cập nhật giỏ hàng
      await fetchApiCart();
      // localStorage.removeItem("sessionId");
    } catch (error) {
      console.error("Lỗi khi gộp giỏ hàng:", error);
      toast.error("Đã xảy ra lỗi khi gộp giỏ hàng. Vui lòng thử lại.");
    }
  };

  useEffect(() => {
    if (isLogin) {
      mergeCartAfterLogin()
    }
  }, [isLogin]);
  console.log(isLogin)

  useEffect(() => {
    fetchApiCart()
  }, []);
  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Giỏ hàng</h2>

          <div className="container">
            <div className="grid grid-cols-6 mt-10 gap-8">
              <div className="col-span-4">
                <table className='border border-1px border-solid'>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Tổng</th>

                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(cart) && cart.length > 0 ? (
                      cart.map((item) => (
                        <tr key={item.productId}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="w-32 overflow-hidden">
                                <img className="image" src={item.image.split(",")[0]} alt="" />
                              </div>
                              <div>
                                <p className="text-xs uppercase">{item.name}</p>
                                <span className="text-xs">{item.price.toLocaleString('vi-VN')} đ</span>
                                <p className="text-xs">size:42 </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className=" border border-1px border-solid rounded  flex w-full items-center relative justify-center ">
                              <button
                                className={` text-lg block text-[0px] absolute left-4 ${item.quantity === 1 ? "opacity-20" : ""
                                  }`}
                                onClick={() => handleReduceFormCart(item)}
                                type="button"
                                disabled={item.quantity === 1}
                              >
                                <span className="text-2xl leading-[24px] inline-block w-[30px]">-</span>
                              </button>
                              {item.quantity}
                              <button
                                type="button"
                                className=" text-lg block text-[0px] absolute right-4"
                              >
                                <span
                                  className="text-2xl leading-[24px] inline-block w-[30px]"
                                  onClick={() => handleAddToCart(item)}
                                >
                                  +
                                </span>
                              </button>
                            </div>
                          </td>
                          <td>{(item.price * item.quantity).toLocaleString('vi-VN')} đ</td>
                          <td>
                            <button type="button" onClick={() => handleRemoveCart(item.productId)}>
                              <img className="block size-5" src={ico_trash} alt="" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          Giỏ hàng trống
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="mt-9">
                  <p className="text-md">Chú thích</p>

                  <textarea name="" id="" placeholder="Tôi có thể giúp gì cho bạn?" className="text-md mt-3 border border-gray p-5 w-full" rows="5"></textarea>
                </div>
              </div>
              <div className="col-span-2">
                <div className="p-7 bg-[#f7f4ef] rounded-lg">
                  <h3 className="uppercase font-medium text-sm">FREE SHIPPING ON ORDERS $100.00</h3>
                  <p className="text-sm mt-2">Congratulations , you've got free shipping!</p>
                  <p className="bg-[#14c100] w-full h-1 mt-5"></p>
                </div>

                <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                  <span>Coupon</span>
                  <p className="mt-2 mb-6 text-md text-lightGray">* Discount will be calculated and applied at checkout</p>
                  <input type="text" className="h-10 px-6 text-sm border border-gray rounded-md w-full" placeholder="Coupon code" fdprocessedid="eg5plx" />
                  <p className="mt-6 font-semibold">Total: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString('vi-VNVN')} đ</p>
                  <Link to={"/order"} className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all">
                    Thanh toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className="pt-12 pb-12"></section>
    </>
  )
}

export default ShoppingCart
