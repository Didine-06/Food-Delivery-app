import React, {useContext} from 'react'
import './menu.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItemCard from './FoodItemCard'


function Menu({category}) {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-item-container'>
        <h1>Top dishes near you</h1>

        <div className='food-item-content'>
           {
            food_list.map((item,index) => {

              if(category==="all" || category===item.category){
                return <FoodItemCard key={index} id={item._id} name={item.name} image={item.image} prise={item.price} description={item.description} category={item.category} />
              }
            })}
        </div>

      
    </div>
  )
}

export default Menu
