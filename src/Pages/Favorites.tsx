import { useSelector } from "react-redux"
import type { RootState } from "../Redux/Store/Store"
import { Link } from "react-router-dom"
import type { Product } from "../Redux/Reducer/ProductSlice"
import { useDispatch } from "react-redux"
import { updateFavorite } from "../Redux/Reducer/FavSlice"

const Favorites = () => {
    const dispatch = useDispatch()
    const unFavorite=(unProduct:Product)=>{
        dispatch(updateFavorite({newItem:unProduct,type:"remove"}))

    }
    const favoriteItems  = useSelector((state:RootState)=>state.fav.favItems)
    console.log(favoriteItems,"This is")
    
  return (
    <div className="h-fit w-[95%] flex flex-wrap gap-8 items-center justify-center mt-8 mb-40">
        {favoriteItems.map((item)=>(
            <Link to="/view" key={item.id} className="relative w-1/3 md:w-1/5 h-fit text-center shadow hover:shadow-2xl rounded-lg">
            <div onClick={(e)=>{unFavorite(item)
                e.preventDefault()
                e.stopPropagation();
            }} className="absolute top-2 right-2 text-white bg-red-500 transition rounded-full px-2" >-</div>
            <img src={item.thumbnail} alt="item" className="mx-auto" />
            <div className="font-semibold text-md pt-2">{item.title}</div>
            <div className="flex flex-row m-2 gap-2 justify-center">
            <div className="bg-green-700 text-white w-fit px-2 rounded-sm">{item.rating}★</div>
            <div className="font-semibold">₹{item.price}</div>
         </div>
      </Link>


        ))}
    </div>
  )
}

export default Favorites