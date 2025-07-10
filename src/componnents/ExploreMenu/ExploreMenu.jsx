import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
import LazyImage from '../LazyImage/LazyImage'

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
                        }}>
                            <LazyImage 
                                src={item.menu_image} 
                                alt={item.menu_name}
                                className={isactive === item.menu_name ? "active menu-image" : "menu-image"}
                                placeholder={
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '80px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '50%',
                                        color: '#6c757d',
                                        fontSize: '12px'
                                    }}>
                                        📂
                                    </div>
                                }
                            />
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
