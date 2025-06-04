import { useSelector,useDispatch } from "react-redux";
import type { RootState } from "../Redux/Store/Store";
import { useEffect, useState } from "react";
import { countUpdate, updateQuantity } from "../Redux/Reducer/CartSlice";
import { removeItem,} from "../Redux/Reducer/CartSlice";
import { BsFillCartXFill } from "react-icons/bs";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [total,setTotal] = useState(0)
  // const [quantityValue,setQuantityValue] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(countUpdate());
  }, [items])
  


  useEffect(() => {
     const totalprice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
     setTotal(totalprice)

  }, [items])

  const handleIncrease=(itemId: string,newQuantity: number, stocks: number)=>{
    if(stocks>0){
       dispatch(updateQuantity({itemId, newQuantity,operation:"increase"}));
    }
    else{
      alert("Item Out of Stock!")
    }
    

  }
  const handleDecrese=(itemId:string, newQuantity: number,stocks:number)=>{
    if(stocks>0 || newQuantity>0){
      if(newQuantity>1){
        newQuantity=newQuantity-1;
        dispatch(updateQuantity({itemId,newQuantity,operation:"decrease"}))

      }    
    }
  }
  const handleRemove=(id:string)=>{
    dispatch(removeItem(id));

  }
  
  if (items.length === 0) {
    return (
      <div className="w-full mt-20 text-xl text-gray-600 flex flex-col items-center justify-center gap-2">
        <BsFillCartXFill className='size-1/5 text-blue-950' />
        <div>Your cart is empty. Start Purchasing!</div>
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
            <div className="flex flex-col gap-0 justify-center px-6 py-4 space-y-2 sm:space-y-3 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-green-600 font-bold text-lg">Price: ₹{item.price}</p>
              <div className="flex flex-row w-full gap-4 justify-center sm:justify-start ">
                   <p className="font-semibold text-gray-700 text-lg">Rating: {item.rating} ★</p> |
                   <p className="font-semibold text-gray-700 text-lg">Stock: {item.stock}</p>
              </div>
              <div className="flex flex-row w-full gap-4 justify-center sm:justify-start">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>handleDecrese(item.id,item.quantity,item.stock)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                        aria-label="Decrease quantity">-
                      </button>
                      <div className="w-8 text-center font-medium text-gray-800 select-none">{item.quantity}</div>
                      <button onClick={()=>handleIncrease(item.id,item.quantity+1,item.stock)} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                        aria-label="Increase quantity">+</button>
                   </div>
                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md transition-all" onClick={()=>handleRemove(item.id)}>Reove Item</button>
              </div>
              
              
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 text-xl font-bold">Total Price : {total.toFixed(2)} </div>
    </div>
  );
};

export default Cart;

