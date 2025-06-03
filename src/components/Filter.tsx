import { useState } from "react"
import { FaFilter } from "react-icons/fa6";

const Filter = () => {
  const [filterBox, setfilterBox] = useState(true)

  return (
    <div className="w-[85%] flex justify-center my-2">
      {filterBox ? (
        <div className="flex flex-row justify-between w-[95%]">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all" onClick={()=>setfilterBox(false)}>FILTER</button>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">SORT</button>
        </div>
      ) : (
        <div className="w-[95%] shadow-md rounded  flex flex-row justify-between items-center">
          <div className="px-2 py-2 font-bold mr-2 rounded-sm my-2 flex flex-wrap gap-4">
            <label><input type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />Accessories</label>
            <label><input type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />Food</label>
            <label><input type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />Fruits</label>
            <label><input type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />Watch</label>
            <label><input type="checkbox" className="border px-4 rounded border-gray-200 mr-2" />Perfumes</label>
          </div>
          <div>
            <button onClick={() => setfilterBox(true)} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all">APPLY</button>
          
          </div>
          
        </div>
      )}
    </div>
  )
}

export default Filter
