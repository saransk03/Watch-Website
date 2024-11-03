import { createContext, useState } from "react";


export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    // 1. add 
    const addToCart = (product) => {
    setCart((cart)=>{
        const existingCart = cart.find(item => item.id === product.id)
        if(existingCart){
            {cart.map((item)=>{
                return item.id === product.id ? {...item, quantity : item.quantity +1} : item
            })
            }
            }
            else{
            return ([...cart, {...product, quantity: 1}])
            }
        })
    }

    // 2. remove
    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id!== itemId))
    }
    
    // 3. update
    const updateCartItemQuantity = (id, amount) => {
        const updatedCart = cart.map(item => item.id === id? {...item, quantity: item.quantity + amount} : item)
        const filteredCart = updatedCart.filter(item => item.quantity > 0)
        setCart(filteredCart)
    }
    
    // 4. read
    const getCartItems = () => {
        return cart
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateCartItemQuantity, getCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider