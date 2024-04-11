import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
function ExploreMenu({ isactive, setisactive }) {

    return (
        <div className='explore-menu'>
            <h1>Explore our menu</h1>
            <p>Choose from menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experinece, one delicious meal at a time.</p>

            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (

                        <div key={index} className='menu-list' onClick={() => {
                            setisactive(prev => prev === item.menu_name ? "all" : item.menu_name)
                        }
                        }>
                            <img src={item.menu_image} alt="" className={isactive === item.menu_name ? "active" : ""} />
                            <p>{item.menu_name}</p>
                        </div>

                    )
                })}

            </div>
            <hr className='hr' />
        </div>
    )
}

export default ExploreMenu
