import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Footer from "./components/Footer"
import View from "./Pages/View"
import Favorites from "./Pages/Favorites"
import Help from "./Pages/Help"

function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
       <Routes>
           <Route path="/" Component={Home}></Route>
           <Route path="/about" Component={About}></Route>
           <Route path="/contact" Component={Contact}></Route>
           <Route path="/cart" Component={Cart}></Route>
           <Route path="/view" Component={View}></Route>
           <Route path="/fav" Component={Favorites}></Route>
           <Route path="/help" Component={Help}></Route>
       </Routes>
       <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App

// https://polo-sys-eco.vercel.app/home
