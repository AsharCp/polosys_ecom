import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Footer from "./components/Footer"

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
       </Routes>
       <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App

// https://polo-sys-eco.vercel.app/home
