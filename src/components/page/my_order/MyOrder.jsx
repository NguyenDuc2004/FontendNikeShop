import React, { useEffect, useState } from 'react'
import ApiService from '../../../services/ApiService';
import toast from 'react-hot-toast';

const MyOrder = () => {
  const userId = localStorage.getItem('userId');
  console.log("userId",userId)
  const [myOrder, setMyOrder] = useState([]);
  const fetchMyOrder = async () => {
    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }
    try {
      const res = await ApiService.getOrder( `/client/orders/list/${userId}`); // Thay đổi URL theo API của bạn
     if(res.status === 200) {
        const data = res.data.data.items;
        setMyOrder(data);
        console.log(data, "myOrder");
        // Xử lý dữ liệu đơn hàng ở đây
      }
    }catch(error) {
      console.error('Error fetching my orders:', error);
    }
  }
  console.log("myOrder", myOrder);
  
  const handleCancelOrder = async (orderId) => {
    try {
      const res = await ApiService.DeleteOrder(`/client/orders/cancel/${orderId}`);
      if(res.status === 200) {
        toast.success("Đơn hàng đã được hủy thành công");
        // Cập nhật lại danh sách đơn hàng sau khi hủy
        fetchMyOrder();
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  useEffect(() => {
  if(userId){
    fetchMyOrder();
  }    
  }, []);

  return (
     <section className="pt-16 pb-8 bg-gray">
            <div className="container">
                <div className="lg:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold">Đơn hàng của bạn</h2>
                        
                    </div>
                   
                </div>

                <ul className="mt-8  gap-7 flex flex-col">
                    {
                        myOrder.length > 0 ? myOrder.map((item) => (
                            <li key={item.id} className="border p-4 rounded-lg flex flex-row gap-[100px] items-center">
                              <div>
                                <h3 className="text-xl font-semibold">Đơn hàng {item.id}</h3>
                                <p className="text-gray-600">Ngày đặt: {new Date(item.createdAt).toLocaleDateString()}</p>
                                <p className="text-gray-600">Tổng tiền: {item.totalPrice} VND</p>
                                <p className="text-gray-600">Trạng thái: {item.status}</p>
                              </div>

                              <div>
                                <h4 className="mt-4 font-semibold mb-2">Chi tiết sản phẩm:</h4>
                                <ul className="list-disc pl-5">
                                  {item.products.map((product) => (
                                    <li key={product.id} className="text-gray-600">
                                      <img width={"100px"} src={product.imageUrl.split(',')[0]} alt="" />
                                      {product.productName} - {product.quantity} x {product.price} VND
                                    </li>
                                  ))}
                                </ul>
                              </div>
                                <button 
                                className='bg-blue-500 w-[100px] h-[50px] rounded-xl hover:bg-red-600'
                                onClick={() => handleCancelOrder(item.id)} 
                                >Hủy</button>
                            </li>
                        )) : <p>Không có đơn hàng nào.</p>
                    }
                </ul>
            </div>
        </section>
  )
}

export default MyOrder
