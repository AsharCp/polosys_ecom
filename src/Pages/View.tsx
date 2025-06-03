import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer/CartSlice";
import { useState } from "react";

const View = () => {
  const location = useLocation();
  const { itemData } = location.state || {};
  const dispatch =useDispatch();
  const [newQuantity, setnewQuantity] = useState(1)

  const handleAddToCart=()=>{
    dispatch(addToCart({...itemData,quantity: newQuantity,}));
  }

  const clickDecrease=()=>{
    if(newQuantity!==1)
    {
      setnewQuantity(newQuantity-1)
    }
  }
  const clickIncrease=()=>{
    if(itemData.stock>newQuantity){
      setnewQuantity(newQuantity+1)
    }
    
    
  }


  if (!itemData) {
    return <div className="text-center py-8 text-lg text-red-500">No data available.</div>;
  }

  return (
    <div className="w-full flex items-center justify-center py-8 min-h-screen bg-gray-50">
      <div className="w-[90%] max-w-5xl bg-white flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <img
            src={itemData.thumbnail}
            alt={itemData.title}
            className="max-h-72 object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h1 className="text-2xl font-bold">{itemData.title}</h1>
          <p className="text-gray-700">{itemData.description}</p>
          <div className="text-xl font-semibold text-green-700">₹{itemData.price}</div>

          <div className="text-sm text-gray-600">Brand: <span className="font-medium">{itemData.brand}</span></div>
          <div className="text-sm text-gray-600">Stock: <span className="font-medium">{itemData.stock}</span></div>
          <div className="text-sm text-yellow-600 font-medium">Rating: {itemData.rating}★</div>
          <div className="flex items-center gap-2">
              <button onClick={clickDecrease} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Decrease quantity">-
              </button>
              <div className="w-8 text-center font-medium text-gray-800 select-none">{newQuantity}</div>
              <button onClick={clickIncrease} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Increase quantity">+</button>
          </div>

          

          <button onClick={handleAddToCart} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
