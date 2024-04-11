import React, { useContext, useState } from 'react'
import rating_starts from '../../assets/rating_starts.png'
import { StoreContext } from '../../context/StoreContext'
function FoodItemCard({ id, name, image, description, prise, category }) {
    
    

    const {AddToCart,RemoveFromCart,cartItems} = useContext (StoreContext)
    

    return (
        <div className='food-item-card'>
            <div className='img-container'>
                <img src={image} alt="" />

                {!cartItems[id]
                    ? <p className='add' onClick={() => {
                        AddToCart(id)
                    }
                    }>+</p>
                    : <div className='item-counter'>
                        <p className='moin count' onClick={() => {
                            RemoveFromCart(id)
                        }}>-</p>
                        <p className='number'>{cartItems[id]}</p>
                        <p className='add2 count' onClick={() => {
                            AddToCart(id)
                        }}>+</p>
                    </div>
                }
            </div>
            <div className="details">
                <div className="title">
                    <h1 className="category">{name}</h1>
                    <img src={rating_starts} alt="" />
                </div>
                <p className="description">{description}</p>
                <p className="prise">{prise}$</p>
            </div>
        </div>
    )
}

export default FoodItemCard
