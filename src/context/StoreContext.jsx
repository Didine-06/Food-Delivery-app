import { createContext, useState } from "react";
import { food_list } from '../assets/assets'


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({})

    const AddToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const RemoveFromCart = (itemId) => {

        if(cartItems[itemId]>1){
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }else{
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }
        
    }

    const getTotalCart = () => {
        let Total = 0;
        for (const item in cartItems) {
            let infoItem = food_list.find((product) => product._id === item)
            Total += infoItem.price * cartItems[item];
        }
        return Total;
    }


    const ContextValue = {
        food_list,
        cartItems,
        setcartItems,
        AddToCart,
        RemoveFromCart,
        getTotalCart
    }

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider