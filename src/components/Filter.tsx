import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchProduct } from "../Redux/Reducer/SearchSlice"
import { selectedProducts } from "../Redux/Reducer/FilterSlice"

const Filter = () => {
  const [filterBox, setfilterBox] = useState(true)
  const [selected, setSelected] = useState<string[]>([])
  // const [searchItem, setsearchItem] = useState('')
  let updatedSelected: string[];
  const dispatch = useDispatch();

  const handleSearch =(searchValue: string)=>{
    dispatch(searchProduct(searchValue))

  }
  const categories = ["beauty", "fragrances", "furniture", "groceries"];
  const handleCategory=(category: string, checked: boolean)=>{
      
      if (checked) {
        // Add category if checked and not already in selected
        updatedSelected = [...selected, category];
      } else {
        // Remove category if unchecked
        updatedSelected = selected.filter(item => item !== category);
      }
      setSelected(updatedSelected);
      dispatch(selectedProducts(updatedSelected));
      console.log(updatedSelected);
  }
  const handleApply=()=>{
    setfilterBox(true)
    setSelected([])
    dispatch(selectedProducts([]))
    
  }
  


  return (
    <div className="w-[85%] flex justify-center flex-col items-center my-2">
      <input onChange={(e)=>handleSearch(e.target.value)} type='text' className='w-2/3 h-8 border border-gray-200 rounded hover:shadow-md outline-none p-4' 
      spellCheck={false} placeholder="Search Products" ></input>
      {filterBox ? (
        <div className="flex flex-row justify-between w-[95%]">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all" onClick={()=>setfilterBox(false)}>FILTER</button>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">SORT</button>
        </div>
      ) : (
        <div className="w-[95%] shadow-md rounded flex flex-row justify-between items-center text-center">
          <div className="px-2 py-2 font-bold mr-2 rounded-sm my-2 flex flex-wrap gap-4">
            {categories.map(category=>(
              <label key={category}><input checked={selected.includes(category)} 
              onChange={(e)=>handleCategory(category,e.target.checked)} type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />{category}</label>
            ))}
          </div>
          <div className="mr-2">
            <button onClick={() => handleApply()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">CLOSE</button>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default Filter
