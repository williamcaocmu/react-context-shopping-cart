import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const calcItemCount = () => {
    if (cart.length === 0) return 0;
    return cart.reduce((acc, item) => acc + item.cartQuantity, 0);
  };

  const calcTotal = () => {
    if (cart.length === 0) return 0;
    return cart
      .reduce((acc, item) => acc + item.price * item.cartQuantity, 0)
      .toFixed(2);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      return existingProduct
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          )
        : [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  const itemCount = calcItemCount();
  const total = calcTotal();

  return (
    <CartContext.Provider value={{ cart, addToCart, itemCount, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
