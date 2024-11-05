import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. add
  const addToCart = (product) => {
    setCart((cart) => {
      const existingCart = cart.find((item) => item.id === product.id);
      if (existingCart) {
        return cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { ...product, quantity: 1 }];
      }
    });
  };

  // 2. remove
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // 3. update
  const updateCartItemQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    );
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(filteredCart);
  };

  // 4. read
  const getCartItems = () => {
    return cart;
  };

  // 5.Totol price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 5.Totol no. of items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // 6. cart length
  const cartLength = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        getCartItems,
        totalPrice,
        totalItems,
        cartLength
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
