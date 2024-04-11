import React, {useState,useEffect} from 'react'
import Navbar  from './componnents/navbar/Navbar.jsx'
import {Routes, Route } from 'react-router-dom'
import Homme from './Pages/Homme/Homme'
import Cart from './Pages/cart/Cart'
import Footer from './componnents/footer/Footer.jsx'

function App() {
  const [showscrol, setshowscrol] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowscrol(true)
      } else {
        setshowscrol(false)
      }
    })
  }, []);
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homme />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

      <button className='icon-arrow scrollbtn' style={{ opacity: showscrol ? 1 : 0, transition: "0.7s" }} onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      }></button>
    </div>
  )
}

export default App
