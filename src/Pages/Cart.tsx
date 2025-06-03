import { useSelector } from "react-redux";
import type { RootState } from "../Redux/Store/Store";
import { useEffect, useState } from "react";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [total,setTotal] = useState(0)

  useEffect(() => {
     const totalprice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
     setTotal(totalprice)

  }, [items])
  
  if (items.length === 0) {
    return (
      <div className="w-full text-center mt-20 text-xl text-gray-600">
        Your cart is empty.
      </div>
    );
  }
  

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 bg-gray-50 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-900">Your Cart</h1>
      <div className="w-full max-w-5xl space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full sm:w-44 h-44 object-contain p-6 bg-gray-100"
            />
            <div className="flex flex-col justify-center px-6 py-4 space-y-2 sm:space-y-3 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-green-600 font-bold text-lg">Price: ₹{item.price}</p>
              <p className="font-semibold text-gray-700 text-lg">Rating: {item.rating} ★</p>
              <p className="font-semibold text-gray-700 text-lg">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">Total Price : {total} </div>
    </div>
  );
};

export default Cart;
