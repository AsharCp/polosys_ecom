
import { useSelector,useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/Reducer/ProductSlice';
import { useEffect, useState } from 'react';
import type { AppDispatch, RootState } from '../Redux/Store/Store';
import { Link } from 'react-router-dom';
// import { setSelectedProduct } from '../Redux/Reducer/ViewSlice';
// import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items,loading } = useSelector((state:RootState)=>state.products);
    const ProductPerPage = 8;
    const [currentPage,setCurrentPage] = useState(1);
    // const navigate = useNavigate();
    
    const totalPages = Math.ceil(items.length/ProductPerPage);
    const startIndex = (currentPage-1)*ProductPerPage;
    const currentProducts = items.slice(startIndex,startIndex+ProductPerPage); 

    const handleNext =()=> setCurrentPage((Prev)=>Math.min(Prev+1,totalPages))
    const handlePrev =()=> setCurrentPage((Prev)=>Math.max(Prev-1,1))

    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch])
    
   if (loading) return <p>Loading products...</p>;
   
  return (
    <>
    <div className="h-fit w-[95%] flex flex-wrap gap-8 items-center justify-center">
        {currentProducts.map((product)=>(
            <Link to='/view' state={{itemData:product}} key={product.id} className="w-1/3 md:w-1/5 h-fit text-center shadow hover:shadow-2xl rounded-lg" >
                <img src={product.thumbnail} alt='product'></img>
                <div className='font-semibold text-md pt-2'>{product.title}</div>
                <div className='flex flex-row m-2 gap-2 justify-center'>
                    <div className='bg-green-700 text-white w-fit px-2 rounded-sm'>{product.rating}★</div>
                    <div className='font-semibold'>₹{product.price}</div>
                </div>
                
            </Link>

        ))}
    </div>
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
    </div>

    
    </>
  )
}

export default ProductList