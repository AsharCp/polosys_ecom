import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer/CartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/Store/Store";

const View = () => {
  const location = useLocation();
  const { itemData } = location.state || {};
  const dispatch =useDispatch();
  const [newQuantity, setnewQuantity] = useState(1)
  const navigate = useNavigate();
  const { items } = useSelector((state:RootState)=>state.products)
  const category = itemData ? itemData.category:undefined;

  // console.log(category)
  const relatedProducts = items.filter((product)=>product.category===category); 
  const related = relatedProducts.slice(0,8);

  const handleAddToCart=()=>{
    dispatch(addToCart({...itemData,quantity: 1,}));
    navigate('/cart')
  }
console.log(itemData,"itemData"); 

  const clickDecrease=()=>{
    if(newQuantity!==1)
    {
      setnewQuantity(newQuantity-1)
      itemData.stock=itemData.stock+1
    }
  }
  const clickIncrease=()=>{
    if(itemData.stock>1){
      setnewQuantity(newQuantity+1)
      itemData.stock=itemData.stock-1;
    }
    else{
      alert("Out of stock")
    }
    
    
  }



  if (!itemData) {
    return <div className="text-center py-8 text-lg text-red-500">No data available.</div>;
  }

  return (
    <div className="w-full flex items-center justify-center flex-col py-8 min-h-screen bg-gray-50">
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
          <div className="text-sm text-gray-600">Stock: <span className="font-medium">{itemData.stock-1}</span></div>
          <div className="text-sm text-yellow-600 font-medium">Rating: {itemData.rating}★</div>
          <div className="flex items-center gap-2">
              <button onClick={clickDecrease} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Decrease quantity">-
              </button>
              <div className="w-8 text-center font-medium text-gray-800 select-none">{newQuantity}</div>
              <button onClick={clickIncrease} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Increase quantity">+</button>
          </div>

          

          <button onClick={handleAddToCart} className="mt-4 bg-blue-600  text-white px-4 py-2 rounded-md hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-3xl font-bold text-center py-12 text-gray-800">
  Related Products
</div>


<div className="w-full px-4 py-6 flex flex-wrap gap-6 justify-center ">
  {related.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 w-[160px] flex flex-col items-center text-center"
    >
      <img
        src={item.thumbnail}
        alt="related"
        className="h-32 w-32 object-cover rounded-lg mb-3"
      />
      <div className="w-full text-sm font-semibold text-gray-700 truncate">
        {item.title}
      </div>
      <div className="text-sm text-gray-500 mt-1">₹{item.price}</div>
    </div>
  ))}
</div>

    </div>
  );
};

export default View;
