import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './cart.css'
function cart() {

  const { RemoveFromCart, cartItems, food_list, getTotalCart } = useContext(StoreContext)
  return (
    <div className='Cart-container'>
      <div className="cart-content">
        <div className="cart">
          <p>Items</p>
          <p>Title</p>

          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div key={index} className='cart'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>

                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}$</p>
                    <p className='icon-x' onClick={() => {
                      RemoveFromCart(item._id)
                    }
                    }></p>

                  </div>
                  <hr />
                </div>
              )
            }
          }
          )
        }
      </div>

      <div className='cart-total-promocode'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className='cart-total-content'>
            <p>Subtotal</p>
            <p>{getTotalCart()}$</p>
          </div>
          <hr />
          <div className='cart-total-content'>
            <p>Delivery fee</p>
            <p>3$</p>
          </div>
          <hr />
          <div className='cart-total-content'>
            <p>Total</p>
            <p>{getTotalCart() + 3}$</p>
          </div>
          <hr />

          <button>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
          <p>if you have promo code enter it here.</p>
          <div className="input-promo">
            <input type="text" placeholder='Promo code'/>
            <button>Enter</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default cart
