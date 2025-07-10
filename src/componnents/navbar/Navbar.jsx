import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets.js'
import { StoreContext } from '../../context/StoreContext.jsx'
import LazyImage from '../LazyImage/LazyImage.jsx'

import Login from '../formPopUp/Login.jsx'
import { Link } from 'react-router-dom'


function navbar() {

  const [isactive, setisactive] = useState("Home")
  const [Modal, setModal] = useState(false);
  const { cartItems, getTotalCart } = useContext(StoreContext)

  const [showForm, setshowForm] = useState("")

  


  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <img src={assets.logo} alt="Logo" style={{ height: "25px" }} loading="lazy" />
        <ul className='list-item'>
          <Link to='/'><li onClick={() => setisactive("Home")} className={isactive === "Home" ? "active" : ""}>Home</li></Link>
          <Link ><li onClick={() => setisactive("menu")} className={isactive === "menu" ? "active" : ""}>menu</li></Link>
          <Link ><li onClick={() => setisactive("contact")} className={isactive === "contact" ? "active" : ""}>contact</li></Link>
          <Link ><li onClick={() => setisactive("about")} className={isactive === "about" ? "active" : ""}>about</li></Link>
        </ul>
        <div className='icons-btn'>
          <span className='icon-search'></span>

          <Link to='/cart'><span className='icon-cart'>
                <p className={getTotalCart() === 0 ?"none":"dot"}>.</p>
          </span></Link>

          <button className='button' onClick={() => {
            setshowForm("login")
            console.log(cartItems)
          }
          }>sign in</button>

          {

            showForm && (
              <Login setshowForm={setshowForm} showForm={showForm} />
            )
          }
        </div>
      </div>




      <div className="menudisplay">
        <button className='icon-menu' onClick={() => setModal(true)}></button>
        <div className='icons-btn'>
          <span className='icon-search'></span>

          <Link to='/cart'><span className='icon-cart'><p className='dot'>.</p></span></Link>

          <button className='button' onClick={() => {
            setshowForm("login")
            console.log(showForm)
          }
          }>sign in</button>

          {

            showForm && (
              <Login setshowForm={setshowForm} showForm={showForm} />
            )
          }
        </div>
      </div>
      {
        Modal && (
          <div className="fixed" onClick={() => setModal(false)}>
            <div className="modal">
              <ul className='modal-list-item'>
                <Link to='/'><li onClick={() => setisactive("Home")} className={isactive === "Home" ? "active" : ""}>Home</li></Link>
                <Link ><li onClick={() => setisactive("menu")} className={isactive === "menu" ? "active" : ""}>menu</li></Link>
                <Link ><li onClick={() => setisactive("contact")} className={isactive === "contact" ? "active" : ""}>contact</li></Link>
                <Link ><li onClick={() => setisactive("about")} className={isactive === "about" ? "active" : ""}>about</li></Link>
              </ul>
              <span className='icon-x' onClick={() => setModal(false)}></span>
            </div>

          </div>
        )
      }


    </div>
  )
}

export default navbar
