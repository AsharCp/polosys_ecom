import Filter from "../components/Filter"
import ProductList from "../components/ProductList"


const Home = () => {
  return (
    <div className='h-fit max-w-screen flex flex-col items-center mt-8'>
      <Filter/>
      <ProductList/>
    </div>
  )
}

export default Home