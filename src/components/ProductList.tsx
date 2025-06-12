
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts, type Product } from '../Redux/Reducer/ProductSlice';
import { useEffect, useState } from 'react';
import type { AppDispatch, RootState } from '../Redux/Store/Store';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { updateFavorite } from '../Redux/Reducer/FavSlice';
import { addToCart } from '../Redux/Reducer/CartSlice';
import { useNavigate } from 'react-router-dom';
// import { setSelectedProduct } from '../Redux/Reducer/ViewSlice';
// import { useNavigate } from 'react-router-dom';



const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items,loading } = useSelector((state:RootState)=>state.products);
    const query = useSelector((state: RootState)=>state.search.query)
    const selectedItems  = useSelector((state:RootState)=>state.selected.selectedItems)
    const ProductPerPage = 8;
    const [currentPage,setCurrentPage] = useState(1);
    const [clickHeart, setClickHeart] = useState(false)
    // const [newQuantity, setnewQuantity] = useState(1)
    const [quantity,setQuantity] = useState<{[key:number]:number}>({})
    // const [localStock,setLocalStock] = useState<{[key:number]:number}>({})
    const navigate = useNavigate();

    const totalPages = Math.ceil(items.length/ProductPerPage);
    const startIndex = (currentPage-1)*ProductPerPage;
    const currentProducts = items.slice(startIndex,startIndex+ProductPerPage); 

    const filteredProduct = query ? items.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
      ) : selectedItems.length > 0 ? items.filter(product => {
        // console.log("Product category:", product.category);
        return selectedItems.includes(product.category.toLowerCase());
      }) : currentProducts;

    const handleNext =()=> setCurrentPage((Prev)=>Math.min(Prev+1,totalPages))
    const handlePrev =()=> setCurrentPage((Prev)=>Math.max(Prev-1,1))

    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch])

    const AddToFavorite =(favProducts: Product) =>{
      setClickHeart(true)
      dispatch(updateFavorite({newItem: favProducts,type:"add"}))

    }

    const handleAddToCart=(itemData: Product)=>{
       const productQuantity = quantity[itemData.id] || 2 ;
      //  const productstock = localStock[itemData.id]
        dispatch(addToCart({...itemData,quantity: productQuantity}));
        navigate('/cart')
      }
    
      const clickDecrease=(itemData:Product)=>{
          setQuantity((prev)=>({
              ...prev,
              [itemData.id]:Math.max(prev[itemData.id ||1 ]-1,1)
          }))
          // setnewQuantity(newQuantity-1)
          // itemData.quantity=itemData.quantity+quantity;
          itemData.stock=itemData.stock+1
        // }
      };
      const clickIncrease=(itemData: Product)=>{
        const currentQuantity = quantity[itemData.id] || 1;
        // const currentStock = itemData.stock;
        if (itemData.stock > currentQuantity) {
          // itemData.stock=itemData.stock-1;
          setQuantity((prev) => ({
            ...prev,
            [itemData.id]: currentQuantity + 1
          }));
          // setLocalStock((prev)=>({
          //   ...prev,
          //   [itemData.id]:currentStock-1
          // }))
        } else {
          alert("Out of stock");
        }
          
          // setnewQuantity(newQuantity+1)
          // itemData.quantity=itemData.quantity-newQuantity
          

        // // else{
        // //   alert("Out of stock")
        // }
        
        
      }
    
   if (loading) return <p>Loading products...</p>;
   
  return (
    <>
    
    <div className="h-fit w-[95%] flex flex-wrap gap-8 items-center justify-center">
        {filteredProduct.map((product)=>(
            <Link to="/view" state={{ itemData: product }} key={product.id} className="relative w-1/3 md:w-1/5 h-fit text-center shadow hover:shadow-2xl rounded-lg">
            {clickHeart}<FaHeart onClick={(e)=>{
              e.preventDefault();
              e.stopPropagation();
              AddToFavorite(product)}} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
            />
            <img src={product.thumbnail} alt="product" className="mx-auto" />
            <div className="font-semibold text-md pt-2">{product.title}</div>
            <div className="flex flex-row m-2 gap-2 justify-center">
            <div className="bg-green-700 text-white w-fit px-2 rounded-sm">{product.rating}★</div>
            <div className="font-semibold">₹{product.price}</div>
            <div className="font-semibold text-green-700">{product.stock-quantity[product.id ] || product.stock}</div>
         </div>
         <div className='flex flex-col items-center py-2'>
         <div className="flex items-center">
              <button onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                clickDecrease(product)

              }} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Decrease quantity">-
              </button>
              <div className="w-8 text-center font-medium text-gray-800 select-none">{quantity[product.id] || 1}</div>
              <button onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                clickIncrease(product)

              }} className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md text-lg font-bold text-gray-700 hover:bg-gray-300 transition"
                aria-label="Increase quantity">+</button>
          </div>
          <button onClick={(e)=> {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart(product)
          }
            } className="mt-2 bg-blue-600  text-white px-4 py-2 rounded-md hover:bg-green-700">
              Add to Cart
            </button>
          </div>
      </Link>

        ))}
        
    </div>
    {query ?<div></div>:
    <div className="flex items-center justify-center gap-4 my-10">
  <button
    onClick={handlePrev}
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    disabled={currentPage === 1}>Prev</button>

  <div className="text-lg font-semibold text-gray-700">
    Page <span className="text-blue-600">{currentPage}</span> of {totalPages}
  </div>

  <button
    onClick={handleNext}
    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    disabled={currentPage === totalPages}>Next</button>
    </div> }

    
    </>
  )
}

export default ProductList